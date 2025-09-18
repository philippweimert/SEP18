import React, { useEffect } from "react";
import { APP_CONFIG } from "../lib/config";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Heart, Shield, Building2, TrendingUp, Users, CheckCircle, ArrowRight, Gift, Euro, Star } from "lucide-react";

const BkvPageX = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: "Steuerliche Vorteile",
      description: "Bis zu 50 Euro monatlich als steuerfreier Sachbezug - keine Lohnnebenkosten für den Arbeitgeber",
      icon: <Euro className="w-5 h-5" />
    },
    {
      title: "Mitarbeiterbindung",
      description: "Erhöhte Zufriedenheit und Loyalität durch attraktives Zusatzangebot",
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: "Wettbewerbsvorteil",
      description: "Positionierung als attraktiver Arbeitgeber im Kampf um Fachkräfte",
      icon: <Star className="w-5 h-5" />
    },
    {
      title: "Flexible Gestaltung",
      description: "Individuelle Tarifauswahl je nach Unternehmensbedürfnissen und Budget",
      icon: <Gift className="w-5 h-5" />
    }
  ];

  const features = [
    {
      title: "Ambulante Zusatzleistungen",
      description: "Privatärztliche Behandlung, Chefarztbehandlung, Ein-/Zweibettzimmer im Krankenhaus"
    },
    {
      title: "Zahnzusatzversicherung",
      description: "Hochwertige Zahnbehandlungen, Implantate und Zahnersatz ohne Wartezeiten"
    },
    {
      title: "Vorsorgeuntersuchungen",
      description: "Erweiterte Vorsorge über gesetzliche Leistungen hinaus für Früherkennung"
    },
    {
      title: "Alternative Heilmethoden",
      description: "Naturheilverfahren, Osteopathie und Homöopathie als sinnvolle Ergänzung"
    },
    {
      title: "Sehhilfen",
      description: "Brille und Kontaktlinsen mit attraktiven Zuschüssen alle zwei Jahre"
    },
    {
      title: "Auslandsreiseschutz",
      description: "Umfassender Krankenversicherungsschutz bei Reisen ins Ausland"
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
              bKV für <span className="text-orange-600">Unternehmen</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              Gesundheitsvorsorge als starkes Mitarbeiterbenefit
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
                Warum bKV für Ihr Unternehmen?
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                In Zeiten des Fachkräftemangels sind attraktive Zusatzleistungen entscheidend für die Mitarbeitergewinnung und -bindung. 
                Die betriebliche Krankenversicherung bietet Ihnen als Arbeitgeber die Möglichkeit, Ihren Mitarbeitern wertvolle 
                Gesundheitsleistungen anzubieten, ohne dabei hohe Kosten zu verursachen.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Der Clou:</strong> Als Sachbezug ist die bKV bis 50 Euro monatlich steuer- und 
                sozialabgabenfrei. Das bedeutet für Sie als Arbeitgeber keine zusätzlichen Lohnnebenkosten, während Ihre Mitarbeiter 
                von hochwertigen Gesundheitsleistungen profitieren.
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
              <Shield className="w-6 h-6 text-orange-600" />
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
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
              Weitere Inhalte folgen
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Diese Seite wird kontinuierlich mit weiteren detaillierten Informationen zur betrieblichen 
              Krankenversicherung erweitert. Kontaktieren Sie uns für aktuelle Informationen.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 border border-orange-200 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              Interessiert an betrieblicher Krankenversicherung?
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Kontaktieren Sie uns für weitere Informationen zur bKV und wie sie Ihr Unternehmen bei der 
              Mitarbeitergewinnung und -bindung unterstützen kann.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2"
                onClick={() => window.open(APP_CONFIG.BOOKING_URL, '_blank')}
              >
                <span>Beratungstermin vereinbaren</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Link to="/bkv">
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

export default BkvPageX;