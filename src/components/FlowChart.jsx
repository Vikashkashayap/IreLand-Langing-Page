import React from 'react';

const FlowChart = () => {
  return (
    <div className="py-12 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            Your Study Abroad Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Follow our proven 5-step process to achieve your international education dreams
          </p>
        </div>

        {/* Desktop Flow Chart */}
        <div className="hidden lg:block relative">
          {/* Timeline SVG */}
          <div className="relative mb-12">
            <svg
              width="100%"
              height="120"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full"
            >
              <path
                d="M50 60 Q200 20 400 60 Q600 100 800 60 Q1000 20 1150 60"
                stroke="#d1d5db"
                strokeWidth="5"
                fill="none"
                strokeDasharray="6,6"
              />
              {/* Nodes */}
              <circle cx="200" cy="60" r="12" fill="#ec4899" />
              <circle cx="400" cy="60" r="12" fill="#0ea5e9" />
              <circle cx="600" cy="60" r="12" fill="#22c55e" />
              <circle cx="800" cy="60" r="12" fill="#f59e0b" />
              <circle cx="1000" cy="60" r="12" fill="#8b5cf6" />
            </svg>
          </div>

          {/* Step Boxes */}
          {[
            {
              pos: 'top-0 left-0 -translate-x-1/2',
              color: 'from-pink-500 to-pink-600',
              triangle: 'border-t-pink-500',
              step: 'Step 1',
              text: 'Free Career Counselling and Information Services',
            },
            {
              pos: 'bottom-0 left-1/4 -translate-x-1/2',
              color: 'from-blue-500 to-teal-500',
              triangle: 'border-b-blue-500',
              step: 'Step 2',
              text: 'Registration and Application',
              triangleUp: true,
            },
            {
              pos: 'top-0 left-1/2 -translate-x-1/2',
              color: 'from-green-500 to-green-600',
              triangle: 'border-t-green-500',
              step: 'Step 3',
              text: 'Visa Counselling and Interview Preparation Services',
            },
            {
              pos: 'bottom-0 left-3/4 -translate-x-1/2',
              color: 'from-yellow-500 to-orange-500',
              triangle: 'border-b-yellow-500',
              step: 'Step 4',
              text: 'Travel And Accommodations Arrangements',
              triangleUp: true,
            },
            {
              pos: 'top-0 right-0 translate-x-1/2',
              color: 'from-purple-500 to-indigo-600',
              triangle: 'border-t-purple-500',
              step: 'Step 5',
              text: 'Lift-off to an International Career',
            },
          ].map(({ pos, color, triangle, step, text, triangleUp }, idx) => (
            <div key={idx} className={`absolute ${pos} w-64`}>
              <div className="relative">
                <div className={`absolute left-1/2 ${triangleUp ? 'bottom-0' : 'top-0'} w-0.5 h-16 bg-gray-300 border-l-2 border-dashed border-gray-300`} />
                <div className={`bg-gradient-to-br ${color} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative`}>
                  <div className={`absolute ${triangleUp ? 'bottom-full' : 'top-full'} left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 ${triangleUp ? 'border-b-8' : 'border-t-8'} border-transparent ${triangle}`} />
                  <div className="bg-white bg-opacity-20 rounded-t-lg -m-4 mb-3 p-2">
                    <span className="text-white font-bold text-base tracking-wide">{step}</span>
                  </div>
                  <div className="text-white text-center font-semibold text-sm md:text-base">
                    {text}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet View */}
        <div className="lg:hidden">
          <div className="space-y-6">
            {[
              {
                color: 'from-pink-500 to-pink-600',
                num: '1',
                text: 'Free Career Counselling and Information Services',
              },
              {
                color: 'from-blue-500 to-teal-500',
                num: '2',
                text: 'Registration and Application',
              },
              {
                color: 'from-green-500 to-green-600',
                num: '3',
                text: 'Visa Counselling and Interview Preparation Services',
              },
              {
                color: 'from-yellow-500 to-orange-500',
                num: '4',
                text: 'Travel And Accommodations Arrangements',
              },
              {
                color: 'from-purple-500 to-indigo-600',
                num: '5',
                text: 'Lift-off to an International Career',
              },
            ].map(({ color, num, text }, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 animate-fade-in-up transition duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-full flex items-center justify-center text-white font-bold shadow-md`}>
                  {num}
                </div>
                <div className={`flex-1 bg-gradient-to-br ${color} rounded-xl p-4 shadow-lg`}>
                  <div className="text-white text-center font-semibold text-sm md:text-base">
                    {text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Description Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Your Complete Study Abroad Journey
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed tracking-wide">
              From initial career counseling to your final departure, we guide you through every
              step of your study abroad journey. Our comprehensive services ensure you have all the
              support you need to succeed in your international education adventure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowChart;
