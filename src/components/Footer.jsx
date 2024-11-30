import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook />, url: "https://facebook.com/njohexchange" },
    { icon: <Twitter />, url: "https://twitter.com/njohexchange" },
    { icon: <Instagram />, url: "https://instagram.com/njohexchange" },
    { icon: <Linkedin />, url: "https://linkedin.com/company/njohexchange" }
  ];

  const quickLinks = [
    { label: "Accueil", url: "#home" },
    { label: "Services", url: "#services" },
    { label: "Avantages", url: "#advantages" },
    { label: "FAQ", url: "#faq" },
    { label: "Contact", url: "#contact" }
  ];

  const legalLinks = [
    { label: "Mentions Légales", url: "/legal" },
    { label: "Politique de Confidentialité", url: "/privacy" },
    { label: "Conditions d'Utilisation", url: "/terms" }
  ];

  return (
    <footer className="bg-slate-900 py-16 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Njoh Exchange</h3>
            <p className="text-slate-300 mb-4">
              Facilitez vos transferts d'argent internationaux avec simplicité, rapidité et sécurité.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Liens Rapides</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  className="block text-slate-300 hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Informations Légales</h4>
            <div className="space-y-2">
              {legalLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  className="block text-slate-300 hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Contactez-nous</h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-yellow-400" />
                contact@njohexchange.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-yellow-400" />
                +237 671 XXX XXX
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-slate-400">
            © {currentYear} Njoh Exchange. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;