import React from 'react';
import { Shield, Clock, Percent, Globe, UserCheck, Banknote } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <Clock />,
      title: "Transfert GRATUIT",
      description: "Profitez de transferts d'argent sans frais cachés vers toutes nos destinations.",
      color: "bg-gradient-to-br from-yellow-400 to-yellow-500"
    },
    {
      icon: <Percent />,
      title: "Meilleurs Taux",
      description: "Bénéficiez des taux de change les plus compétitifs du marché.",
      color: "bg-gradient-to-br from-blue-400 to-blue-500"
    },
    {
      icon: <Shield />,
      title: "100% Sécurisé",
      description: "Vos transactions sont protégées par des protocoles de sécurité avancés.",
      color: "bg-gradient-to-br from-green-400 to-green-500"
    },
    {
      icon: <Globe />,
      title: "Service International",
      description: "Envoyez de l'argent partout dans le monde en quelques clics.",
      color: "bg-gradient-to-br from-purple-400 to-purple-500"
    },
    {
      icon: <UserCheck />,
      title: "Support 24/7",
      description: "Notre équipe est disponible pour vous assister à tout moment.",
      color: "bg-gradient-to-br from-red-400 to-red-500"
    },
    {
      icon: <Banknote />,
      title: "Paiement Flexible",
      description: "Multiples options de paiement pour votre convenance.",
      color: "bg-gradient-to-br from-teal-400 to-teal-500"
    }
  ];

  return (
    <section id="advantages" className="py-24 relative bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pourquoi Choisir Njoh Exchange ?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Découvrez les avantages qui font de nous le choix préféré pour vos transferts 
            d'argent et opérations de change.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-300"
            >
              <div className="flex gap-4">
                {/* Icon Circle */}
                <div className={`${advantage.color} p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                  {advantage.icon}
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-300">
                    {advantage.description}
                  </p>
                </div>
              </div>

              {/* Hover Line */}
              <div className="h-1 w-0 group-hover:w-full bg-yellow-400/20 mt-4 transition-all duration-300 rounded-full" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: "50K+", label: "Clients Satisfaits" },
            { value: "100M€", label: "Transferts Réalisés" },
            { value: "15+", label: "Pays Desservis" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
            >
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;