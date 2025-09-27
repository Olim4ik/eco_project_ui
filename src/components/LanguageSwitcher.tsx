import { useState } from 'react';
import { useTranslation } from '../i18n';

interface LanguageSwitcherProps {
  variant?: 'dropdown' | 'inline';
  className?: string;
}

export default function LanguageSwitcher({
  variant = 'dropdown',
  className = ''
}: LanguageSwitcherProps) {
  const { currentLanguage, changeLanguage, availableLanguages } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = availableLanguages.find(lang => lang.code === currentLanguage);

  if (variant === 'inline') {
    return (
      <div className={`flex space-x-2 ${className}`}>
        {availableLanguages.map((language) => (
          <button
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
              currentLanguage === language.code
                ? 'bg-green-600 text-white'
                : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
            }`}
            title={language.name}
          >
            <span className="mr-1">{language.flag}</span>
            {language.code.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-500 hover:text-green-600 transition-colors rounded-md hover:bg-green-50"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-base">{currentLang?.flag}</span>
        <span className="hidden sm:inline">{currentLang?.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-20">
            <div className="py-1">
              {availableLanguages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => {
                    changeLanguage(language.code);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center space-x-3 ${
                    currentLanguage === language.code
                      ? 'bg-green-50 text-green-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-base">{language.flag}</span>
                  <div className="flex flex-col">
                    <span>{language.name}</span>
                    <span className="text-xs text-gray-500">{language.nativeName}</span>
                  </div>
                  {currentLanguage === language.code && (
                    <svg
                      className="w-4 h-4 ml-auto text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}