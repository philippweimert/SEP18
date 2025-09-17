import React from 'react';
import { Star, Quote } from 'lucide-react';

const GoogleReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Michael Weber",
      position: "Geschäftsführer",
      rating: 5,
      featured: true,
      text: "ACENCIA hat unsere bAV-Verwaltung komplett digitalisiert. Der Service ist hervorragend und das Team sehr kompetent. Die Zeitersparnis ist beeindruckend!",
      initials: "MW",
      date: "vor 2 Monaten",
      bgColor: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: "Dr. Petra Schneider",
      position: "HR-Leiterin",
      rating: 5,
      text: "Endlich eine bAV-Lösung, die wirklich funktioniert! ACENCIA hat unser HR-Team entlastet und unsere Mitarbeiter sind begeistert.",
      initials: "PS",
      date: "vor 6 Wochen",
      bgColor: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      name: "Thomas Müller",
      position: "CFO",
      rating: 5,
      text: "Exzellente Betreuung bei der Einrichtung unserer betrieblichen Altersvorsorge. Sehr zu empfehlen für alle Unternehmen!",
      initials: "TM",
      date: "vor 3 Wochen",
      bgColor: "from-green-500 to-green-600"
    },
    {
      id: 4,
      name: "Sandra Hoffmann",
      position: "Personalchefin",
      rating: 5,
      text: "Professionelle Beratung und reibungslose Abwicklung. Die digitale Plattform macht alles so viel einfacher.",
      initials: "SH",
      date: "vor 1 Monat",
      bgColor: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      name: "Jürgen Maier",
      position: "Geschäftsführer",
      rating: 5,
      text: "Als Geschäftsführer kann ich ACENCIA nur empfehlen. Die rechtssichere Umsetzung und der digitale Ansatz überzeugen vollständig.",
      initials: "JM",
      date: "vor 5 Tagen",
      bgColor: "from-red-500 to-red-600"
    },
    {
      id: 6,
      name: "Lisa Wagner",
      position: "HR-Managerin",
      rating: 5,
      text: "ACENCIA überzeugt durch Kompetenz und Innovation. Die bAV-Lösung ist genau das, was wir gesucht haben. Perfekt!",
      initials: "LW",
      date: "vor 2 Wochen",
      bgColor: "from-teal-500 to-teal-600"
    }
  ];

  // Triple the reviews for seamless infinite scrolling
  const tripleReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-20 md:py-24 overflow-hidden" style={{backgroundColor: '#001f3d'}}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
            <Quote className="w-8 h-8 text-acencia-accent" />
          </div>
          
          <h2 className="text-3xl font-semibold mb-4 text-white tracking-tight">
            Das sagen unsere Kunden
          </h2>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-1">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-6 h-6 text-acencia-accent fill-acencia-accent" />
              ))}
            </div>
            <div className="h-6 w-px bg-white/20"></div>
            <span className="text-white font-semibold text-xl">4.9</span>
            <span className="text-gray-300 text-lg">aus 100+ Bewertungen</span>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Vertrauen Sie auf die Erfahrungen zufriedener Unternehmen
          </p>
        </div>

        {/* Compact Testimonial Slider */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#001f3d] via-[#001f3d]/90 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#001f3d] via-[#001f3d]/90 to-transparent z-20 pointer-events-none"></div>
          
          {/* Container */}
          <div className="relative -mx-6">
            <div className="flex space-x-6 animate-scroll-smooth px-6">
              {tripleReviews.map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="flex-shrink-0 w-80 group"
                >
                  {/* Compact Black Transparent Card */}
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-black/40 hover:scale-[1.02] transition-all duration-300 h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                          {review.initials}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-base">{review.name}</h4>
                          <p className="text-gray-300 text-xs">{review.position}</p>
                          <p className="text-gray-400 text-xs">{review.date}</p>
                        </div>
                      </div>
                    </div>

                    {/* Simple Star Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[1,2,3,4,5].map((star) => (
                        <Star 
                          key={star} 
                          className="w-4 h-4 text-acencia-accent fill-acencia-accent"
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-white/5 rounded-2xl px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Verifizierte Bewertungen</span>
            </div>
            <div className="h-4 w-px bg-white/20"></div>
            <div className="flex items-center space-x-2">
              <span className="text-acencia-accent font-bold text-lg">100+</span>
              <span className="text-gray-300 text-sm">Zufriedene Kunden</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;