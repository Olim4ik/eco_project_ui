import { useTranslation } from '../i18n';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-teal-600 to-green-700 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg xs:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed px-2">
              {t.hero.description}
            </p>
            <div className="flex flex-col xs:flex-row gap-4 xs:gap-4 justify-center items-center xs:space-x-0">
              <button className="w-full xs:w-auto bg-yellow-400 text-green-800 px-6 xs:px-8 py-3 xs:py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-h-touch min-w-touch text-sm xs:text-base animate-pulse-slow sm:animate-none">
                {t.hero.callEcoTeamBtn}
              </button>
              <button className="w-full xs:w-auto border-2 border-white text-white px-6 xs:px-8 py-3 xs:py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200 min-h-touch min-w-touch text-sm xs:text-base">
                {t.hero.learnMoreBtn}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-2">
              {t.services.title}
            </h2>
            <p className="text-lg xs:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              {t.services.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 animate-slide-up">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl">🚛</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {t.services.callEcoTeam.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t.services.callEcoTeam.description}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 animate-slide-up">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl">📍</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {t.services.trackVehicle.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t.services.trackVehicle.description}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 animate-slide-up">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl">📊</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {t.services.smartContainers.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t.services.smartContainers.description}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 animate-slide-up">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl">🪙</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {t.services.ecoCoins.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t.services.ecoCoins.description}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 animate-slide-up">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl">🤝</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {t.services.volunteerNetwork.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t.services.volunteerNetwork.description}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 animate-slide-up">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl">🎮</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {t.services.gamesLearning.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t.services.gamesLearning.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-2">
              {t.userTypes.title}
            </h2>
            <p className="text-lg xs:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              {t.userTypes.description}
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-lg text-center border border-green-200 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 animate-slide-up">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl">🏠</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {t.userTypes.residents.title}
              </h3>
              <ul className="text-gray-600 text-xs sm:text-sm space-y-2 leading-relaxed">
                {t.userTypes.residents.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 sm:p-8 rounded-lg text-center border border-teal-200 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 animate-slide-up">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-teal-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl">🤝</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {t.userTypes.volunteers.title}
              </h3>
              <ul className="text-gray-600 text-xs sm:text-sm space-y-2 leading-relaxed">
                {t.userTypes.volunteers.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-lg text-center border border-blue-200 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 animate-slide-up">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl">🏢</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {t.userTypes.companies.title}
              </h3>
              <ul className="text-gray-600 text-xs sm:text-sm space-y-2 leading-relaxed">
                {t.userTypes.companies.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-lg text-center border border-purple-200 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 animate-slide-up">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl sm:text-3xl">👷</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {t.userTypes.operators.title}
              </h3>
              <ul className="text-gray-600 text-xs sm:text-sm space-y-2 leading-relaxed">
                {t.userTypes.operators.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-2">
              {t.howItWorks.title}
            </h2>
            <p className="text-lg xs:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              {t.howItWorks.description}
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 animate-slide-up">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-xl sm:text-2xl font-bold text-green-800">1</span>
                <div className="hidden lg:block absolute left-full top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gray-300"></div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                {t.howItWorks.steps.register.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {t.howItWorks.steps.register.description}
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 animate-slide-up">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-xl sm:text-2xl font-bold text-green-800">2</span>
                <div className="hidden lg:block absolute left-full top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gray-300"></div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                {t.howItWorks.steps.bookOrDrop.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {t.howItWorks.steps.bookOrDrop.description}
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 animate-slide-up">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-xl sm:text-2xl font-bold text-green-800">3</span>
                <div className="hidden lg:block absolute left-full top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gray-300"></div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                {t.howItWorks.steps.scanQR.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {t.howItWorks.steps.scanQR.description}
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 animate-slide-up">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-xl sm:text-2xl font-bold text-green-800">4</span>
                <div className="hidden lg:block absolute left-full top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gray-300"></div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                {t.howItWorks.steps.compete.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {t.howItWorks.steps.compete.description}
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 animate-slide-up">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl font-bold text-green-800">5</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                {t.howItWorks.steps.redeem.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {t.howItWorks.steps.redeem.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.technology.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.technology.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t.technology.smartIoT.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {t.technology.smartIoT.description}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t.technology.gamification.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {t.technology.gamification.description}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t.technology.mobilePWA.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {t.technology.mobilePWA.description}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t.technology.apiEcosystem.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {t.technology.apiEcosystem.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.stats.title}
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              {t.stats.description}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">2.5K+</div>
              <div className="text-green-100">{t.stats.tonsRecycled}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">15K+</div>
              <div className="text-green-100">{t.stats.activeUsers}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">500K+</div>
              <div className="text-green-100">{t.stats.ecoCoinsEarned}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">12</div>
              <div className="text-green-100">{t.stats.citiesParticipating}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl xs:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-2">
            {t.cta.title}
          </h2>
          <p className="text-lg xs:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            {t.cta.description}
          </p>
          <div className="flex flex-col xs:flex-row gap-4 xs:gap-4 justify-center items-center xs:space-x-0">
            <button className="w-full xs:w-auto bg-green-600 text-white px-6 xs:px-8 py-3 xs:py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-h-touch min-w-touch text-sm xs:text-base">
              {t.cta.callEcoTeamBtn}
            </button>
            <button className="w-full xs:w-auto bg-yellow-400 text-green-800 px-6 xs:px-8 py-3 xs:py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-h-touch min-w-touch text-sm xs:text-base">
              {t.cta.startEarningBtn}
            </button>
          </div>
          <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500 px-2">
            <p>{t.cta.benefits}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
