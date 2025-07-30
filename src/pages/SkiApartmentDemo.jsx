import {VotingPoll} from '../components/VotingPoll'

export function SkiApartmentDemo() {
  const skiTripQuestions = [
    {
      question: 'Where should we organize your next ski trip?',
      options: [
        'Aspen, Colorado',
        'Whistler, Canada',
        'Zermatt, Switzerland',
        'Niseko, Japan',
      ],
    },
    {
      question: 'What type of accommodation do you prefer?',
      options: [
        'Luxury Hotel',
        'Ski-in Chalet',
        'Mountain Lodge',
        'Apartment Rental',
      ],
    },
    {
      question: 'How many people will be in your group?',
      options: ['2-4 people', '5-8 people', '9-12 people', '12+ people'],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Top Navigation Bar */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-4">
              <a
                href="/"
                className="text-sm font-medium transition-colors hover:text-blue-300 flex items-center space-x-2"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>Back to Poll Builder</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-400">Ski Trip Demo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                <span className="font-bold text-xl text-gray-900">
                  Alpine Adventures
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Premium Ski Trip Planning
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Plan Your Dream Ski Adventure!
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Tell us your preferences and we'll help you plan the perfect ski
              trip. From luxury resorts to hidden gems, we create unforgettable
              experiences.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm opacity-75">
              <span>🏔️ World-Class Resorts</span>
              <span>•</span>
              <span>🎿 Expert Guides</span>
              <span>•</span>
              <span>🏨 Luxury Accommodations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Popular Destinations
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Aspen, Colorado:</span>
                  <span>Luxury & Nightlife</span>
                </div>
                <div className="flex justify-between">
                  <span>Whistler, Canada:</span>
                  <span>World-Class Terrain</span>
                </div>
                <div className="flex justify-between">
                  <span>Zermatt, Switzerland:</span>
                  <span>Alpine Charm</span>
                </div>
                <div className="flex justify-between">
                  <span>Niseko, Japan:</span>
                  <span>Powder Paradise</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Our Services Include
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Custom Itineraries</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Airport Transfers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Ski Equipment Rental</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Poll */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Trip Planning Survey
                </h2>
                <p className="text-gray-600">
                  Help us understand what destinations and accommodations you
                  prefer
                </p>
              </div>
              <div className="max-w-md mx-auto px-0 sm:px-6">
                <VotingPoll
                  title="Next Trip Planning"
                  theme="light"
                  primaryColor="#3b82f6"
                  showTitle={false}
                  titleFontSize="text-xl"
                  questionFontSize="text-lg"
                  optionFontSize="text-base"
                  voteCountFontSize="text-sm"
                  totalVotesFontSize="text-sm"
                  buttonBackgroundColor="#3b82f6"
                  buttonTextColor="#ffffff"
                  pollBackgroundColor="#ffffff"
                  pollQuestions={skiTripQuestions}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Alpine Adventures</h4>
              <p className="text-sm text-gray-400">
                Premium ski trip planning with custom itineraries, luxury
                accommodations, and expert guides worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="text-sm text-gray-400 space-y-1">
                <p>456 Adventure Lane</p>
                <p>Denver, CO 80202</p>
                <p>info@alpineadventures.com</p>
                <p>(303) 555-0123</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <span className="text-sm text-gray-400">Instagram</span>
                <span className="text-sm text-gray-400">Facebook</span>
                <span className="text-sm text-gray-400">Twitter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
