import React from 'react';
import { Send, CreditCard, Wallet, ArrowRightLeft, Shield, Globe } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Send className="w-12 h-12" />,
      title: "Transfert d'argent",
      description: "Envoyez de l'argent à vos proches en toute sécurité avec des frais minimes et une rapidité exceptionnelle.",
      color: "from-yellow-400/20 to-yellow-500/20"
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Exchange Payon",
      description: "Échangez vos devises aux meilleurs taux du marché avec notre service Exchange Payon.",
      color: "from-blue-400/20 to-blue-500/20"
    },
    {
      icon: <Wallet className="w-12 h-12" />,
      title: "Crypto-monnaies",
      description: "Achetez et vendez des crypto-monnaies en toute simplicité avec nos solutions sécurisées.",
      color: "from-purple-400/20 to-purple-500/20"
    },
    {
      icon: <ArrowRightLeft className="w-12 h-12" />,
      title: "Change de devises",
      description: "Profitez de taux de change compétitifs pour toutes vos opérations de change internationales.",
      color: "from-green-400/20 to-green-500/20"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Transactions sécurisées",
      description: "Vos transactions sont protégées par les dernières technologies de sécurité financière.",
      color: "from-red-400/20 to-red-500/20"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Couverture mondiale",
      description: "Envoyez de l'argent partout dans le monde grâce à notre réseau international de partenaires.",
      color: "from-teal-400/20 to-teal-500/20"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nos Services
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services financiers conçus pour répondre 
            à tous vos besoins de transfert et d'échange.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="bg-yellow-400 text-slate-900 rounded-xl p-3 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-300">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2">En savoir plus</span>
                  <ArrowRightLeft className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-colors inline-flex items-center gap-2">
            Découvrir tous nos services
            <ArrowRightLeft className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;