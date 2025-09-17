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
          
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight text-white tracking-tight">
            Das sagen unsere <span className="text-acencia-accent">Kunden</span>
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

        {/* Premium Testimonial Slider - 3 visible cards */}
        <div className="relative overflow-hidden">
          {/* Stronger Gradient Overlays for seamless fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#001f3d] via-[#001f3d]/90 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#001f3d] via-[#001f3d]/90 to-transparent z-20 pointer-events-none"></div>
          
          {/* Container with proper masking */}
          <div className="relative -mx-8">
            <div className="flex space-x-8 animate-scroll-smooth px-8">
              {tripleReviews.map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="flex-shrink-0 w-96 group"
                >
                  {/* Premium Card Design */}
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 h-full">
                    {/* Header with Premium Avatar */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${review.bgColor} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                          {review.initials}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                          <p className="text-acencia-accent font-medium text-sm">{review.position}</p>
                          <p className="text-gray-500 text-sm">{review.date}</p>
                        </div>
                      </div>
                      
                      {/* Google Badge */}
                      <div className="flex items-center space-x-2">
                        <img 
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234285f4'%3E%3Cpath d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E"
                          alt="Google"
                          className="w-6 h-6"
                        />
                      </div>
                    </div>

                    {/* Premium Star Rating */}
                    <div className="flex items-center space-x-1 mb-6">
                      {[1,2,3,4,5].map((star) => (
                        <Star 
                          key={star} 
                          className={`w-5 h-5 ${star <= review.rating ? 'text-acencia-accent fill-acencia-accent' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>

                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="w-8 h-8 text-acencia-accent/20" />
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 text-lg leading-relaxed font-normal">
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