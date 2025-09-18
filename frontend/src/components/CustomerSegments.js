import React from "react";
import { APP_CONFIG } from "../lib/config";

const CustomerSegments = () => {
  const segments = [
    {
      id: "startup",
      title: "Start-up",
      subtitle: "5-50 Mitarbeiter",
      description: "Flexible und skalierbare bAV-Lösungen für junge Unternehmen mit schnellem Wachstum",
      icon: (
        <svg className="w-14 h-14 absolute" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a1.96 1.96 0 0 0-2.91-.09z" stroke="#ecd2b8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="#ecd2b8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke="#ecd2b8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="#ecd2b8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="19.5" cy="4.5" r="1" stroke="#ecd2b8" strokeWidth="1.5" fill="none"/>
        </svg>
      )
    },
    {
      id: "mittelstand",
      title: "Mittelstand", 
      subtitle: "50-1000 Mitarbeiter",
      description: "Bewährte Konzepte für etablierte mittelständische Betriebe mit komplexeren Anforderungen",
      icon: (
        <svg className="w-14 h-14 absolute" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 21h18" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 21V9l7-5v17" stroke="#ecd2b8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 21V11l-7-4" stroke="#ecd2b8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="9" y1="9" x2="9" y2="9.01" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="9" y1="12" x2="9" y2="12.01" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="9" y1="15" x2="9" y2="15.01" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="9" y1="18" x2="9" y2="18.01" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="15" y1="14" x2="15" y2="14.01" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="15" y1="17" x2="15" y2="17.01" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: "konzern",
      title: "Konzern",
      subtitle: "1000+ Mitarbeiter", 
      description: "Komplexe Enterprise-Lösungen für große Unternehmensstrukturen mit höchsten Anforderungen",
      icon: (
        <svg className="w-14 h-14 absolute" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="8" height="18" rx="1" stroke="#ecd2b8" strokeWidth="1.5" fill="none"/>
          <rect x="13" y="7" width="8" height="14" rx="1" stroke="#ecd2b8" strokeWidth="1.5" fill="none"/>
          <line x1="5" y1="6" x2="9" y2="6" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="5" y1="9" x2="9" y2="9" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="5" y1="12" x2="9" y2="12" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="5" y1="15" x2="9" y2="15" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="5" y1="18" x2="9" y2="18" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="15" y1="10" x2="19" y2="10" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="15" y1="13" x2="19" y2="13" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="15" y1="16" x2="19" y2="16" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="15" y1="19" x2="19" y2="19" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M7 21v-1M17 21v-1" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-20" style={{backgroundColor: '#001f3d'}}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">
            Für jede Unternehmensgröße
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Maßgeschneiderte bAV-Lösungen, die mit Ihrem Unternehmen wachsen
          </p>
        </div>

        {/* Premium Cards - 3x1 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto cards-grid-hex">
          {segments.map((segment, index) => (
            <div key={segment.id} className="flex flex-col items-center">
              {/* Hexagonal Card */}
              <div 
                className="relative w-full h-36 hex-badge-card backdrop-blur-sm rounded-3xl border border-white/10 cursor-pointer transition-all duration-500 ease-out group hover:-translate-y-2 hover:scale-105 flex items-center justify-center pt-7 mb-5"
                style={{
                  borderRadius: '22px'
                }}
              >
                {/* Hexagon Badge */}
                <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 w-24 h-24 grid place-items-center group-hover:-translate-y-1 transition-transform duration-500" style={{filter: 'drop-shadow(0 7px 14px rgba(0,0,0,.2))'}}>
                  <svg className="w-24 h-24 absolute inset-0" viewBox="0 0 100 100">
                    <polygon 
                      points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                      fill="#092130"
                      stroke="#ecd2b8"
                      strokeWidth="2.5"
                      opacity="0.98"
                    />
                    <polygon 
                      points="50,14 82,32 82,68 50,86 18,68 18,32"
                      stroke="#ecd2b8"
                      strokeWidth="5"
                      fill="none"
                      className="group-hover:stroke-[7] transition-all duration-300"
                    />
                  </svg>
                  
                  {/* Icon Container - zentriert und angepasst */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center">
                      {segment.icon}
                    </div>
                  </div>
                </div>
                
                {/* Label */}
                <div 
                  className="w-11/12 h-11 rounded-xl flex items-center justify-center font-semibold text-sm tracking-wide relative overflow-hidden px-3"
                  style={{
                    background: 'linear-gradient(135deg, #ecd2b8 0%, #e8c9a8 100%)',
                    color: '#0b2a3d',
                    fontSize: '15px',
                    fontWeight: '600',
                    letterSpacing: '.3px',
                    boxShadow: 'inset 0 2px 4px rgba(255,255,255,.4), inset 0 -2px 4px rgba(0,0,0,.05), 0 2px 8px rgba(0,0,0,.08)'
                  }}
                >
                  <span className="relative z-10 text-center leading-tight">{segment.title}</span>
                  
                  {/* Shine effect */}
                  <div 
                    className="absolute top-0 w-full h-full transition-all duration-500 group-hover:left-full"
                    style={{
                      left: '-100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,.3), transparent)'
                    }}
                  ></div>
                </div>

                {/* Base Accent */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 rounded-full"
                  style={{
                    bottom: '12px',
                    width: '55%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(236,210,184,.5) 20%, rgba(236,210,184,.7) 50%, rgba(236,210,184,.5) 80%, transparent)',
                    opacity: '0.8'
                  }}
                >
                  <div 
                    className="absolute left-0 right-0 rounded-full"
                    style={{
                      top: '-2px',
                      height: '6px',
                      background: 'inherit',
                      filter: 'blur(4px)',
                      opacity: '0.6'
                    }}
                  ></div>
                </div>
              </div>

              {/* Information direkt unter der Karte */}
              <div className="text-center">
                <p className="text-acencia-accent font-medium text-sm mb-3">{segment.subtitle}</p>
                <p className="text-gray-300 text-sm leading-relaxed px-2">{segment.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button 
            className="bg-acencia-accent hover:bg-acencia-accent-hover text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
            onClick={() => window.open(APP_CONFIG.BOOKING_URL, '_blank')}
          >
            Beratung für Ihr Unternehmen
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerSegments;