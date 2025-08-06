import RegistrationForm from "./RegistrationForm";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 flex items-center justify-center px-8 sm:px-6 lg:px-8 py-16 sm:py-12"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Change grid to flex with horizontal layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          {/* Left Section - Image and Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 flex-1">
            {/* Your existing left section content remains exactly the same */}
            {/* Main Title */}
            <div className="text-center lg:text-left space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                India's Biggest Study Abroad Expo
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
                Transform your future with world-class education opportunities.
                Join us for exclusive university meetings and instant admission
                decisions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  50+ Universities
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                  200+ Courses
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path
                      fillRule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  ₹15L Scholarships
                </span>
              </div>
            </div>

            {/* Image and Benefits */}
            <div className="relative">
              {/* Background Shapes */}
              <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-20 h-20 sm:w-32 sm:h-32 bg-pink-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-24 h-24 sm:w-40 sm:h-40 bg-blue-200 rounded-full opacity-60"></div>

              <div className="relative flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
                {/* Main Image */}
                <div className="w-full sm:w-80 h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/girls.png"
                    alt="Student studying abroad"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Benefits Box */}
                <div className="bg-blue-500 rounded-2xl p-4 sm:p-6 text-white shadow-xl w-full lg:w-auto">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    Get Your Global Ticket
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full"></div>
                      <span className="text-xs sm:text-sm">
                        1:1 Live Counselling
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full"></div>
                      <span className="text-xs sm:text-sm">
                        On Spot Application
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full"></div>
                      <span className="text-xs sm:text-sm">0 Visa Fees</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full"></div>
                      <span className="text-xs sm:text-sm">
                        15L in scholarships
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full"></div>
                      <span className="text-xs sm:text-sm">
                        Meet University Representatives
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full"></div>
                      <span className="text-xs sm:text-sm">
                        Free SOP & LOR Guidance
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full"></div>
                      <span className="text-xs sm:text-sm">
                        Accommodation Assistance
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full"></div>
                      <span className="text-xs sm:text-sm">
                        Free IELTS Mock Test
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Registration Form */}
          <div className="order-2 lg:order-2 mt-8 sm:mt-0 flex-1">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;