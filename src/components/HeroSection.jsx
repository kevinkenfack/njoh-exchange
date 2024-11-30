import React, { useState } from 'react';
import { ArrowRight, Calculator, Send } from 'lucide-react';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('transfer');
  const [amount, setAmount] = useState('');
  const [country, setCountry] = useState('Cameroun');

  const countries = [
    { value: 'Cameroun', label: '🇨🇲 Cameroun' },
    { value: 'France', label: '🇫🇷 France' },
    { value: 'Belgique', label: '🇧🇪 Belgique' }
  ];

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Transférez votre argent en toute{' '}
              <span className="text-yellow-400">sécurité</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300">
              Profitez des meilleurs taux de change et envoyez de l'argent rapidement 
              partout dans le monde avec Njoh Exchange.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-colors flex items-center gap-2 shadow-lg shadow-yellow-400/20">
                Commencer maintenant
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors flex items-center gap-2 border border-white/20">
                En savoir plus
              </button>
            </div>
          </div>

          {/* Right Column - Calculator Card */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20">
            {/* Tab Switcher */}
            <div className="flex gap-4 mb-8">
              <button 
                className={`flex-1 py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'transfer' 
                    ? 'bg-yellow-400 text-slate-900' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                onClick={() => setActiveTab('transfer')}
              >
                <Send className="w-5 h-5" />
                Transfert
              </button>
              <button 
                className={`flex-1 py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'crypto' 
                    ? 'bg-yellow-400 text-slate-900' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                onClick={() => setActiveTab('crypto')}
              >
                <Calculator className="w-5 h-5" />
                Crypto
              </button>
            </div>

            {/* Calculator Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label className="text-white/80 block mb-2 text-sm">
                  Montant à envoyer
                </label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-xl p-4 text-white focus:outline-none focus:border-yellow-400/50 transition-colors"
                    placeholder="0.00"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60">EUR</span>
                </div>
              </div>

              <div>
                <label className="text-white/80 block mb-2 text-sm">
                  Pays destinataire
                </label>
                <select 
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-xl p-4 text-white focus:outline-none focus:border-yellow-400/50 transition-colors appearance-none"
                >
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>

              <button className="w-full bg-yellow-400 text-slate-900 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/20">
                Calculer le montant
                <Calculator className="w-5 h-5" />
              </button>

              {amount && (
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-sm text-white/60">Montant reçu estimé</div>
                  <div className="text-2xl font-bold text-white">
                    {(Number(amount) * 655.957).toLocaleString()} FCFA
                  </div>
                  <div className="text-sm text-white/60 mt-1">
                    Taux: 1 EUR = 655.957 FCFA
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;