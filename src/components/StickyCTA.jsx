const StickyCTA = () => {
  const handleCTAClick = () => {
    // Scroll to the contact form or open a modal
    const contactSection = document.getElementById('home');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <button
        onClick={handleCTAClick}
        className="bg-[#ff6347] text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold shadow-lg hover:bg-[#ff4827] transition-all duration-200 flex items-center space-x-1 md:space-x-2 hover:scale-105 transform text-sm md:text-base"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <span className="hidden sm:inline">Apply Now</span>
        <span className="sm:hidden">Apply</span>
      </button>
    </div>
  );
};

export default StickyCTA; 