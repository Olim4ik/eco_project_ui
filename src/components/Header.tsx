import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-gray-900 transition-colors hover:text-green-600">
              EcoProject
            </Link>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-3 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors min-h-touch min-w-touch"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-45' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <nav className="hidden md:flex space-x-10">
            <Link
              to="/"
              className="text-base font-medium text-gray-500 hover:text-green-600 transition-colors"
            >
              {t.nav.home}
            </Link>
            <Link
              to="/about"
              className="text-base font-medium text-gray-500 hover:text-green-600 transition-colors"
            >
              {t.nav.aboutProject}
            </Link>
            <div className="relative group">
              <button className="text-base font-medium text-gray-500 hover:text-green-600 transition-colors flex items-center ">
                {t.nav.services}
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-base font-medium text-gray-500 hover:text-green-600 transition-colors flex items-center">
                {t.nav.ecoCoins}
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <Link
              to="/volunteers"
              className="text-base font-medium text-gray-500 hover:text-green-600 transition-colors"
            >
              {t.nav.volunteers}
            </Link>
            {/* <Link
              to="/games"
              className="text-base font-medium text-gray-500 hover:text-green-600 transition-colors"
            >
              {t.nav.games}
            </Link> */}
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
            <LanguageSwitcher />
            <button className="bg-yellow-400 text-green-800 px-4 py-3 rounded-md text-sm font-medium hover:bg-yellow-300 transition-all duration-200 shadow-sm hover:shadow-md min-h-touch transform hover:-translate-y-0.5">
              {t.nav.callEcoTeam}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50 animate-slide-down">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <Link
                    to="/"
                    className="text-xl sm:text-2xl font-bold text-gray-900 transition-colors hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    EcoProject
                  </Link>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-3 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors min-h-touch min-w-touch"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-6">
                  <Link
                    to="/"
                    className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors py-2 min-h-touch flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.home}
                  </Link>
                  <Link
                    to="/about"
                    className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors py-2 min-h-touch flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.aboutProject}
                  </Link>
                  <div className="py-2">
                    <div className="text-lg font-medium text-gray-900 mb-3">
                      {t.nav.services}
                    </div>
                    <div className="ml-4 space-y-3">
                      <div className="text-base text-gray-600 py-1">• {t.services.callEcoTeam.title}</div>
                      <div className="text-base text-gray-600 py-1">• {t.services.trackVehicle.title}</div>
                      <div className="text-base text-gray-600 py-1">• {t.services.smartContainers.title}</div>
                    </div>
                  </div>
                  <div className="py-2">
                    <div className="text-lg font-medium text-gray-900 mb-3">
                      {t.nav.ecoCoins}
                    </div>
                    <div className="ml-4 space-y-3">
                      <div className="text-base text-gray-600 py-1">• Scan QR Codes</div>
                      <div className="text-base text-gray-600 py-1">• Marketplace</div>
                    </div>
                  </div>
                  <Link
                    to="/volunteers"
                    className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors py-2 min-h-touch flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.volunteers}
                  </Link>
                  <div className="pt-4 border-t border-gray-200">
                    <LanguageSwitcher variant="inline" className="justify-center" />
                  </div>
                </nav>
              </div>
              <div className="py-6 px-5">
                <button className="w-full bg-yellow-400 text-green-800 px-6 py-4 rounded-lg text-base font-semibold hover:bg-yellow-300 transition-all duration-200 shadow-sm hover:shadow-md min-h-touch transform hover:-translate-y-0.5">
                  {t.nav.callEcoTeam}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
