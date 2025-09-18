import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Shield, Users, TrendingUp, ArrowRight, Building2, Umbrella, CheckCircle, Play } from "lucide-react";
import { APP_CONFIG } from "../lib/config";

const BuvPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen" style={{backgroundColor: '#001f3d'}}>
      <Header />
      
      {/* Hero Section - Kompakter mit neuen Spacing-Variablen */}
      <section className="section-padding" style={{backgroundColor: '#001f3d'}}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column - 7/12 */}
            <div className="lg:col-span-7">
              <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight">
                Wir machen <span className="text-acencia-accent">bUV einfach!</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Umfassender Schutz für Ihre Mitarbeitenden - Sicherheit über die gesetzliche Unfallversicherung hinaus
              </p>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-accent rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-300 text-base">24/7 Unfallschutz weltweit</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-accent rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-300 text-base">Zusätzliche Sicherheit für Mitarbeiter</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-accent rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-300 text-base">Attraktives Mitarbeiterbenefit</span>
                </li>
              </ul>

              {/* CTA Button */}
              <div className="mb-8">
                <Button 
                  className="bg-acencia-accent hover:bg-acencia-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2"
                  onClick={() => window.open(APP_CONFIG.BOOKING_URL, '_blank')}
                >
                  <span>Jetzt informieren</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-sm text-gray-400">
                Informationen aus dem Geschäftsbetrieb gemäß §93 HGB
              </p>
            </div>

            {/* Right Column - 5/12 */}
            <div className="lg:col-span-5">
              {/* Info Placeholder */}
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 mb-8 text-center border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Umbrella className="w-8 h-8 text-acencia-accent" />
                </div>
                <h3 className="text-white font-medium text-base mb-2">Betriebliche Unfallversicherung</h3>
                <p className="text-gray-300 text-sm">Zusätzlicher Schutz für Ihre Mitarbeiter</p>
              </div>

              {/* Onboarding Card */}
              <div className="bg-black/30 backdrop-blur-sm border border-green-400/30 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-300 font-medium text-sm">Kostenlose Beratung</span>
                </div>
                <p className="text-green-200 text-sm">Unverbindliche Erstberatung</p>
                <Button className="w-full mt-4 bg-green-600/70 border border-green-400/30 text-white hover:bg-green-600 text-sm py-2">
                  KOSTENFREI
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section - Kompakter */}
      <section className="section-padding-compact" style={{backgroundColor: '#001f3d'}}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4">
                <Umbrella className="w-6 h-6 text-acencia-accent" />
              </div>
              <h2 className="text-3xl font-semibold text-white tracking-tight">
                Was ist betriebliche Unfallversicherung?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-200 leading-relaxed">
                  Die betriebliche Unfallversicherung (bUV) ergänzt die gesetzliche Unfallversicherung um zusätzliche Leistungen. 
                  Sie bietet erweiterten Schutz bei Unfällen - nicht nur während der Arbeitszeit, sondern rund um die Uhr.
                </p>
              </div>
              <div>
                <p className="text-gray-200 leading-relaxed">
                  Als Gruppenversicherung über den Arbeitgeber bietet die bUV attraktive Konditionen und umfassenden Schutz 
                  für alle Mitarbeitenden - ein wertvolles Benefit für die Mitarbeiterbindung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BuvPage;