import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              EcoProject
            </Link>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
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
              <button className="text-base font-medium text-gray-500 hover:text-green-600 transition-colors flex items-center">
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
            <button className="bg-yellow-400 text-green-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-300 transition-colors shadow-sm">
              {t.nav.callEcoTeam}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-gray-900">
                  EcoProject
                </Link>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
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
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    to="/"
                    className="text-base font-medium text-gray-900 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.home}
                  </Link>
                  <Link
                    to="/about"
                    className="text-base font-medium text-gray-900 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.aboutProject}
                  </Link>
                  <div className="text-base font-medium text-gray-900">
                    {t.nav.services}
                    <div className="ml-4 mt-2 space-y-2">
                      <div className="text-sm text-gray-600">• {t.services.callEcoTeam.title}</div>
                      <div className="text-sm text-gray-600">• {t.services.trackVehicle.title}</div>
                      <div className="text-sm text-gray-600">• {t.services.smartContainers.title}</div>
                    </div>
                  </div>
                  <div className="text-base font-medium text-gray-900">
                    {t.nav.ecoCoins}
                    <div className="ml-4 mt-2 space-y-2">
                      <div className="text-sm text-gray-600">• Scan QR Codes</div>
                      <div className="text-sm text-gray-600">• Marketplace</div>
                    </div>
                  </div>
                  <Link
                    to="/volunteers"
                    className="text-base font-medium text-gray-900 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.volunteers}
                  </Link>
                  <Link
                    to="/games"
                    className="text-base font-medium text-gray-900 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.games}
                  </Link>
                  <div className="pt-4">
                    <LanguageSwitcher variant="inline" />
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <button className="w-full bg-yellow-400 text-green-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-300 transition-colors">
                {t.nav.callEcoTeam}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
