import React from "react";
import { Rocket, Building, Building2, ArrowRight } from "lucide-react";

const CustomerSegments = () => {
  const segments = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Start-up",
      subtitle: "5-50 Mitarbeiter",
      description: "Flexible und skalierbare bAV-Lösungen für junge Unternehmen mit schnellem Wachstum"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Mittelstand",
      subtitle: "50-1000 Mitarbeiter",
      description: "Bewährte Konzepte für etablierte mittelständische Betriebe mit komplexeren Anforderungen"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Konzern",
      subtitle: "1000+ Mitarbeiter",
      description: "Komplexe Enterprise-Lösungen für große Unternehmensstrukturen mit höchsten Anforderungen"
    }
  ];

  return (
    <section className="py-16 md:py-20" style={{backgroundColor: '#001f3d'}}>
      {/* Apple-like Container: Max-width 1200px with proper padding */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Apple-like Header with proper typography hierarchy */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight">
            Für jede Unternehmensgröße
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Maßgeschneiderte bAV-Lösungen, die mit Ihrem Unternehmen wachsen
          </p>
        </div>

        {/* Apple-like 12-column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {segments.map((segment, index) => (
            <div 
              key={index} 
              className="md:col-span-4 bg-white border border-gray-100 rounded-lg p-8 hover:border-gray-200 hover:shadow-sm transition-all duration-150 ease-out group"
            >
              {/* Apple-like Icon Design */}
              <div className="w-14 h-14 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:from-orange-100 group-hover:to-orange-200 transition-all duration-150">
                <div className="text-acencia-accent group-hover:text-acencia-accent-hover transition-colors duration-150">
                  {segment.icon}
                </div>
              </div>
              
              {/* Apple-like Content Typography */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">
                  {segment.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium mb-4 tracking-wide uppercase">
                  {segment.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed font-normal text-base">
                  {segment.description}
                </p>
              </div>

              {/* Apple-like Secondary Button */}
              <button 
                className="w-full bg-white border border-gray-200 hover:border-gray-300 text-gray-900 py-3 px-4 rounded-lg font-medium transition-all duration-150 ease-out flex items-center justify-center space-x-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                <span>Beratung vereinbaren</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSegments;