import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: 'What are the entry requirements for international students?',
      answer: 'Entry requirements vary by university and program. Generally, you\'ll need a high school diploma or equivalent for undergraduate programs, and a bachelor\'s degree for postgraduate programs. English language proficiency (IELTS 6.0-7.0 or equivalent) is also required. Some programs may have additional requirements like portfolios, interviews, or work experience.',
      category: 'Admissions'
    },
    {
      question: 'How much does it cost to study in Ireland?',
      answer: 'Tuition fees range from €15,000 to €25,000 per year for international students. Living costs are approximately €8,000-12,000 per year, including accommodation, food, transportation, and other expenses. Dublin is more expensive than other cities in Ireland. Many universities offer scholarships and financial aid for international students.',
      category: 'Costs'
    },
    {
      question: 'Can I work while studying in Ireland?',
      answer: 'Yes, international students can work up to 20 hours per week during term time and full-time during holidays. This helps with living expenses and provides valuable work experience. Popular part-time jobs include retail, hospitality, and on-campus positions. The minimum wage in Ireland is €11.30 per hour.',
      category: 'Work'
    },
    {
      question: 'What is the post-study work visa in Ireland?',
      answer: 'Ireland offers a 2-year post-study work visa (Third Level Graduate Scheme) for international students who complete their studies. This allows you to work full-time in Ireland and gain valuable international work experience. The visa is renewable and can lead to permanent residency opportunities.',
      category: 'Visa'
    },
    {
      question: 'How do I apply for a student visa?',
      answer: 'You\'ll need to apply for a Student Visa (D-Type) through the Irish Naturalisation and Immigration Service (INIS). Required documents include: acceptance letter from university, proof of funds, medical insurance, and passport. The application process takes 4-8 weeks, so apply well in advance of your course start date.',
      category: 'Visa'
    },
    {
      question: 'What are the best cities to study in Ireland?',
      answer: 'Dublin is the most popular choice with the highest concentration of universities and job opportunities. Cork offers a more affordable cost of living with excellent universities. Galway is known for its cultural scene and friendly atmosphere. Limerick provides a great student experience with modern facilities. Each city has its unique advantages.',
      category: 'Location'
    },
    {
      question: 'Is Ireland safe for international students?',
      answer: 'Ireland is one of the safest countries in the world with low crime rates. The Irish people are known for their friendliness and hospitality towards international students. Universities provide comprehensive support services including accommodation assistance, health services, and 24/7 emergency support. The country has excellent healthcare facilities.',
      category: 'Safety'
    },
    {
      question: 'What are the job prospects after graduation?',
      answer: 'Ireland has a strong economy with high demand for skilled graduates, especially in technology, healthcare, and business sectors. Major companies like Google, Facebook, Apple, and Microsoft have European headquarters in Ireland. The 2-year post-study visa provides excellent opportunities to gain work experience and potentially secure permanent employment.',
      category: 'Career'
    },
    {
      question: 'Do I need health insurance in Ireland?',
      answer: 'Yes, international students are required to have private health insurance while studying in Ireland. This covers medical expenses, hospital stays, and emergency treatment. Many universities offer health insurance packages for international students. The cost is approximately €500-800 per year depending on coverage level.',
      category: 'Health'
    },
    {
      question: 'How can I find accommodation in Ireland?',
      answer: 'Universities offer on-campus accommodation, but it\'s limited and competitive. Many students opt for private accommodation including shared apartments, student residences, or homestays. Popular websites include Daft.ie, Rent.ie, and university accommodation portals. Start looking 3-6 months before arrival, especially in Dublin where demand is high.',
      category: 'Accommodation'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Filter FAQs based on search term
  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get unique categories
  const categories = [...new Set(faqs.map(faq => faq.category))];

  const handleWhatsAppClick = () => {
    const contactSection = document.getElementById('home');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLiveChatClick = () => {
    const contactSection = document.getElementById('home');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    const contactSection = document.getElementById('home');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  

  return (
    <section id="faq" className="py-5 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Expert Guidance
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get comprehensive answers to the most common questions about studying in Ireland from our expert counselors.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search questions, answers, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg transition-all duration-200"
            />
          </div>
        </div>

        {/* Category Pills */}
        {searchTerm === '' && (
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-white border-2 border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-600 transition-all duration-200 font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div 
              key={index} 
              className="faq-item bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-200 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-600 font-semibold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-green-600 transition-colors duration-200">
                      {faq.question}
                    </h3>
                    <div className="mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-200 group-hover:bg-green-100 ${
                    openIndex === index ? 'bg-green-100' : ''
                  }`}>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180 text-green-600' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <p className="text-gray-600 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Contact Section */}
        <div className="mt-5 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl p-10 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Need More Help?
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our expert counselors are here to help you with any questions about studying in Ireland. Get personalized guidance today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
              onClick={handleWhatsAppClick}
               className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
                <span className="flex items-center justify-center">
                  <span className="mr-2">💬</span>
                  Connect with Us
                </span>
              </button>
              <button onClick={handleLiveChatClick}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-200 transform hover:scale-105">
                <span className="flex items-center justify-center">
                  <span className="mr-2">💬</span>
                  Live Chat
                </span>
              </button>
              <button onClick={handleEmailClick}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-200 transform hover:scale-105">
                <span className="flex items-center justify-center">
                  <span className="mr-2">📧</span>
                  Email Us
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Quick Links */}
        <div className="mt-5grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📋</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-3 text-xl">Application Guide</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Step-by-step guide to applying for Irish universities with expert tips and checklists.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-200 w-full">
              Download Guide →
            </button>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💰</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-3 text-xl">Cost Calculator</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Calculate your total study and living costs with our comprehensive budget planner.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 w-full">
              Calculate Now →
            </button>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🎓</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-3 text-xl">Course Finder</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Find the perfect course for your career goals with our advanced search tool.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors duration-200 w-full">
              Browse Courses →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 