import React, { useEffect } from "react";
import { APP_CONFIG } from "../lib/config";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Umbrella, Shield, Building2, TrendingUp, Users, CheckCircle, ArrowRight, Clock, Globe, Heart, Euro } from "lucide-react";

const BuvPageX = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: "Erweiterte Unfallleistungen",
      description: "Schutz über die gesetzliche Unfallversicherung hinaus - auch in der Freizeit und im Urlaub",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Attraktives Mitarbeiterbenefit",
      description: "Zeigen Sie Fürsorgepflicht und erhöhen Sie die Mitarbeiterzufriedenheit merklich",
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: "24/7 Weltweiter Schutz",
      description: "Rund-um-die-Uhr Absicherung - beruflich und privat, im In- und Ausland",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Kosteneffizienz",
      description: "Gruppenversicherung bietet attraktive Konditionen für alle Mitarbeitenden",
      icon: <Euro className="w-5 h-5" />
    }
  ];

  const features = [
    {
      title: "Invaliditätsleistungen",
      description: "Finanzielle Sicherheit bei dauerhaften Unfallfolgen mit gleitender Staffel"
    },
    {
      title: "Unfallrente",
      description: "Monatliche Rentenzahlung bei schweren Unfallfolgen für langfristige Absicherung"
    },
    {
      title: "Todesfall-Leistungen",
      description: "Finanzielle Unterstützung für Angehörige in schweren Zeiten"
    },
    {
      title: "Bergungskosten",
      description: "Übernahme von Such-, Rettungs- und Bergungskosten weltweit"
    },
    {
      title: "Krankenhaustagegeld",
      description: "Tägliche Zahlung bei unfallbedingter stationärer Behandlung"
    },
    {
      title: "Rehabilitation",
      description: "Unterstützung bei der Wiedereingliederung nach schweren Unfällen"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight tracking-tight">
              bUV für <span className="text-orange-600">Unternehmen</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              Erweiterte Sicherheit für Ihre wertvollste Ressource
            </p>
            <p className="text-sm text-gray-500">
              Informationen aus dem Geschäftsbetrieb gemäß §93 HGB
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Building2 className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
                Warum bUV für Ihr Unternehmen?
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Die gesetzliche Unfallversicherung deckt nur Arbeitsunfälle und Berufskrankheiten ab. 
                Doch die meisten Unfälle passieren in der Freizeit. Hier setzt die betriebliche Unfallversicherung an 
                und bietet Ihren Mitarbeitenden umfassenden Schutz rund um die Uhr.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Der Mehrwert:</strong> Als Arbeitgeber zeigen Sie Fürsorgepflicht über 
                das gesetzlich vorgeschriebene Maß hinaus und positionieren sich als attraktiver, verantwortungsvoller 
                Arbeitgeber im Wettbewerb um die besten Talente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="flex items-center mb-12">
            <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mr-6">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
                Vorteile für Ihr Unternehmen
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all duration-150"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <div className="text-orange-600">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="flex items-center mb-12">
            <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mr-6">
              <Umbrella className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
                Typische Leistungsbereiche
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all duration-150"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Note */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
              Weitere Inhalte folgen
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Diese Seite wird kontinuierlich mit weiteren detaillierten Informationen zur betrieblichen 
              Unfallversicherung erweitert. Kontaktieren Sie uns für aktuelle Informationen.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 border border-orange-200 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              Interessiert an betrieblicher Unfallversicherung?
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Kontaktieren Sie uns für weitere Informationen zur bUV und wie sie Ihre Fürsorgepflicht 
              als Arbeitgeber erweitert und Ihre Mitarbeiter umfassend schützt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2"
                onClick={() => window.open(APP_CONFIG.BOOKING_URL, '_blank')}
              >
                <span>Beratungstermin vereinbaren</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Link to="/buv">
                <Button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-150">
                  Zurück zur Übersicht
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BuvPageX;