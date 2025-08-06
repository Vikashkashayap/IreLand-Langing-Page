import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularCourses from './components/PopularCourses';
import WhyStudyIreland from './components/WhyStudyIreland';
import Universities from './components/Universities';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import AboutIreland from './components/AboutIreland';
import RegistrationPopup from './components/RegistrationPopup';
import PreWhyStudyIrelandPopup from './components/PreWhyStudyIrelandPopup';
import PreFAQPopup from './components/PreFAQPopup';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <PopularCourses />
      <WhyStudyIreland />
      <AboutIreland />
      <Universities />
      <Testimonials />
      <FAQ />
      <StickyCTA />
      <Footer />
      <RegistrationPopup />
      <PreWhyStudyIrelandPopup />
      <PreFAQPopup />
    </div>
  );
}

export default App;
