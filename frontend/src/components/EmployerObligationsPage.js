import React from "react";
import { APP_CONFIG } from "../lib/config";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Scale, AlertTriangle, CheckCircle, FileText, Users, ArrowRight, Calendar } from "lucide-react";

const EmployerObligationsPage = () => {
  const obligations = [
    {
      title: "Anspruch auf Entgeltumwandlung (§ 1a BetrAVG)",
      description: "Jeder Arbeitnehmer hat seit 2002 einen gesetzlichen Anspruch auf Entgeltumwandlung.",
      details: "Arbeitgeber sind verpflichtet, mindestens den Weg über eine Direktversicherung anzubieten.",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Arbeitgeberzuschuss seit 2022 (15%)",
      description: "Seit 01.01.2022 müssen Arbeitgeber 15% der gesparten Sozialversicherungsbeiträge weiterleiten.",
      details: "Dies gilt für alle neu abgeschlossenen Entgeltumwandlungen. Für Altverträge gilt eine Übergangsfrist bis 2025.",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Informationspflichten",
      description: "Arbeitgeber müssen über Möglichkeiten und Auswirkungen der bAV aufklären.",
      details: "Dazu gehören Informationen über steuerliche Auswirkungen, Sozialversicherung und Auswirkungen auf andere Sozialleistungen.",
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      title: "Dokumentationspflichten",
      description: "Ordnungsgemäße Führung von Unterlagen und Nachweisen.",
      details: "Alle bAV-relevanten Dokumente müssen aufbewahrt und bei Bedarf vorgelegt werden können.",
      icon: <Scale className="w-5 h-5" />
    }
  ];

  const risks = [
    {
      title: "Haftungsrisiken",
      description: "Bei fehlerhafter Beratung oder unvollständiger Aufklärung können Schadensersatzansprüche entstehen."
    },
    {
      title: "Compliance-Verstöße",
      description: "Nichteinhaltung gesetzlicher Vorgaben kann zu rechtlichen Konsequenzen führen."
    },
    {
      title: "Verwaltungsaufwand",
      description: "Komplexe Administration kann ohne professionelle Unterstützung überfordernd werden."
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
              Gesetzliche <span className="text-orange-600">Pflichten</span> – bAV
            </h1>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              Was Arbeitgeber bei der betrieblichen Altersvorsorge beachten müssen
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
                <Scale className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
                Rechtlicher Rahmen
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Die betriebliche Altersvorsorge ist nicht nur eine freiwillige Zusatzleistung, sondern bringt 
                  auch gesetzliche Verpflichtungen für Arbeitgeber mit sich. Diese ergeben sich hauptsächlich 
                  aus dem Betriebsrentengesetz (BetrAVG) und weiteren relevanten Gesetzen.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Seit der Einführung des Rechtsanspruchs auf Entgeltumwandlung im Jahr 2002 und den verschärften 
                  Regelungen seit 2018 (Betriebsrentenstärkungsgesetz) sind die Anforderungen deutlich gestiegen.
                </p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Wichtige Gesetze</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Betriebsrentengesetz (BetrAVG)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Betriebsrentenstärkungsgesetz (BRSG)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Einkommensteuergesetz (EStG)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Sozialgesetzbuch IV (SGB IV)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Obligations Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              Ihre Pflichten als Arbeitgeber
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diese gesetzlichen Verpflichtungen müssen alle Arbeitgeber bei der bAV beachten.
            </p>
          </div>
          
          <div className="space-y-6">
            {obligations.map((obligation, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all duration-150">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <div className="text-orange-600">
                      {obligation.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {obligation.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3 font-medium">
                      {obligation.description}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {obligation.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
                Risiken bei Nichteinhaltung
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {risks.map((risk, index) => (
                <div key={index} className="bg-red-50 rounded-lg p-6 border border-red-200">
                  <div className="flex items-start space-x-3 mb-4">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {risk.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {risk.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-green-50 rounded-lg p-8 border border-green-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
                Wie ACENCIA Sie unterstützt
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ACENCIA entlastet Sie bei der rechtskonformen Umsetzung Ihrer bAV-Pflichten. 
                  Unsere digitale Plattform automatisiert die Verwaltung und stellt sicher, 
                  dass alle gesetzlichen Anforderungen erfüllt werden.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Von der korrekten Dokumentation bis hin zur automatischen Berechnung des 
                  15%-Arbeitgeberzuschusses – wir sorgen für Rechtssicherheit und Compliance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Unsere Leistungen</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Rechtskonforme Einrichtung</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Automatische Compliance-Prüfung</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Vollständige Dokumentation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Mitarbeiterkommunikation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Laufende Aktualisierung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 border border-orange-200 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              Rechtssichere bAV implementieren
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Lassen Sie sich von unseren Experten beraten, wie Sie alle gesetzlichen Pflichten 
              erfüllen und gleichzeitig von den Vorteilen der bAV profitieren können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2"
                onClick={() => window.open(APP_CONFIG.BOOKING_URL, '_blank')}
              >
                <span>Kostenlose Beratung vereinbaren</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-150"
                onClick={() => window.location.href = '/die-bav'}
              >
                Zurück zur bAV-Übersicht
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmployerObligationsPage;