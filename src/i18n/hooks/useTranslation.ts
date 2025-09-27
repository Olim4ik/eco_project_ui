import { useI18nContext } from '../context/I18nContext.js';
import type { Language, TranslationKeys } from '../types/index.js';

export interface UseTranslationReturn {
  t: TranslationKeys;
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  availableLanguages: Array<{
    code: Language;
    name: string;
    nativeName: string;
    flag: string;
  }>;
}

/**
 * Custom hook for accessing translations and language functionality
 *
 * @returns Object with translation function, current language, and language controls
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { t, currentLanguage, changeLanguage } = useTranslation();
 *
 *   return (
 *     <div>
 *       <h1>{t.hero.title}</h1>
 *       <p>{t.hero.description}</p>
 *       <button onClick={() => changeLanguage('ru')}>
 *         Switch to Russian
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useTranslation(): UseTranslationReturn {
  const {
    translations,
    currentLanguage,
    changeLanguage,
    availableLanguages
  } = useI18nContext();

  return {
    t: translations,
    currentLanguage,
    changeLanguage,
    availableLanguages,
  };
}