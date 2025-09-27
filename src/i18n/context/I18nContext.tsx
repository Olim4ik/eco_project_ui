import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Language, TranslationKeys, I18nContextType } from '../types/index.js';
import {
  AVAILABLE_LANGUAGES,
  getSavedLanguage,
  saveLanguage,
  setDocumentLanguage
} from '../utils/language.js';

// Translation imports
import enTranslations from '../translations/en.json';

// Dynamic import function for translations
async function loadTranslations(language: Language): Promise<TranslationKeys> {
  try {
    switch (language) {
      case 'en':
        return enTranslations as TranslationKeys;
      case 'ru': {
        const ruTranslations = await import('../translations/ru.json');
        return ruTranslations.default as TranslationKeys;
      }
      case 'uz': {
        const uzTranslations = await import('../translations/uz.json');
        return uzTranslations.default as TranslationKeys;
      }
      default:
        return enTranslations as TranslationKeys;
    }
  } catch (error) {
    console.warn(`Failed to load translations for ${language}, falling back to English:`, error);
    return enTranslations as TranslationKeys;
  }
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => getSavedLanguage());
  const [translations, setTranslations] = useState<TranslationKeys>(enTranslations as TranslationKeys);
  const [isLoading, setIsLoading] = useState(true);

  // Load translations when language changes
  useEffect(() => {
    let isMounted = true;

    async function loadLanguageTranslations() {
      setIsLoading(true);
      try {
        const newTranslations = await loadTranslations(currentLanguage);
        if (isMounted) {
          setTranslations(newTranslations);
          setDocumentLanguage(currentLanguage);
        }
      } catch (error) {
        console.error('Failed to load translations:', error);
        if (isMounted) {
          // Fallback to English on error
          setTranslations(enTranslations as TranslationKeys);
          setDocumentLanguage('en');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadLanguageTranslations();

    return () => {
      isMounted = false;
    };
  }, [currentLanguage]);

  const changeLanguage = (language: Language) => {
    if (language !== currentLanguage) {
      setCurrentLanguage(language);
      saveLanguage(language);
    }
  };

  const contextValue: I18nContextType = {
    currentLanguage,
    translations,
    changeLanguage,
    availableLanguages: AVAILABLE_LANGUAGES,
  };

  // Show loading state while translations are loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18nContext(): I18nContextType {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18nContext must be used within an I18nProvider');
  }
  return context;
}