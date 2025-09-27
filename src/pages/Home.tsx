const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-teal-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Waste into Rewards
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Join the gamified recycling revolution! Earn eco-coins, compete with your community, and make environmental impact fun and rewarding.
            </p>
            <div className="space-x-4">
              <button className="bg-yellow-400 text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors shadow-lg">
                🚛 Call Eco Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Learn How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete waste management ecosystem with smart technology, gamification, and community engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚛</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Call Eco Team
              </h3>
              <p className="text-gray-600">
                Quick waste collection booking with calendar integration and geolocation. Schedule pickup at your convenience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Track Vehicle
              </h3>
              <p className="text-gray-600">
                Real-time GPS tracking of collection vehicles. Know exactly when your eco-team will arrive.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Smart Containers
              </h3>
              <p className="text-gray-600">
                Interactive map showing container fill levels in real-time. Find the nearest available drop-off point.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🪙</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Eco-Coins System
              </h3>
              <p className="text-gray-600">
                Scan QR codes to earn rewards. Exchange eco-coins for products, discounts, and exclusive offers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Volunteer Network
              </h3>
              <p className="text-gray-600">
                Join local teams, organize community events, and lead environmental initiatives in your area.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎮</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Games & Learning
              </h3>
              <p className="text-gray-600">
                Educational challenges, competitions, and leaderboards. Learn while you earn and compete with friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform connects everyone in the recycling ecosystem - from residents to businesses to community leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg text-center border border-green-200">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Residents
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Order waste collection</li>
                <li>• Earn eco-coins</li>
                <li>• Track personal impact</li>
                <li>• Access educational resources</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-lg text-center border border-teal-200">
              <div className="w-16 h-16 bg-teal-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Volunteers
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Organize local eco-teams</li>
                <li>• Lead community initiatives</li>
                <li>• Coordinate events</li>
                <li>• Build networks</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center border border-blue-200">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Companies
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Partner waste services</li>
                <li>• Sustainability programs</li>
                <li>• Employee engagement</li>
                <li>• Corporate sponsorship</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg text-center border border-purple-200">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👷</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Operators
              </h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Manage collection routes</li>
                <li>• Monitor systems</li>
                <li>• Coordinate teams</li>
                <li>• Track efficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start earning rewards and making environmental impact in just 5 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-2xl font-bold text-green-800">1</span>
                <div className="hidden md:block absolute left-full top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gray-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Register
              </h3>
              <p className="text-gray-600 text-sm">
                Set up your profile and choose your role in the eco-community
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-2xl font-bold text-green-800">2</span>
                <div className="hidden md:block absolute left-full top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gray-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Book or Drop
              </h3>
              <p className="text-gray-600 text-sm">
                Schedule eco-team pickup or use smart container drop-off points
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-2xl font-bold text-green-800">3</span>
                <div className="hidden md:block absolute left-full top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gray-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Scan QR
              </h3>
              <p className="text-gray-600 text-sm">
                Scan QR codes on containers to earn eco-coins for recycling
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-2xl font-bold text-green-800">4</span>
                <div className="hidden md:block absolute left-full top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gray-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Compete
              </h3>
              <p className="text-gray-600 text-sm">
                Join challenges, climb leaderboards, and earn achievement badges
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-800">5</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Redeem
              </h3>
              <p className="text-gray-600 text-sm">
                Exchange eco-coins for rewards in our marketplace
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
              Powered by Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technology that makes waste management smart, engaging, and efficient
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Smart IoT
              </h3>
              <p className="text-gray-600 text-sm">
                Container sensors and real-time monitoring
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Gamification
              </h3>
              <p className="text-gray-600 text-sm">
                Badges, leaderboards, and achievements
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mobile PWA
              </h3>
              <p className="text-gray-600 text-sm">
                Seamless smartphone experience
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                API Ecosystem
              </h3>
              <p className="text-gray-600 text-sm">
                Partner integration for rewards
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
              Our Growing Impact
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Join thousands of eco-champions who are already making a difference
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">2.5K+</div>
              <div className="text-green-100">Tons Recycled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">15K+</div>
              <div className="text-green-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">500K+</div>
              <div className="text-green-100">Eco-Coins Earned</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">12</div>
              <div className="text-green-100">Cities Participating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Earning Rewards?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our eco-community today and start earning eco-coins for every recycling action. Your impact starts now!
          </p>
          <div className="space-x-4">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
              🚛 Call Eco Team Now
            </button>
            <button className="bg-yellow-400 text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors shadow-lg">
              🪙 Start Earning Coins
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>🌱 Free to join • 🎮 Instant rewards • 🌍 Make real impact</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
