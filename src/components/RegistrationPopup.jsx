import { useState, useEffect } from "react";
import RegistrationForm from "./RegistrationForm";

const RegistrationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  // Don't render anything if popup is not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
      {/* Popup Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 max-h-[85vh] overflow-y-auto w-96 max-w-[90vw]">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200"
          aria-label="Close popup"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Form Content */}
        <div className="p-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Start Your Journey to Ireland!
            </h2>
            <p className="text-gray-600 text-sm">
              Get personalized guidance for studying in Ireland
            </p>
          </div>
          
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPopup; 