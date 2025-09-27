// Main exports for the i18n system
export { I18nProvider } from './context/I18nContext.js';
export { useTranslation } from './hooks/useTranslation.js';
export type { Language, LanguageInfo, TranslationKeys } from './types/index.js';
export {
  AVAILABLE_LANGUAGES,
  DEFAULT_LANGUAGE,
  detectBrowserLanguage,
  getSavedLanguage,
  saveLanguage,
  setDocumentLanguage
} from './utils/language.js';