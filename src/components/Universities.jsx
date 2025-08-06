import { useState } from 'react';

const Universities = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  const universities = [
    {
      id: 1,
      name: 'Trinity College Dublin',
      location: 'Dublin',
      ranking: 'World Top 100',
      founded: '1592',
      students: '18,000+',
      image: 'https://www.fateheducation.com/landingpages/newpages/ireland_LP/ireland-TC_dublin/images/why_choose_img.webp',
      coordinates: { lat: 53.3439, lng: -6.2546 },
      specialties: ['Computer Science', 'Business', 'Arts', 'Medicine'],
      description: 'Ireland\'s oldest university and one of the world\'s most prestigious institutions.'
    },
    {
      id: 2,
      name: 'University College Dublin',
      location: 'Dublin',
      ranking: 'World Top 200',
      founded: '1854',
      students: '33,000+',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      coordinates: { lat: 53.3081, lng: -6.2247 },
      specialties: ['Business', 'Engineering', 'Agriculture', 'Veterinary'],
      description: 'Ireland\'s largest university with a strong focus on research and innovation.'
    },
    {
      id: 3,
      name: 'University College Cork',
      location: 'Cork',
      ranking: 'World Top 300',
      founded: '1845',
      students: '22,000+',
      image: 'https://lh3.googleusercontent.com/p/AF1QipMRIzNCt1Kjvz5fZrnZeBKPfyBU0E59JX-u-TCW=s1360-w1360-h1020-rw',
      coordinates: { lat: 51.8969, lng: -8.4863 },
      specialties: ['Law', 'Medicine', 'Arts', 'Science'],
      description: 'A leading research university known for its beautiful campus and academic excellence.'
    },
    {
      id: 4,
      name: 'Dublin City University',
      location: 'Dublin',
      ranking: 'World Top 500',
      founded: '1980',
      students: '17,000+',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      coordinates: { lat: 53.3851, lng: -6.2587 },
      specialties: ['Business Analytics', 'Communications', 'Engineering', 'Education'],
      description: 'A modern university with strong industry connections and innovative programs.'
    },
    {
      id: 5,
      name: 'University of Limerick',
      location: 'Limerick',
      ranking: 'World Top 600',
      founded: '1972',
      students: '16,000+',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      coordinates: { lat: 52.6739, lng: -8.6497 },
      specialties: ['Engineering', 'Business', 'Arts', 'Health Sciences'],
      description: 'Known for its cooperative education programs and strong industry partnerships.'
    },
    {
      id: 6,
      name: 'National University of Ireland Galway',
      location: 'Galway',
      ranking: 'World Top 400',
      founded: '1845',
      students: '19,000+',
      image: 'data:image/jpeg;base64,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',
      coordinates: { lat: 53.2795, lng: -9.0579 },
      specialties: ['Medicine', 'Arts', 'Law', 'Engineering'],
      description: 'Located in the cultural heart of Ireland with a rich academic tradition.'
    }
  ];

  return (
    <section id="universities" className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Top Universities in Ireland
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover Ireland's world-renowned universities offering cutting-edge programs and exceptional learning environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Interactive Map */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              University Locations
            </h3>
            
            {/* Map Container */}
            <div className="map-container bg-gray-100 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20"></div>
              
              {/* Map Placeholder with University Markers */}
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h4 className="text-xl font-semibold mb-2">Interactive Map</h4>
                  <p className="text-sm">Click on university cards to see locations</p>
                </div>
                
                {/* University Markers */}
                {universities.map((uni, index) => (
                  <div
                    key={uni.id}
                    className={`absolute w-4 h-4 bg-green-600 rounded-full border-2 border-white cursor-pointer transition-all duration-200 hover:scale-125 ${
                      selectedUniversity?.id === uni.id ? 'ring-4 ring-green-300' : ''
                    }`}
                    style={{
                      left: `${20 + (index * 15)}%`,
                      top: `${30 + (index * 10)}%`
                    }}
                    onClick={() => setSelectedUniversity(uni)}
                    title={uni.name}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-medium shadow-lg opacity-0 hover:opacity-100 transition-opacity">
                      {uni.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Legend */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Map Legend</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span>University Location</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span>Major City</span>
                </div>
              </div>
            </div>
          </div>

          {/* University Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Featured Universities
            </h3>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {universities.map((university) => (
                <div
                  key={university.id}
                  className={`bg-white rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedUniversity?.id === university.id
                      ? 'border-green-500 shadow-lg'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                  onClick={() => setSelectedUniversity(university)}
                >
                                     <div className="flex items-start space-x-4">
                     <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-2xl overflow-hidden">
                       {university.image ? (
                         <img 
                           src={university.image} 
                           alt={university.name}
                           className="w-full h-full object-cover"
                         />
                       ) : (
                         <span>🎓</span>
                       )}
                     </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">
                        {university.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {university.location} • Founded {university.founded}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>📊 {university.ranking}</span>
                        <span>👥 {university.students}</span>
                      </div>
                      
                      {selectedUniversity?.id === university.id && (
                        <div className="mt-4 p-4 bg-green-50 rounded-lg">
                          <p className="text-sm text-gray-700 mb-3">
                            {university.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {university.specialties.map((specialty, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* University Stats */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">7</div>
              <div className="text-sm opacity-90">Top Universities</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">125,000+</div>
              <div className="text-sm opacity-90">Total Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Graduate Employment</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">€15K-25K</div>
              <div className="text-sm opacity-90">Average Tuition</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-[#ff6347] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
            View All Universities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Universities; 