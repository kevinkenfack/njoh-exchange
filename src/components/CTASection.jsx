import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="cta" className="py-24 relative bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Commencez Votre Transfert Maintenant
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Profitez de nos services rapides, sécurisés et sans frais. 
            Transférez votre argent en toute simplicité avec Njoh Exchange.
          </p>
          
          <div className="flex justify-center space-x-6">
            <button 
              className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-black font-bold py-4 px-8 rounded-xl 
              hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
            >
              Commencer un Transfert
              <ArrowRight 
                className="group-hover:translate-x-1 transition-transform duration-300" 
                size={20} 
              />
            </button>
            
            <button 
              className="bg-white/10 backdrop-blur-xl text-white font-bold py-4 px-8 rounded-xl 
              border border-white/10 hover:border-yellow-400/50 
              hover:scale-105 transition-all duration-300"
            >
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;