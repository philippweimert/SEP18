import React from "react";
import { APP_CONFIG } from "../lib/config";
import { Button } from "./ui/button";

const ExpertiseSection = () => {
  return (
    <section className="bg-slate-800 py-12 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-700"></div>
        <svg className="absolute bottom-0 right-0 w-48 h-24" viewBox="0 0 300 150">
          <polygon points="0,150 300,150 300,75 150,0 0,75" 
                   fill="rgba(255,255,255,0.03)"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 text-headline">
            Ihre Experten für betriebliche Altersvorsorge
          </h2>
          <p className="text-body text-slate-300 mb-8 max-w-2xl mx-auto">
            Mit über 30 Jahren Erfahrung unterstützen wir Unternehmen dabei, 
            die betriebliche Altersvorsorge effizient und rechtssicher zu verwalten.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-white mb-3 text-headline">Unsere Expertise zeichnet uns aus.</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start text-body-small">
                  <span className="text-orange-400 mr-2 flex-shrink-0">•</span>
                  Über 30 Jahre Erfahrung in der betrieblichen Altersvorsorge
                </li>
                <li className="flex items-start text-body-small">
                  <span className="text-orange-400 mr-2 flex-shrink-0">•</span>
                  Digitale Lösungen für moderne Unternehmen
                </li>
                <li className="flex items-start text-body-small">
                  <span className="text-orange-400 mr-2 flex-shrink-0">•</span>
                  Persönliche Betreuung und Support
                </li>
                <li className="flex items-start text-body-small">
                  <span className="text-orange-400 mr-2 flex-shrink-0">•</span>
                  Rechtssichere und compliance-konforme Abwicklung
                </li>
              </ul>
            </div>
            
            <div className="flex items-center justify-center">
              <Button 
                size="lg"
                variant="outline"
                className="btn-primary bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 px-6 py-2 font-medium rounded-lg transition-all duration-400 hover:scale-105 micro-bounce text-body shadow-lg"
                onClick={() => window.open(APP_CONFIG.BOOKING_URL, '_blank')}
              >
                Jetzt beraten lassen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;