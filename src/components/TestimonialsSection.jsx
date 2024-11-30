import React from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie Dupont",
      location: "Paris, France",
      text: "Njoh Exchange a rendu mes transferts d'argent vers le Cameroun tellement faciles. Rapide, sécurisé et sans frais cachés !",
      rating: 5
    },
    {
      name: "Jean-Pierre Mbarga",
      location: "Douala, Cameroun",
      text: "Un service exceptionnel. J'ai reçu mon argent instantanément et le taux de change était vraiment compétitif.",
      rating: 5
    },
    {
      name: "Sophie Leroy",
      location: "Bruxelles, Belgique",
      text: "Je recommande Njoh Exchange à tous mes amis qui font des transferts internationaux. Vraiment pratique et fiable !",
      rating: 4
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        size={20} 
        className={`
          ${index < rating ? 'text-yellow-400' : 'text-gray-300'}
          inline-block
        `}
        fill={index < rating ? '#fbbf24' : 'none'}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 relative bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ce Que Nos Clients Disent
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Découvrez les expériences réelles de nos clients qui ont simplifié leurs transferts d'argent avec Njoh Exchange.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-300"
            >
              <Quote className="text-yellow-400 mb-4" size={40} />
              
              <p className="text-slate-300 mb-4 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.location}</p>
                </div>
                
                <div>
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;