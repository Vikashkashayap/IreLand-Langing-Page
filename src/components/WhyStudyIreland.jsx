import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Briefcase, 
  Award, 
  Users, 
  BookOpen, 
  Clock,
  ChevronRight,
  Download,
  Calendar,
  MessageSquare,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const WhyStudyIreland = () => {
  const sectionRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('benefits');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Tech Hub',
      description: 'Ireland is home to 9 of the top 10 global tech companies including Google, Facebook, Apple, and Microsoft.',
      stats: '500+ Tech Companies',
      color: 'from-blue-500 to-blue-600',
      companies: ['Google', 'Apple', 'Microsoft', 'Facebook', 'Intel', 'Twitter', 'LinkedIn', 'Amazon', 'IBM', 'Salesforce']
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'EU & Schengen Access',
      description: 'Study in Ireland and gain access to 27 EU countries and the entire Schengen zone for travel and work.',
      stats: '27 EU Countries',
      color: 'from-green-500 to-green-600',
      countries: ['France', 'Germany', 'Italy', 'Spain', 'Netherlands', 'Belgium', 'Austria', 'Portugal', 'Sweden']
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: '2-Year Post-Study Visa',
      description: 'Graduates can stay in Ireland for up to 2 years to work and gain international experience.',
      stats: '24 Months',
      color: 'from-purple-500 to-purple-600',
      visaDetails: ['No job offer required', 'Work full-time', 'Pathway to permanent residency', 'Bring dependents']
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Industry-Linked Curriculum',
      description: 'Programs designed with industry partners to ensure graduates are job-ready with practical skills.',
      stats: '95% Employment Rate',
      color: 'from-orange-500 to-orange-600',
      partners: ['Accenture', 'Dell', 'Pfizer', 'Johnson & Johnson', 'EY', 'PwC', 'KPMG', 'Boston Scientific']
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'English-Speaking Country',
      description: 'No language barriers - study in English and improve your language skills for global opportunities.',
      stats: '100% English',
      color: 'from-red-500 to-red-600',
      advantages: ['No IELTS for some programs', 'Business language is English', 'Global communication skills', 'No translation needed']
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Top-Ranked Universities',
      description: 'Irish universities consistently rank among the world\'s best for quality education and research.',
      stats: 'Top 1% Globally',
      color: 'from-indigo-500 to-indigo-600',
      universities: ['Trinity College Dublin', 'University College Dublin', 'National University of Ireland', 'University College Cork', 'Dublin City University']
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      country: "India",
      course: "MSc Computer Science",
      university: "Trinity College Dublin",
      text: "The industry connections through my program led to an internship at Google and now a full-time position. Ireland's tech ecosystem is incredible!",
      rating: 5
    },
    {
      name: "Carlos Mendez",
      country: "Mexico",
      course: "MBA",
      university: "University College Dublin",
      text: "The 2-year stay-back visa gave me time to find the perfect job. I now work at Accenture with clients across Europe.",
      rating: 5
    },
    {
      name: "Wei Zhang",
      country: "China",
      course: "Pharmaceutical Sciences",
      university: "University College Cork",
      text: "Ireland's pharmaceutical industry is world-class. I had multiple job offers before graduation thanks to the university's industry partnerships.",
      rating: 5
    }
  ];

  return (
    <section 
      id="why-ireland" 
      ref={sectionRef} 
      className="py-5 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ x: [0, -80, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ x: [0, 60, 0], y: [0, -80, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-400 rounded-full blur-3xl"
        ></motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg inline-flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Why Choose Ireland?
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Why Study in Ireland?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the unique advantages that make Ireland the perfect destination for international students seeking world-class education and global opportunities.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-gray-100 p-1">
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-6 py-3 rounded-lg transition-all flex items-center ${activeTab === 'benefits' ? 'bg-white shadow-md text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Key Benefits
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-6 py-3 rounded-lg transition-all flex items-center ${activeTab === 'testimonials' ? 'bg-white shadow-md text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
            >
              <Users className="w-5 h-5 mr-2" />
              Student Stories
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'benefits' && (
            <motion.div
              key="benefits"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative"
                  >
                    {/* Gradient background overlay */}
                    {hoveredCard === index && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-10 rounded-2xl pointer-events-none`}
                        style={{ zIndex: 1 }}
                      />
                    )}
                    
                    <div className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${benefit.color} shadow-lg relative z-10`}>
                      {benefit.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                      {benefit.description}
                    </p>
                    
                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {benefit.stats}
                      </span>
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Expanded details on hover */}
                    {hoveredCard === index && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 pt-6 border-t border-gray-100 relative z-20 bg-white bg-opacity-95 rounded-b-2xl"
                      >
                        <h4 className="text-sm font-semibold text-gray-500 mb-2">HIGHLIGHTS</h4>
                        <ul className="space-y-2">
                          {(benefit.companies || benefit.countries || benefit.visaDetails || benefit.partners || benefit.advantages || benefit.universities)?.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'testimonials' && (
            <motion.div
              key="testimonials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-16"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.country}</p>
                      <p className="text-sm text-blue-600">{testimonial.course} - {testimonial.university}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl backdrop-blur-sm bg-opacity-80 mb-5"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "35,000+", label: "International Students", icon: <Users className="w-8 h-8 mx-auto mb-3 text-green-600" /> },
              { value: "95%", label: "Graduate Employment Rate", icon: <Briefcase className="w-8 h-8 mx-auto mb-3 text-green-600" /> },
              { value: "€15K-25K", label: "Average Annual Tuition", icon: <BookOpen className="w-8 h-8 mx-auto mb-3 text-green-600" /> },
              { value: "24", label: "Months Post-Study Visa", icon: <Clock className="w-8 h-8 mx-auto mb-3 text-green-600" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-4"
              >
                {stat.icon}
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of students who have already chosen Ireland for their international education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200 shadow-lg flex items-center justify-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyStudyIreland;