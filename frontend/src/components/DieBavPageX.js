import React, { useEffect } from "react";
import { APP_CONFIG } from "../lib/config";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Building2, AlertTriangle, Target, TrendingUp, CheckCircle, Users, Shield, ArrowRight } from "lucide-react";

const DieBavPageX = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "pflichten",
      title: "Pflichten",
      icon: <Shield className="w-6 h-6" />,
      items: [
        {
          title: "Gesetzliche Verpflichtung zur Entgeltumwandlung (§ 1a BetrAVG)",
          description: "Überblick über die rechtlichen Grundlagen und Ansprüche der Mitarbeitenden"
        },
        {
          title: "Informationspflicht gegenüber Mitarbeitenden",
          description: "Aufklärung über Möglichkeiten und Bedingungen der betrieblichen Altersvorsorge"
        },
        {
          title: "Dokumentations- und Nachweispflichten",
          description: "Führung ordnungsgemäßer Unterlagen und Nachweis der Compliance"
        },
        {
          title: "Pflicht zur 15% Förderung seit 2022",
          description: "Gesetzliche Verpflichtung zur Bezuschussung der Entgeltumwandlung mit mindestens 15%"
        }
      ]
    },
    {
      id: "herausforderungen",
      title: "Herausforderungen",
      icon: <AlertTriangle className="w-6 h-6" />,
      items: [
        {
          title: "Komplexität der Produktlandschaft und Anbieterwahl",
          description: "Navigation durch vielfältige Angebote und Tarife verschiedener Versicherer"
        },
        {
          title: "Verwaltungsaufwand und Integration in bestehende HR-Prozesse",
          description: "Einbindung in Lohn- und Gehaltsabrechnung sowie bestehende Systeme"
        },
        {
          title: "Kommunikation und Akzeptanz bei Mitarbeitenden",
          description: "Vermittlung der Vorteile und Aufbau von Vertrauen in die bAV-Lösung"
        },
        {
          title: "Umgang mit Altverträgen und bestehenden Zusagen",
          description: "Integration vorhandener Verträge und Berücksichtigung erworbener Ansprüche"
        }
      ]
    },
    {
      id: "chancen",
      title: "Chancen",
      icon: <Target className="w-6 h-6" />,
      items: [
        {
          title: "Mitarbeiterbindung und -gewinnung durch attraktive Zusatzleistungen",
          description: "Stärkung der Arbeitgeberattraktivität im Wettbewerb um Fachkräfte"
        },
        {
          title: "Imagegewinn als verantwortungsbewusster Arbeitgeber",
          description: "Positionierung als sozial verantwortliches Unternehmen"
        },
        {
          title: "Steuerliche Vorteile und Sozialabgabenersparnis",
          description: "Optimierung der Gesamtkosten durch steuerliche Begünstigungen"
        },
        {
          title: "Möglichkeit zur individuellen Gestaltung (z. B. Matching Contributions)",
          description: "Flexible Anpassung an Unternehmensstrategie und Mitarbeiterbedürfnisse"
        }
      ]
    },
    {
      id: "vorteile",
      title: "Vorteile",
      icon: <TrendingUp className="w-6 h-6" />,
      items: [
        {
          title: "Geringere Fluktuation und höhere Zufriedenheit im Team",
          description: "Messbare Verbesserung der Mitarbeiterbindung und Arbeitsplatzzufriedenheit"
        },
        {
          title: "Wettbewerbsvorteil gegenüber anderen Arbeitgebern",
          description: "Differenzierung im Arbeitsmarkt durch zusätzliche Sozialleistungen"
        },
        {
          title: "Kosteneffiziente Möglichkeit zur Gehaltsoptimierung",
          description: "Erhöhung der Nettoentlohnung ohne zusätzliche Arbeitgeberkosten"
        },
        {
          title: "Beitrag zur Altersvorsorge der Mitarbeitenden ohne hohe Zusatzkosten",
          description: "Soziale Verantwortung mit wirtschaftlich sinnvoller Umsetzung"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Same structure as main pages */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight tracking-tight">
              bAV für <span className="text-orange-600">Unternehmen</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              Warum bAV heute wichtiger ist denn je
            </p>
            <p className="text-sm text-gray-500">
              Informationen aus dem Geschäftsbetrieb gemäß §93 HGB
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
                Bedeutung der bAV im Wettbewerb um Fachkräfte
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                In Zeiten des demografischen Wandels und des Fachkräftemangels wird die betriebliche Altersvorsorge zu einem 
                entscheidenden Faktor im Wettbewerb um qualifizierte Mitarbeitende. Unternehmen, die eine durchdachte bAV-Strategie 
                implementieren, verschaffen sich nicht nur einen Wettbewerbsvorteil, sondern übernehmen auch gesellschaftliche Verantwortung.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Gesetzliche Rahmenbedingungen:</strong> Die Berücksichtigung aktueller Gesetze und Verordnungen 
                ist nicht nur eine rechtliche Notwendigkeit, sondern auch ein Zeichen für verantwortungsvolle Unternehmensführung. 
                Eine professionell gestaltete bAV stärkt das Vertrauen der Mitarbeitenden und das Image des Unternehmens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, sectionIndex) => (
        <section 
          key={section.id} 
          className={sectionIndex % 2 === 0 ? "bg-white py-16 md:py-20" : "bg-gray-50 py-16 md:py-20"}
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-8">
            {/* Section Header */}
            <div className="flex items-center mb-12">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mr-6">
                <div className="text-orange-600">
                  {section.icon}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
                  {sectionIndex + 1}. {section.title}
                </h2>
              </div>
            </div>

            {/* Section Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all duration-150"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="bg-orange-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 border border-orange-200 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam die optimale bAV-Lösung für Ihr Unternehmen entwickeln. 
              Unsere Experten beraten Sie individuell und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2"
                onClick={() => window.open(APP_CONFIG.BOOKING_URL, '_blank')}
              >
                <span>Beratungstermin vereinbaren</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Link to="/die-bav">
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

export default DieBavPageX;