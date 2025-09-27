import type { Language, LanguageInfo } from '../types/index.js';

export const AVAILABLE_LANGUAGES: LanguageInfo[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸'
  },
  {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺'
  },
  {
    code: 'uz',
    name: 'Uzbek',
    nativeName: 'O\'zbek',
    flag: '🇺🇿'
  }
];

export const DEFAULT_LANGUAGE: Language = 'en';
export const STORAGE_KEY = 'ecoproject-language';

/**
 * Detects user's preferred language from browser settings
 * Falls back to default language if not supported
 */
export function detectBrowserLanguage(): Language {
  // Get browser language(s)
  const browserLang = navigator.language || navigator.languages?.[0] || '';

  // Extract language code (e.g., 'en-US' -> 'en')
  const langCode = browserLang.split('-')[0].toLowerCase();

  // Check if we support this language
  const supportedLanguages = AVAILABLE_LANGUAGES.map(lang => lang.code);
  if (supportedLanguages.includes(langCode as Language)) {
    return langCode as Language;
  }

  return DEFAULT_LANGUAGE;
}

/**
 * Gets saved language from localStorage
 * Falls back to browser detection if not found
 */
export function getSavedLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && AVAILABLE_LANGUAGES.some(lang => lang.code === saved)) {
      return saved as Language;
    }
  } catch (error) {
    console.warn('Failed to read language from localStorage:', error);
  }

  return detectBrowserLanguage();
}

/**
 * Saves language preference to localStorage
 */
export function saveLanguage(language: Language): void {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch (error) {
    console.warn('Failed to save language to localStorage:', error);
  }
}

/**
 * Sets the document language attribute for accessibility
 */
export function setDocumentLanguage(language: Language): void {
  document.documentElement.lang = language;
}