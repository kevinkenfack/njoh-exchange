import React, { useState, useEffect } from 'react';
import { ArrowRight, Send, Calculator, Shield, Clock, CreditCard } from 'lucide-react';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('transfer');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navbar with glassmorphism effect */}
      <nav className={`fixed w-full transition-all duration-300 ${
        scrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-yellow-400 text-2xl font-bold">Njoh Exchange</div>
          <div className="flex gap-6">
            <a href="#services" className="text-white hover:text-yellow-400 transition-colors">Services</a>
            <a href="#advantages" className="text-white hover:text-yellow-400 transition-colors">Avantages</a>
            <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Calculator */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"/>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Transfert d'argent <span className="text-yellow-400">rapide et sûr</span>
              </h1>
              <p className="text-slate-300 text-xl mb-8">
                Envoyez de l'argent en toute sécurité partout dans le monde avec les meilleurs taux.
              </p>
              <button className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors flex items-center gap-2">
                Commencer maintenant
                <ArrowRight />
              </button>
            </div>

            {/* Calculator Card */}
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20">
              <div className="flex gap-4 mb-6">
                <button 
                  className={`flex-1 py-3 rounded-lg transition-colors ${
                    activeTab === 'transfer' ? 'bg-yellow-400 text-slate-900' : 'bg-white/10 text-white'
                  }`}
                  onClick={() => setActiveTab('transfer')}
                >
                  Transfert
                </button>
                <button 
                  className={`flex-1 py-3 rounded-lg transition-colors ${
                    activeTab === 'crypto' ? 'bg-yellow-400 text-slate-900' : 'bg-white/10 text-white'
                  }`}
                  onClick={() => setActiveTab('crypto')}
                >
                  Crypto
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-white mb-2 block">Montant à envoyer</label>
                  <input 
                    type="number" 
                    className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label className="text-white mb-2 block">Pays destinataire</label>
                  <select className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white">
                    <option>Cameroun</option>
                    <option>France</option>
                    <option>Belgique</option>
                  </select>
                </div>
                <button className="w-full bg-yellow-400 text-slate-900 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2">
                  Calculer <Calculator />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-all group">
                {service.icon}
                <h3 className="text-xl font-bold text-white mt-4 mb-2">{service.title}</h3>
                <p className="text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Nos Avantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Transfert GRATUIT",
                description: "Aucuns frais cachés sur vos transferts"
              },
              {
                icon: <Calculator className="w-8 h-8" />,
                title: "Taux compétitifs",
                description: "Les meilleurs taux du marché garantis"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "100% Sécurisé",
                description: "Vos transactions sont protégées"
              }
            ].map((advantage, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
                <div className="bg-yellow-400 p-3 rounded-lg text-slate-900">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
                  <p className="text-slate-300">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-slate-800/50">
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
    </div>
  );
};

export default LandingPage;