import { useState } from "react";

const RegistrationForm = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "91",
    phone: "",
    currentState: "",
    currentCity: "",
    countryPreference: "",
    courseInterested: "",
    intakePreference: "",
    greScore: "",
    gmatScore: "",
    satScore: "",
    ieltsScore: "",
    toeflScore: "",
    pteScore: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: "" });

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Surat",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Pimpri-Chinchwad",
    "Patna",
    "Vadodara",
    "Ghaziabad",
    "Ludhiana",
    "Agra",
    "Nashik",
    "Faridabad",
    "Meerut",
    "Rajkot",
    "Kalyan-Dombivali",
    "Vasai-Virar",
  ];

  const countries = [
    "Ireland",
    "United Kingdom",
    "United States",
    "Canada",
    "Australia",
    "New Zealand",
    "Germany",
    "Netherlands",
    "Sweden",
    "Denmark",
    "Norway",
    "Finland",
    "Switzerland",
    "France",
    "Italy",
    "Spain",
    "Portugal",
  ];

  const courses = [
    "Computer Science",
    "Data Science",
    "Business Administration",
    "Engineering",
    "Medicine",
    "Law",
    "Arts & Humanities",
    "Social Sciences",
    "Natural Sciences",
    "Agriculture",
    "Veterinary Science",
    "Architecture",
    "Design",
    "Media & Communication",
  ];

  const intakes = [
    "Fall 2024",
    "Spring 2025",
    "Fall 2025",
    "Spring 2026",
    "Fall 2026",
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ success: false, message: "" });

    try {
      // Prepare the data for API
      const apiData = {
        name: formData.name,
        email: formData.email,
        phone: `+${formData.countryCode}${formData.phone}`,
        currentState: formData.currentState,
        currentCity: formData.currentCity,
        countryPreference: formData.countryPreference,
        courseInterested: formData.courseInterested,
        intakePreference: formData.intakePreference,
        greScore: formData.greScore || null,
        gmatScore: formData.gmatScore || null,
        satScore: formData.satScore || null,
        ieltsScore: formData.ieltsScore || null,
        toeflScore: formData.toeflScore || null,
        pteScore: formData.pteScore || null,
        utm: "my_page",
        campaign_id: "2079294469147841",
        campaign_name: "my_second_campaign",
        page_name: "NEET_EXAM"
      };

      const response = await fetch('https://collegehai-outbound.makunaiglobal.ai/choutbound-service/v1/google-inbound?utm=my_page&campaign_id=2079294469147841&campaign_name=my_second_campaign&page_name=NEET_EXAM', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitStatus({ 
          success: true, 
          message: "Thank you! Your registration has been submitted successfully." 
        });
        
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          countryCode: "91",
          phone: "",
          currentState: "",
          currentCity: "",
          countryPreference: "",
          courseInterested: "",
          intakePreference: "",
          greScore: "",
          gmatScore: "",
          satScore: "",
          ieltsScore: "",
          toeflScore: "",
          pteScore: "",
        });
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        success: false, 
        message: "Sorry, there was an error submitting your registration. Please try again." 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        {/* Personal Information */}
        <div className="space-y-3 sm:space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
          />

          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
          />

<div className="flex flex-col sm:flex-row gap-2">
  <select
    name="countryCode"
    value={formData.countryCode}
    onChange={handleInputChange}
    className="sm:w-1/4 w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
  >
    <option value="91">+91</option>
    <option value="1">+1</option>
    <option value="44">+44</option>
    <option value="61">+61</option>
  </select>
  <input
    type="tel"
    name="phone"
    placeholder="Phone Number*"
    value={formData.phone}
    onChange={handleInputChange}
    required
    className="sm:w-3/4 w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
  />
</div>

        </div>

        {/* Location and Course Preference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <select
            name="currentState"
            value={formData.currentState}
            onChange={handleInputChange}
            required
            className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
          >
            <option value="">Current State*</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <select
            name="currentCity"
            value={formData.currentCity}
            onChange={handleInputChange}
            required
            className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
          >
            <option value="">Current City*</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <select
            name="countryPreference"
            value={formData.countryPreference}
            onChange={handleInputChange}
            required
            className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
          >
            <option value="">Country Preference*</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>

          <select
            name="courseInterested"
            value={formData.courseInterested}
            onChange={handleInputChange}
            required
            className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
          >
            <option value="">Course Interested In*</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <select
          name="intakePreference"
          value={formData.intakePreference}
          onChange={handleInputChange}
          required
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
        >
          <option value="">Intake Preference*</option>
          {intakes.map((intake) => (
            <option key={intake} value={intake}>
              {intake}
            </option>
          ))}
        </select>

        {/* Exam Scores */}
        <div className="space-y-2 sm:space-y-3">
          <p className="text-xs sm:text-sm text-gray-600">
            Enter scores for exams if given, else leave blank:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            <input
              type="text"
              name="greScore"
              placeholder="GRE Score"
              value={formData.greScore}
              onChange={handleInputChange}
              className="px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
            />
            <input
              type="text"
              name="gmatScore"
              placeholder="GMAT Score"
              value={formData.gmatScore}
              onChange={handleInputChange}
              className="px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
            />
            <input
              type="text"
              name="satScore"
              placeholder="SAT Score"
              value={formData.satScore}
              onChange={handleInputChange}
              className="px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
            />
            <input
              type="text"
              name="ieltsScore"
              placeholder="IELTS Score"
              value={formData.ieltsScore}
              onChange={handleInputChange}
              className="px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
            />
            <input
              type="text"
              name="toeflScore"
              placeholder="TOEFL Score"
              value={formData.toeflScore}
              onChange={handleInputChange}
              className="px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
            />
            <input
              type="text"
              name="pteScore"
              placeholder="PTE Score"
              value={formData.pteScore}
              onChange={handleInputChange}
              className="px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-bold text-base sm:text-lg transition-colors duration-300 ${
            isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-[#ff6347] text-white hover:bg-orange-600'
          }`}
        >
          {isLoading ? 'Submitting...' : 'Submit Registration'}
        </button>

        {/* Status Message */}
        {submitStatus.message && (
          <div className={`mt-4 p-3 rounded-lg text-sm ${
            submitStatus.success 
              ? 'bg-green-100 text-green-700 border border-green-200' 
              : 'bg-red-100 text-red-700 border border-red-200'
          }`}>
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
