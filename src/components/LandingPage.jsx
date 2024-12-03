import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Phone, MessageSquare, Mail, MapPin, Coins, ArrowRightLeft, Shield, Wallet, Clock, Users, Award, ChevronDown } from 'lucide-react';

const NjohExchangeDashboard = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      name: "Transfert d'Argent",
      icon: <ArrowRightLeft className="w-6 h-6 text-yellow-500" />,
      description: "Envoyez de l'argent de l'Europe vers le Cameroun en toute sécurité. Profitez de nos taux compétitifs et de transferts GRATUITS vers vos proches.",
      color: "from-yellow-500/10 to-yellow-600/10"
    },
    {
      name: "Exchange Payon",
      icon: <Coins className="w-6 h-6 text-blue-500" />,
      description: "Service de change rapide et fiable. Obtenez les meilleurs taux du marché pour vos opérations de change entre l'Euro et le Franc CFA.",
      color: "from-blue-500/10 to-blue-600/10"
    },
    {
      name: "Crypto-monnaies",
      icon: <Wallet className="w-6 h-6 text-purple-500" />,
      description: "Achetez et vendez vos crypto-monnaies en toute sécurité. Nous proposons une plateforme fiable pour vos transactions en cryptomonnaies.",
      color: "from-purple-500/10 to-purple-600/10"
    },
    {
      name: "Service Express",
      icon: <Clock className="w-6 h-6 text-green-500" />,
      description: "Transferts rapides et sécurisés. Vos proches reçoivent l'argent en quelques minutes, avec confirmation instantanée.",
      color: "from-green-500/10 to-green-600/10"
    }
  ];

  const contactChannels = [
    { 
      name: 'WhatsApp', 
      icon: <MessageSquare className="w-5 h-5" />, 
      number: '+237 XXX XXX XXX',
      color: 'from-green-500/20 to-green-600/20' 
    },
    { 
      name: 'Téléphone', 
      icon: <Phone className="w-5 h-5" />, 
      number: '+237 XXX XXX XXX',
      color: 'from-blue-500/20 to-blue-600/20' 
    },
    { 
      name: 'Email', 
      icon: <Mail className="w-5 h-5" />, 
      number: 'contact@njohexchange.com',
      color: 'from-red-500/20 to-red-600/20' 
    }
  ];

  const advantageImages = [
    { src: "/euro-flag.jpg", alt: "Europe" },
    { src: "/cameroon-flag.jpg", alt: "Cameroun" },
    { src: "/crypto.jpg", alt: "Crypto" },
    { src: "/exchange.jpg", alt: "Exchange" }
  ];

  const processSteps = [
    {
      icon: <Users className="w-6 h-6 text-yellow-500" />,
      title: "Inscription",
      description: "Créez votre compte en quelques minutes avec vos informations de base"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Vérification",
      description: "Validez votre identité pour garantir la sécurité des transactions"
    },
    {
      icon: <Wallet className="w-6 h-6 text-green-500" />,
      title: "Transfert",
      description: "Effectuez votre premier transfert en toute simplicité"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-500" />,
      title: "Confirmation",
      description: "Recevez une confirmation instantanée une fois le transfert effectué"
    }
  ];

  const testimonials = [
    {
      name: "Marie K.",
      location: "Paris",
      content: "Je transfère régulièrement de l'argent à ma famille au Cameroun. Njoh Exchange offre vraiment les meilleurs taux et un service client exceptionnel.",
      rating: 5
    },
    {
      name: "Jean P.",
      location: "Douala",
      content: "La rapidité du service est impressionnante. L'argent arrive toujours en quelques minutes, c'est vraiment pratique en cas d'urgence.",
      rating: 5
    },
    {
      name: "Sophie M.",
      location: "Lyon",
      content: "J'apprécie particulièrement la transparence des frais et la facilité d'utilisation de la plateforme. Service très professionnel !",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "Quels sont les délais de transfert ?",
      answer: "Les transferts sont généralement instantanés. Dans certains cas, ils peuvent prendre jusqu'à 10 minutes maximum."
    },
    {
      question: "Quels sont les frais de transfert ?",
      answer: "Nos transferts sont GRATUITS. Vous ne payez que le montant que vous souhaitez envoyer, sans frais cachés."
    },
    {
      question: "Comment puis-je suivre mon transfert ?",
      answer: "Vous recevez des notifications en temps réel par SMS et email à chaque étape de votre transfert."
    },
    {
      question: "Quels documents sont nécessaires ?",
      answer: "Une pièce d'identité valide et un justificatif de domicile de moins de 3 mois sont requis pour la première transaction."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/5 via-blue-600/5 to-transparent pointer-events-none" />
        
        {/* Navigation */}
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/80 backdrop-blur-lg border-b border-white/5' : ''}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="relative group">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-yellow-500 to-blue-500 p-[1px] transition-transform duration-300 group-hover:scale-105">
                      <div className="w-full h-full rounded-2xl bg-gray-950/90 flex items-center justify-center">
                        <Coins className="w-8 h-8 text-yellow-400" />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full border-2 border-gray-950 animate-pulse" />
                  </div>
                  <div className="block">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                      Njoh Exchange
                    </h1>
                    <p className="text-sm text-gray-400">Transferts rapides et sécurisés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section with CTA */}
        <div className="relative pt-24 px-4 sm:px-6 pb-12 max-w-4xl mx-auto">
          <div className="mb-12 group">
            <div className="bg-gradient-to-br from-yellow-500/10 to-blue-500/10 rounded-3xl p-6 backdrop-blur-sm border border-white/5">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-6 h-6 text-yellow-500" />
                    <span className="text-sm text-yellow-400">Transferts GRATUITS & Sécurisés</span>
                  </div>
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-200 to-blue-200 bg-clip-text text-transparent">
                    Envoyez de l'argent en toute confiance
                  </h2>
                  <p className="text-gray-300 mb-6">
                    De l'Europe vers le Cameroun, profitez des meilleurs taux et d'un service client disponible 24/7.
                  </p>
                  <button 
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 group"
                  >
                    Commencer un transfert
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  {advantageImages.map((image, index) => (
                    <img 
                      key={index} 
                      src={image.src} 
                      alt={image.alt} 
                      className="rounded-2xl object-cover w-full h-40 hover:scale-105 transition-transform"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-blue-200 bg-clip-text text-transparent">
              Notre Processus
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center text-center gap-4">
                      {step.icon}
                      <h3 className="font-bold">{step.title}</h3>
                      <p className="text-sm text-gray-400">{step.description}</p>
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-white/20 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-blue-200 bg-clip-text text-transparent">
              Nos Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div 
                  key={service.name}
                  className={`bg-gradient-to-br ${service.color} rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold">{service.name}</h3>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-blue-200 bg-clip-text text-transparent">
              Témoignages
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">{testimonial.content}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{testimonial.name}</span>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-blue-200 bg-clip-text text-transparent">
              Questions Fréquentes
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-white/5"
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <span className="font-medium">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openFaqIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-6 text-gray-300">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Location Card */}
          <div className="mb-8 group">
            <div className="bg-gradient-to-br from-yellow-500/5 to-blue-500/5 rounded-3xl p-6 backdrop-blur-sm border border-white/5">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-yellow-500" />
                <div>
                  <h3 className="font-bold text-xl">Nos Bureaux</h3>
                  <p className="text-gray-400">Cameroun & Europe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Channels */}
      <div className="px-4 sm:px-6 max-w-4xl mx-auto space-y-6 pb-12">
        <h4 className="text-sm font-medium text-gray-400 tracking-wider">CONTACTEZ-NOUS</h4>
        <div className="grid gap-3 sm:grid-cols-3">
          {contactChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.name === 'WhatsApp' ? `https://wa.me/${channel.number.replace(/\s+/g, '')}` : channel.name === 'Email' ? `mailto:${channel.number}` : `tel:${channel.number.replace(/\s+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:-translate-y-0.5"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${channel.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {channel.icon}
                  <span className="font-medium">{channel.name}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="text-sm text-gray-300 mt-2">{channel.number}</div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Coins className="w-6 h-6 text-yellow-500" />
            <p className="text-gray-400 text-sm">Njoh Exchange</p>
          </div>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Njoh Exchange. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NjohExchangeDashboard;