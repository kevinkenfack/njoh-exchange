import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AdvantagesSection from './components/AdvantagesSection';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AdvantagesSection />
      <ProcessSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
