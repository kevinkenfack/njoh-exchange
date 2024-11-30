import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Comment fonctionne un transfert d'argent avec Njoh Exchange ?",
      answer: "Le processus est simple. Créez un compte, sélectionnez votre destination, entrez le montant, et effectuez votre transfert. Nos services sont rapides, sécurisés et sans frais cachés."
    },
    {
      question: "Quels sont les pays où je peux transférer de l'argent ?",
      answer: "Nous couvrons actuellement plus de 15 pays en Europe et en Afrique. Notre réseau s'étend continuellement pour vous offrir toujours plus de possibilités."
    },
    {
      question: "Combien de temps prend un transfert ?",
      answer: "La plupart de nos transferts sont instantanés ou prennent moins de 24 heures. La vitesse dépend de la destination et du mode de transfert choisi."
    },
    {
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: "Nous acceptons les cartes bancaires, les virements, PayPal, et plusieurs autres méthodes de paiement locales pour votre convenance."
    },
    {
      question: "Vos services sont-ils sécurisés ?",
      answer: "Absolument. Nous utilisons des protocoles de cryptage de pointe et suivons les réglementations strictes de sécurité financière pour protéger vos transactions."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions Fréquemment Posées
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur nos services de transfert d'argent.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all duration-300"
            >
              <div 
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center p-6 cursor-pointer"
              >
                <h3 className="text-xl font-bold text-white">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`text-white transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </div>
              
              {activeIndex === index && (
                <div className="p-6 pt-0 text-slate-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;