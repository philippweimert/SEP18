import React from "react";

const CustomerSegments = () => {
  const segments = [
    {
      id: "startup",
      title: "Start-up",
      subtitle: "5-50 Mitarbeiter",
      description: "Flexible und skalierbare bAV-Lösungen für junge Unternehmen mit schnellem Wachstum",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a1.96 1.96 0 0 0-2.91-.09z" stroke="#fa9939" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="#fa9939" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke="#fa9939" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="#fa9939" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="19.5" cy="4.5" r="1" stroke="#fa9939" strokeWidth="1.5" fill="none"/>
        </svg>
      )
    },
    {
      id: "mittelstand",
      title: "Mittelstand", 
      subtitle: "50-1000 Mitarbeiter",
      description: "Bewährte Konzepte für etablierte mittelständische Betriebe mit komplexeren Anforderungen",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 21h18" stroke="#fa9939" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 21V9l7-5v17" stroke="#fa9939" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 21V11l-7-4" stroke="#fa9939" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="9" y1="9" x2="9" y2="9.01" stroke="#fa9939" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="9" y1="12" x2="9" y2="12.01" stroke="#fa9939" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="9" y1="15" x2="9" y2="15.01" stroke="#fa9939" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="9" y1="18" x2="9" y2="18.01" stroke="#fa9939" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="15" y1="14" x2="15" y2="14.01" stroke="#fa9939" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="15" y1="17" x2="15" y2="17.01" stroke="#fa9939" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: "konzern",
      title: "Konzern",
      subtitle: "1000+ Mitarbeiter", 
      description: "Komplexe Enterprise-Lösungen für große Unternehmensstrukturen mit höchsten Anforderungen",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="8" height="18" rx="1" stroke="#fa9939" strokeWidth="1.5" fill="none"/>
          <rect x="13" y="7" width="8" height="14" rx="1" stroke="#fa9939" strokeWidth="1.5" fill="none"/>
          <line x1="5" y1="6" x2="9" y2="6" stroke="#fa9939" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="5" y1="9" x2="9" y2="9" stroke="#fa9939" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="5" y1="12" x2="9" y2="12" stroke="#fa9939" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="5" y1="15" x2="9" y2="15" stroke="#fa9939" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="5" y1="18" x2="9" y2="18" stroke="#fa9939" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="15" y1="10" x2="19" y2="10" stroke="#fa9939" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="15" y1="13" x2="19" y2="13" stroke="#fa9939" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="15" y1="16" x2="19" y2="16" stroke="#fa9939" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="15" y1="19" x2="19" y2="19" stroke="#fa9939" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M7 21v-1M17 21v-1" stroke="#fa9939" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-20" style={{backgroundColor: '#001f3d'}}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight">
            Für jede Unternehmensgröße
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Maßgeschneiderte bAV-Lösungen, die mit Ihrem Unternehmen wachsen
          </p>
        </div>

        {/* Premium Cards */}
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {segments.map((segment, index) => (
            <div 
              key={segment.id}
              className="relative w-80 h-40 bg-gradient-to-br from-[#001f3d] to-[#001a34] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer group hover:-translate-y-2 hover:scale-105 flex items-center justify-center pt-8"
              style={{
                boxShadow: '0 10px 30px rgba(1, 31, 61, .15), 0 4px 12px rgba(1, 31, 61, .08)',
              }}
            >
              {/* Hexagon Badge */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-28 h-28 group-hover:-translate-y-1 transition-transform duration-500">
                <svg className="w-28 h-28 absolute inset-0" viewBox="0 0 100 100">
                  <polygon 
                    points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                    fill="#001a34"
                    stroke="#fa9939"
                    strokeWidth="2.5"
                    opacity="0.98"
                  />
                  <polygon 
                    points="50,14 82,32 82,68 50,86 18,68 18,32"
                    stroke="#fa9939"
                    strokeWidth="4"
                    fill="none"
                    className="group-hover:stroke-[6] transition-all duration-300"
                  />
                </svg>
                
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center animate-float">
                  {segment.icon}
                </div>
              </div>
              
              {/* Label */}
              <div className="w-3/4 h-12 bg-gradient-to-r from-[#fa9939] to-[#e88a33] rounded-2xl flex items-center justify-center text-white font-bold text-lg tracking-wide relative overflow-hidden group-hover:shadow-lg transition-all duration-300">
                <span className="relative z-10">{segment.title}</span>
                
                {/* Shine effect */}
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-500"></div>
                
                {/* Inner shadow for depth */}
                <div className="absolute inset-0 rounded-2xl shadow-inner"></div>
              </div>

              {/* Base Accent */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/5 h-0.5 bg-gradient-to-r from-transparent via-[#fa9939]/70 to-transparent rounded-full opacity-80">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fa9939]/40 to-transparent rounded-full blur-sm"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtitle Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          {segments.map((segment, index) => (
            <div key={`info-${segment.id}`} className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">{segment.title}</h3>
              <p className="text-acencia-accent font-medium text-sm mb-3">{segment.subtitle}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{segment.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button 
            className="bg-acencia-accent hover:bg-acencia-accent-hover text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
            onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
          >
            Beratung für Ihr Unternehmen
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerSegments;