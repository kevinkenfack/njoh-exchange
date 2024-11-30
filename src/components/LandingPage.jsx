import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Send, Calculator, Shield, Clock, CreditCard, 
  ChevronDown, CheckCircle, MessageCircle, MapPin 
} from 'lucide-react';
import { motion } from 'framer-motion';

// Navbar Component
const Navbar = ({ scrolled }) => (
  <nav className={`fixed w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
  }`}>
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <div className="text-yellow-400 text-2xl font-bold">Njoh Exchange</div>
      <div className="flex gap-6">
        <a href="#services" className="text-white hover:text-yellow-400 transition-colors">Services</a>
        <a href="#advantages" className="text-white hover:text-yellow-400 transition-colors">Avantages</a>
        <a href="#process" className="text-white hover:text-yellow-400 transition-colors">Processus</a>
        <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
      </div>
    </div>
  </nav>
);

// Hero Section Component
const HeroSection = () => (
  <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"/>
    <div className="container mx-auto px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Transfert d'argent <span className="text-yellow-400">rapide et sûr</span>
          </h1>
          <p className="text-slate-300 text-xl mb-8">
            Envoyez de l'argent en toute sécurité de l'europe vers le cameroun avec les meilleurs taux.
          </p>
          <button className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors flex items-center gap-2">
            Commencer maintenant
            <ArrowRight />
          </button>
        </div>

        {/* Flags Visual */}
        <div className="flex justify-center items-center space-x-4">
          <img 
            src="/api/placeholder/150/100" 
            alt="Cameroun Flag" 
            className="w-24 h-16 object-cover rounded-lg shadow-lg"
          />
          <ChevronDown className="text-yellow-400 w-12 h-12" />
          <img 
            src="/api/placeholder/150/100" 
            alt="European Flags" 
            className="w-24 h-16 object-cover rounded-lg shadow-lg"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

// Services Component
const ServicesSection = () => {
  const services = [
    {
      icon: <Send className="w-12 h-12 text-yellow-400" />,
      title: "Transfert d'argent",
      description: "Envoyez de l'argent rapidement et en toute sécurité"
    },
    {
      icon: <CreditCard className="w-12 h-12 text-yellow-400" />,
      title: "Exchange Payon",
      description: "Échangez vos devises aux meilleurs taux"
    },
    {
      icon: <Calculator className="w-12 h-12 text-yellow-400" />,
      title: "Crypto-monnaies",
      description: "Achetez et vendez des crypto-monnaies"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-all group"
            >
              {service.icon}
              <h3 className="text-xl font-bold text-white mt-4 mb-2">{service.title}</h3>
              <p className="text-slate-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Section Component
const ProcessSection = () => {
  const processSteps = [
    {
      step: "Étape 1",
      title: "Créer un compte",
      description: "Inscription rapide et sécurisée"
    },
    {
      step: "Étape 2",
      title: "Sélectionner le service",
      description: "Choisissez votre type de transfert"
    },
    {
      step: "Étape 3",
      title: "Confirmer le transfert",
      description: "Validation et envoi instantané"
    }
  ];

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Notre Processus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 text-center"
            >
              <div className="bg-yellow-400 text-slate-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">{step.step}</h3>
              <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
              <p className="text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jean Dupont",
      message: "Njoh Exchange m'a permis d'envoyer de l'argent rapidement et sans frais.",
      location: "Paris, France"
    },
    {
      name: "Marie Ngo",
      message: "Un service client excellent et des taux très compétitifs.",
      location: "Douala, Cameroun"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Témoignages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20"
            >
              <MessageCircle className="w-12 h-12 text-yellow-400 mb-4" />
              <p className="text-slate-300 italic mb-4">"{testimonial.message}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-slate-400 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" /> {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-slate-900 py-8 text-center">
    <div className="container mx-auto px-6">
      <p className="text-slate-300 mb-4">
        © {new Date().getFullYear()} Njoh Exchange. Tous droits réservés.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-white hover:text-yellow-400">Mentions Légales</a>
        <a href="#" className="text-white hover:text-yellow-400">Politique de Confidentialité</a>
      </div>
    </div>
  </footer>
);

// Main Landing Page Component
const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar scrolled={scrolled} />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <div id="faq" className="py-20">
        {/* FAQ Section Placeholder - Can be developed further */}
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Questions Fréquentes</h2>
          <p className="text-slate-300">Section FAQ à développer</p>
        </div>
      </div>
      <section id="contact" className="py-20 bg-slate-800/50">
        {/* Existing Contact Form from previous implementation */}
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20">
            <h2 className="text-4xl font-bold text-white text-center mb-8">Contactez-nous</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Nom"
                  className="bg-white/5 border border-white/20 rounded-lg p-3 text-white w-full"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="bg-white/5 border border-white/20 rounded-lg p-3 text-white w-full"
                />
              </div>
              <textarea 
                placeholder="Message"
                rows={4}
                className="bg-white/5 border border-white/20 rounded-lg p-3 text-white w-full"
              />
              <button className="w-full bg-yellow-400 text-slate-900 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;