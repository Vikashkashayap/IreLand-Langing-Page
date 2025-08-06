import { useState } from 'react';

const PopularCourses = () => {
  const [activeTab, setActiveTab] = useState('all');

  const courses = [
    {
      id: 1,
      name: 'Data Science and Analytics',
      category: 'technology',
      duration: '1-2 years',
      university: 'Trinity College Dublin',
      description: 'Advanced data science program focusing on analytics, machine learning, and big data.',
      icon: '�',
      popularity: 'High',
      tuition: '€20,000/year',
      features: ['Machine Learning', 'Big Data Analytics', 'Statistical Analysis']
    },
    {
      id: 2,
      name: 'Computer Science and Software Engineering',
      category: 'technology',
      duration: '2 years',
      university: 'University College Dublin',
      description: 'Comprehensive software engineering program with focus on modern development practices.',
      icon: '💻',
      popularity: 'Very High',
      tuition: '€18,000/year',
      features: ['Software Development', 'System Architecture', 'Cloud Computing']
    },
    {
      id: 3,
      name: 'Business and Management',
      category: 'business',
      duration: '1-2 years',
      university: 'University College Cork',
      description: 'Advanced business program covering management, strategy, and leadership.',
      icon: '�',
      popularity: 'High',
      tuition: '€25,000/year',
      features: ['Strategic Management', 'Leadership Skills', 'Global Business']
    },
    {
      id: 4,
      name: 'Biotechnology and Pharmaceutical Sciences',
      category: 'science',
      duration: '2 years',
      university: 'Dublin City University',
      description: 'Cutting-edge biotech program with focus on pharmaceutical development.',
      icon: '🧬',
      popularity: 'Very High',
      tuition: '€22,000/year',
      features: ['Drug Development', 'Bioprocessing', 'Research Methods']
    },
    {
      id: 5,
      name: 'Environmental Science and Renewable Energy',
      category: 'science',
      duration: '2 years',
      university: 'University of Limerick',
      description: 'Program focusing on sustainability and renewable energy solutions.',
      icon: '🌱',
      popularity: 'High',
      tuition: '€19,000/year',
      features: ['Renewable Energy', 'Sustainability', 'Environmental Impact']
    },
    {
      id: 6,
      name: 'Digital Marketing and Media Communications',
      category: 'business',
      duration: '1 year',
      university: 'Technological University Dublin',
      description: 'Modern digital marketing program with focus on media communications.',
      icon: '📱',
      popularity: 'High',
      tuition: '€17,000/year',
      features: ['Digital Strategy', 'Social Media', 'Content Marketing']
    },
    {
      id: 7,
      name: 'Engineering',
      category: 'engineering',
      duration: '2 years',
      university: 'National University of Ireland Galway',
      description: 'Advanced engineering program with multiple specialization options.',
      icon: '⚙️',
      popularity: 'High',
      tuition: '€21,000/year',
      features: ['Multiple Disciplines', 'Industry Projects', 'Advanced Technologies']
    },
    {
      id: 8,
      name: 'Hospitality and Tourism',
      category: 'hospitality',
      duration: '1-2 years',
      university: 'Shannon College of Hotel Management',
      description: 'Comprehensive program in hospitality management and tourism.',
      icon: '🏨',
      popularity: 'High',
      tuition: '€16,000/year',
      features: ['Hotel Management', 'Tourism Development', 'Event Planning']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'technology', name: 'Technology' },
    { id: 'business', name: 'Business' },
    { id: 'science', name: 'Science' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'hospitality', name: 'Hospitality' }
  ];

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  return (
    <section id="courses" className="py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Popular Courses in Ireland
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover world-class education programs that align with your career goals and open doors to global opportunities.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-5">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeTab === category.id
                  ? 'bg-[#ff6347] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              {/* Course Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{course.icon}</div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    {course.popularity}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {course.description}
                </p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">🎓 {course.university}</span>
                  <span>⏱️ {course.duration}</span>
                </div>
              </div>

              {/* Course Details */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    {course.tuition}
                  </span>
                </div>
                
                <div className="space-y-2 mb-6">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#ff6347] rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-[#ff6347] text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't find your course?
            </h3>
            <p className="text-gray-600 mb-6">
              We have access to hundreds of programs across Ireland. Let us help you find the perfect course for your career goals.
            </p>
            <button className="bg-[#ff6347] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
              Browse All Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses; 