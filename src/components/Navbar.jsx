import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'Why Ireland', href: '#why-ireland' },
    { name: 'Universities', href: '#universities' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - (navRef.current?.offsetHeight || 0),
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleApplyNowClick = () => {
    scrollToSection('home'); // Assuming you have a contact section
    setIsMobileMenuOpen(false);
  };
  

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm shadow-md py-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with enhanced styling */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => scrollToSection('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-[#ff6347] to-[#ff4500] rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={logo} alt="Study in Ireland Logo" className="w-8 h-8 object-contain" />
            </div>
            <span className="font-bold text-xl text-gray-800 bg-gradient-to-r from-[#ff6347] to-[#ff4500] bg-clip-text text-transparent">
              Study In Ireland
            </span>
          </div>

          {/* Desktop Navigation with active state */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3 py-2 font-medium transition-all duration-300 ${
                    activeSection === sectionId 
                      ? 'text-[#ff6347] font-semibold' 
                      : 'text-gray-700 hover:text-[#ff6347]'
                  }`}
                >
                  {item.name}
                  {activeSection === sectionId && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-[#ff6347] rounded-full"></span>
                  )}
                </a>
              );
            })}
            <button 
              onClick={handleApplyNowClick}
              className="bg-gradient-to-r from-[#ff6347] to-[#ff4500] text-white px-6 py-2 rounded-full font-medium hover:from-[#ff4500] hover:to-[#ff6347] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ml-4"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile menu button with animation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff6347]"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-center">
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'
                }`}></span>
                <span className={`block h-0.5 w-6 bg-current transition duration-300 ease-in-out mt-1 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation with enhanced styling */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-lg mt-2 shadow-xl overflow-hidden transition-all duration-300">
            <div className="px-2 pt-2 pb-4 space-y-2">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-4 py-3 rounded-md font-medium transition-colors duration-200 ${
                      activeSection === sectionId
                        ? 'bg-[#ff6347]/10 text-[#ff6347]'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <button
                onClick={handleApplyNowClick}
                className="w-full mt-2 bg-gradient-to-r from-[#ff6347] to-[#ff4500] text-white px-6 py-3 rounded-full font-medium hover:from-[#ff4500] hover:to-[#ff6347] transition-all duration-300 shadow-lg"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;