import React from 'react'

const AboutIreland = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
            Discover Ireland
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Experience the beauty, culture, and educational excellence of Ireland
          </p>
        </div>
        <div className="relative overflow-hidden pb-[56.25%] mb-8">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/ApioyYKP2ZE?si=GgoAuOaH3hZeQxmr&rel=0"
            title="Why Study in Ireland - Education in Ireland"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-8 text-lg text-gray-600">
          <p className="mb-4">
            Ireland, known for its rich history, stunning landscapes, and world-class education system,
            offers an exceptional study abroad experience for international students.
          </p>
          <p>
            From historic universities to modern research facilities, Ireland provides
            a perfect blend of traditional values and contemporary education approaches.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutIreland