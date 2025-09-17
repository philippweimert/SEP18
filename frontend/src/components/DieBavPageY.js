import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Users, Shield, TrendingUp, CheckCircle, Euro, Gift, Banknote, Lock, Clock, ArrowUp, RefreshCw, PlusCircle, Heart, User, ArrowRight } from "lucide-react";

const DieBavPageY = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "vorteile",
      title: "Vorteile",
      icon: <TrendingUp className="w-6 h-6" />,
      items: [
        {
          title: "Steuer- und sozialabgabenfreie Beiträge aus dem Bruttogehalt",
          description: "Reduzierung der Steuerlast durch Entgeltumwandlung – mehr Netto vom Brutto",
          icon: <Euro className="w-5 h-5" />
        },
        {
          title: "15% Arbeitgeberförderung plus zusätzliche Leistungen möglich",
          description: "Seit 2022 gesetzlich garantierte 15% Förderung der Entgeltumwandlung - zusätzliche Arbeitgeberzuschüsse oder -beiträge erhöhen Ihre Altersvorsorge noch weiter",
          icon: <Gift className="w-5 h-5" />
        },
        {
          title: "Lebenslange Rentenzahlung oder Kapitalauszahlung",
          description: "Flexible Auszahlungsoptionen je nach persönlichen Bedürfnissen und Lebensplanung",
          icon: <Banknote className="w-5 h-5" />
        },
        {
          title: "Schutz vor Pfändung und Hartz-IV-Anrechnung",
          description: "Ihre Altersvorsorge ist vor Zugriffen geschützt und wird nicht auf Sozialleistungen angerechnet",
          icon: <Shield className="w-5 h-5" />
        }
      ]
    },
    {
      id: "chancen", 
      title: "Chancen",
      icon: <ArrowUp className="w-6 h-6" />,
      items: [
        {
          title: "Früher Einstieg = höhere Rente durch Zinseszinseffekt",
          description: "Je früher Sie beginnen, desto mehr profitieren Sie von der Wirkung des Zinseszinses",
          icon: <Clock className="w-5 h-5" />
        },
        {
          title: "Ergänzung zur gesetzlichen Rente", 
          description: "Schließen Sie die Rentenlücke und sichern Sie Ihren gewohnten Lebensstandard im Alter",
          icon: <PlusCircle className="w-5 h-5" />
        },
        {
          title: "Flexibilität bei Anbieterwechsel oder Arbeitgeberwechsel",
          description: "Ihre Ansprüche bleiben erhalten und können mitgenommen oder übertragen werden",
          icon: <RefreshCw className="w-5 h-5" />
        },
        {
          title: "Möglichkeit zur privaten Aufstockung",
          description: "Kombination mit privaten Beiträgen für eine noch bessere Altersvorsorge möglich",
          icon: <ArrowUp className="w-5 h-5" />
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen" style={{backgroundColor: '#001f3d'}}>
      <Header />
      
      {/* Hero Section - Same structure as main pages */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight tracking-tight">
              <span className="text-orange-600">Sicherheit</span> für später –<br />
              heute schon profitieren
            </h1>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              Was bleibt am Ende des Berufslebens?
            </p>
            <p className="text-sm text-gray-500">
              Informationen aus dem Geschäftsbetrieb gemäß §93 HGB
            </p>
          </div>
        </div>
      </section>

      {/* Emotional Introduction */}
      <section className="bg-orange-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 border border-orange-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
                Was bleibt am Ende des Berufslebens?
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                Nach einem langen Arbeitsleben haben Sie sich eine sorgenfreie Rente verdient. Doch die gesetzliche Rente allein 
                reicht oft nicht aus, um den gewohnten Lebensstandard zu halten.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong className="text-gray-900">Hier kommt die betriebliche Altersvorsorge ins Spiel:</strong> Eine kluge Ergänzung, 
                die schon heute Ihre Steuerlast reduziert und später für finanzielle Sicherheit sorgt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is bAV */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
                Was ist betriebliche Altersvorsorge und wie funktioniert sie?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bei der betrieblichen Altersvorsorge (bAV) wird ein Teil Ihres Bruttogehalts für die Altersvorsorge verwendet. 
                  Dieser Betrag wird <strong className="text-gray-900">vor</strong> der Berechnung von Steuern und Sozialabgaben abgezogen.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-orange-600">Das Ergebnis:</strong> Sie zahlen weniger Steuern und Sozialabgaben, 
                  während gleichzeitig Ihre Altersvorsorge wächst.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Ihr Recht auf bAV</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Seit 2002 hat <strong className="text-gray-900">jeder Arbeitnehmer</strong> den gesetzlichen Anspruch auf 
                  betriebliche Altersvorsorge durch Entgeltumwandlung. Ihr Arbeitgeber ist verpflichtet, Ihnen diese 
                  Möglichkeit anzubieten.
                </p>
              </div>
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
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <div className="text-orange-600">
                        {item.icon}
                      </div>
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

      {/* Calculation Example */}
      <section className="bg-green-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 border border-green-200">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center tracking-tight">
              💡 Berechnungsbeispiel: bAV mit 15% Arbeitgeberförderung
            </h2>
            
            {/* Main Calculation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Monatliche Beiträge</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Gesamtbeitrag bAV:</span>
                    <span className="text-2xl font-semibold text-orange-600">100 €</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Arbeitgeberzuschuss (15%):</span>
                    <span className="text-xl font-semibold text-green-600">+ 15 €</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Ihr Eigenbeitrag:</span>
                    <span className="text-xl font-semibold text-blue-600">85 €</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Steuer-/Abgabenersparnis:</span>
                    <span className="text-xl font-semibold text-green-600">ca. 34 €</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Ihre Nettobelastung</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-semibold text-orange-600 mb-2">nur 51 €</div>
                    <div className="text-gray-900 font-medium">weniger Netto pro Monat</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center border border-orange-200">
                    <div className="text-sm text-gray-600 mb-2">Aufgrund der Steuerersparnis zahlen Sie effektiv:</div>
                    <div className="text-lg font-semibold text-green-600">85 € - 34 € = 51 € Nettobelastung</div>
                  </div>
                  <div className="text-xs text-gray-500 text-center">
                    *Bei einem Grenzsteuersatz von ca. 40% (Steuer + Sozialabgaben)
                  </div>
                </div>
              </div>
            </div>

            {/* Long-term Impact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 text-center border border-blue-200">
                <div className="text-3xl font-semibold text-blue-600 mb-2">100 €</div>
                <div className="text-gray-900 font-medium mb-2">Gesamtbeitrag</div>
                <div className="text-gray-600 text-sm">monatlich in Ihre bAV</div>
                <div className="text-xs text-gray-500 mt-2">
                  (85 € Eigenbeitrag + 15 € AG-Zuschuss)
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 text-center border border-green-200">
                <div className="text-3xl font-semibold text-green-600 mb-2">612 €</div>
                <div className="text-gray-900 font-medium mb-2">Jährliche Ersparnis</div>
                <div className="text-gray-600 text-sm">durch AG-Zuschuss + Steuervorteile</div>
                <div className="text-xs text-gray-500 mt-2">
                  (180 € AG-Zuschuss + 408 € Steuerersparnis)
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6 text-center border border-orange-200">
                <div className="text-3xl font-semibold text-orange-600 mb-2">≈ 31.000 €</div>
                <div className="text-gray-900 font-medium mb-2">Nach 20 Jahren</div>
                <div className="text-gray-600 text-sm">Kapital bei 2% Zinssatz</div>
                <div className="text-xs text-gray-500 mt-2">
                  Ihre Nettobelastung: nur ≈ 12.240 €
                </div>
              </div>
            </div>

            {/* Highlight */}
            <div className="mt-6 bg-orange-100 rounded-lg p-4 border border-orange-300">
              <div className="text-center">
                <div className="text-gray-900 font-semibold mb-2">🎯 Das Beste für Sie:</div>
                <div className="text-gray-700 text-sm">
                  Sie bekommen eine Altersvorsorge von 31.000 €, zahlen aber netto nur 12.240 € selbst! 
                  Der Rest kommt vom Arbeitgeberzuschuss und Ihren Steuervorteilen.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 border border-orange-200 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              Starten Sie noch heute in Ihre sichere Zukunft!
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Nutzen Sie Ihr Recht auf betriebliche Altersvorsorge und profitieren Sie von steuerlichen Vorteilen. 
              Sprechen Sie mit Ihrem Arbeitgeber oder lassen Sie sich beraten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                <span>Beratung anfordern</span>
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

export default DieBavPageY;