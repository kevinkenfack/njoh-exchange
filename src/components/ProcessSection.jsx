import React from 'react';
import { 
  UserPlus, 
  CreditCard, 
  Send, 
  CheckCircle 
} from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      icon: <UserPlus />,
      title: "Créer un Compte",
      description: "Inscrivez-vous gratuitement et facilement sur notre plateforme.",
      color: "bg-gradient-to-br from-blue-400 to-blue-500"
    },
    {
      icon: <CreditCard />,
      title: "Choisir le Mode de Paiement",
      description: "Sélectionnez votre méthode de paiement préférée parmi nos options.",
      color: "bg-gradient-to-br from-green-400 to-green-500"
    },
    {
      icon: <Send />,
      title: "Effectuer le Transfert",
      description: "Entrez les détails de votre transfert et confirmez l'opération.",
      color: "bg-gradient-to-br from-yellow-400 to-yellow-500"
    },
    {
      icon: <CheckCircle />,
      title: "Confirmation",
      description: "Recevez une confirmation instantanée de votre transfert.",
      color: "bg-gradient-to-br from-purple-400 to-purple-500"
    }
  ];

  return (
    <section id="process" className="py-24 relative bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comment Ça Marche ?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Découvrez la simplicité de nos transferts d'argent en quatre étapes faciles.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              {/* Step Card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 
                hover:border-yellow-400/50 transition-all duration-300 text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 
                  bg-slate-700 text-white px-3 py-1 rounded-full text-sm">
                  Étape {index + 1}
                </div>

                {/* Icon */}
                <div className={`${step.color} p-4 rounded-xl inline-block mb-4 
                  group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-300">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line for Desktop */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 translate-x-1/2 
                  w-16 h-1 bg-white/20 group-hover:bg-yellow-400/50 
                  transition-all duration-300">
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;