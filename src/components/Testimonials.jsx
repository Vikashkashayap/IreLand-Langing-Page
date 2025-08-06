import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      country: 'China',
      course: 'MSc Computer Science',
      university: 'Trinity College Dublin',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'Studying in Ireland was the best decision I ever made. The quality of education, the friendly people, and the career opportunities I got after graduation exceeded all my expectations.',
      rating: 5,
      year: '2023',
      currentJob: 'Software Engineer at Google Dublin'
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      country: 'Egypt',
      course: 'MBA',
      university: 'University College Dublin',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'The MBA program in Ireland gave me not just academic knowledge but also practical business skills. I now work for a leading tech company in Dublin and couldn\'t be happier.',
      rating: 5,
      year: '2022',
      currentJob: 'Business Analyst at Microsoft'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      country: 'Spain',
      course: 'BSc Nursing',
      university: 'University College Cork',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'The nursing program in Ireland is world-class. The clinical placements and hands-on experience prepared me perfectly for my career. I now work in a top hospital in Dublin.',
      rating: 5,
      year: '2023',
      currentJob: 'Registered Nurse at St. James Hospital'
    },
    {
      id: 4,
      name: 'Priya Patel',
      country: 'India',
      course: 'MSc Business Analytics',
      university: 'Dublin City University',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'Ireland\'s business analytics program is cutting-edge. The industry connections and real-world projects helped me land a great job in data science.',
      rating: 5,
      year: '2023',
      currentJob: 'Data Scientist at LinkedIn'
    },
    {
      id: 5,
      name: 'Lucas Silva',
      country: 'Brazil',
      course: 'BEng Mechanical Engineering',
      university: 'University of Limerick',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'The engineering program in Ireland is excellent. The practical approach and industry partnerships gave me the skills I needed for my career.',
      rating: 5,
      year: '2022',
      currentJob: 'Mechanical Engineer at Intel'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const handleCTAClick = () => {
    // Scroll to the contact form or open a modal
    const contactSection = document.getElementById('home');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our international students who have successfully built their careers in Ireland.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Student Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-green-100">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Quote */}
                <div className="mb-6">
                  <div className="text-4xl text-green-400 mb-4">"</div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                    {testimonials[currentIndex].quote}
                  </p>
                </div>

                {/* Student Info */}
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].country} • {testimonials[currentIndex].course}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].university} • {testimonials[currentIndex].year}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Current Job */}
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Currently:</span> {testimonials[currentIndex].currentJob}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Student Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Employment Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">5000+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-gray-600 mb-6">
              Start your journey to success in Ireland. Our expert counselors are here to guide you every step of the way.
            </p>
            <button onClick={handleCTAClick}
            className="bg-[#ff6347] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
              Start Your Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 