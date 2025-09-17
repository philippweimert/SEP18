import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Scale, AlertTriangle, CheckCircle, FileText, Users, ArrowRight, Calendar, Building2 } from "lucide-react";

const GesetzlichePflichtenPage = () => {
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
    <div className="min-h-screen" style={{backgroundColor: '#001f3d'}}>
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight">
              Rechtlicher <span className="text-acencia-accent">Rahmen</span> – bAV
            </h1>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Was Arbeitgeber bei der betrieblichen Altersvorsorge beachten müssen
            </p>
            <p className="text-sm text-gray-400">
              Informationen aus dem Geschäftsbetrieb gemäß §93 HGB
            </p>
          </div>
        </div>
      </section>

      {/* Two Boxes Side by Side Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Box - Rechtlicher Rahmen */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4">
                  <Scale className="w-6 h-6 text-acencia-accent" />
                </div>
                <h2 className="text-3xl font-semibold text-white tracking-tight">
                  Rechtlicher Rahmen
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-200 leading-relaxed">
                  Die betriebliche Altersvorsorge ist nicht nur eine freiwillige Zusatzleistung, sondern bringt 
                  auch gesetzliche Verpflichtungen für Arbeitgeber mit sich. Diese ergeben sich hauptsächlich 
                  aus dem Betriebsrentengesetz (BetrAVG) und weiteren relevanten Gesetzen.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Seit der Einführung des Rechtsanspruchs auf Entgeltumwandlung im Jahr 2002 und den verschärften 
                  Regelungen seit 2018 (Betriebsrentenstärkungsgesetz) sind die Anforderungen deutlich gestiegen.
                </p>
                
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-acencia-accent/20 mt-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Wichtige Gesetze</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-acencia-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Betriebsrentengesetz (BetrAVG)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-acencia-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Betriebsrentenstärkungsgesetz (BRSG)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-acencia-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Einkommensteuergesetz (EStG)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-acencia-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Sozialgesetzbuch IV (SGB IV)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Box - Bedeutung der bAV im Wettbewerb um Fachkräfte */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-acencia-accent" />
                </div>
                <h2 className="text-3xl font-semibold text-white tracking-tight">
                  Bedeutung der bAV im Wettbewerb um Fachkräfte
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-200 leading-relaxed">
                  In Zeiten des demografischen Wandels und des Fachkräftemangels wird die betriebliche Altersvorsorge zu einem 
                  entscheidenden Faktor im Wettbewerb um qualifizierte Mitarbeitende. Unternehmen, die eine durchdachte bAV-Strategie 
                  implementieren, verschaffen sich nicht nur einen Wettbewerbsvorteil, sondern übernehmen auch gesellschaftliche Verantwortung.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  <strong className="text-white">Gesetzliche Rahmenbedingungen:</strong> Die Berücksichtigung aktueller Gesetze und Verordnungen 
                  ist nicht nur eine rechtliche Notwendigkeit, sondern auch ein Zeichen für verantwortungsvolle Unternehmensführung. 
                  Eine professionell gestaltete bAV stärkt das Vertrauen der Mitarbeitenden und das Image des Unternehmens.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Steuerrechtliche Grundlagen Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-green-300" />
              </div>
              <h2 className="text-3xl font-semibold text-white tracking-tight">
                Steuerrechtliche Grundlagen & Ersparnisse
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Einkommensteuerliche Regelungen</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-green-300">§ 3 Nr. 63 EStG:</span>
                      <p className="text-gray-300 text-sm">Steuerfreiheit der Arbeitgeberbeiträge zur bAV bis zu den Höchstgrenzen</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-green-300">§ 40b EStG:</span>
                      <p className="text-gray-300 text-sm">Pauschalbesteuerung von Direktversicherungen mit 20%</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-green-300">§ 10a EStG:</span>
                      <p className="text-gray-300 text-sm">Sonderausgabenabzug für Altersvorsorgeaufwendungen</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Sozialversicherungsrechtliche Regelungen</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-green-300">§ 1a SGB IV:</span>
                      <p className="text-gray-300 text-sm">Sozialversicherungsfreiheit der Entgeltumwandlung</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-green-300">§ 17 SGB IV:</span>
                      <p className="text-gray-300 text-sm">Befreiung von Sozialversicherungsbeiträgen bei Entgeltumwandlung</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-green-300">§ 2 BetrAVG:</span>
                      <p className="text-gray-300 text-sm">Unverfallbarkeit und Übertragbarkeit von Anwartschaften</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-green-600/10 rounded-lg border border-green-400/20">
              <h4 className="text-lg font-semibold text-white mb-3">Praktische Steuerersparnis</h4>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                Durch die gesetzlichen Regelungen können Arbeitgeber und Arbeitnehmer erhebliche Steuer- und Sozialabgabenersparnisse erzielen. 
                Bei einer Entgeltumwandlung von 200€ monatlich spart der Arbeitgeber beispielsweise ca. 40€ an Sozialversicherungsbeiträgen - 
                davon sind mindestens 15% (30€) als Zuschuss an den Arbeitnehmer weiterzuleiten.
              </p>
              <div className="flex justify-center">
                <Button 
                  className="bg-green-600/70 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center space-x-2"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Kostenloses Erstgespräch buchen</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pflichten & Chancen Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">
              Pflichten & Chancen für Arbeitgeber
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Gesetzliche Verpflichtungen und unternehmerische Chancen der bAV im Überblick.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column - Pflichten */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mr-4">
                  <AlertTriangle className="w-6 h-6 text-red-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  Ihre Pflichten
                </h3>
              </div>
              
              <div className="space-y-4">
                {obligations.map((obligation, index) => (
                  <div key={index} className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-black/40 transition-all duration-150">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                        <div className="text-acencia-accent">
                          {obligation.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-white mb-2">
                          {obligation.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {obligation.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Chancen */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  Ihre Chancen
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-black/40 transition-all duration-150">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-white mb-2">
                        Mitarbeiterbindung & -gewinnung
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        Attraktive bAV-Angebote stärken die Arbeitgeberattraktivität im Wettbewerb um Fachkräfte und reduzieren die Fluktuation merklich.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-black/40 transition-all duration-150">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-green-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-white mb-2">
                        Steuerliche Vorteile
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        Sozialversicherungsersparnisse durch Entgeltumwandlung und steuerliche Begünstigungen der Arbeitgeberbeiträge gemäß EStG.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-black/40 transition-all duration-150">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-purple-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-white mb-2">
                        Imagegewinn & CSR
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        Positionierung als verantwortungsbewusster Arbeitgeber und Stärkung der Corporate Social Responsibility.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-black/40 transition-all duration-150">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-orange-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-white mb-2">
                        Kosteneffiziente Zusatzleistung
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        Erhöhung der Nettoentlohnung ohne zusätzliche Arbeitgeberkosten durch geschickte Nutzung steuerlicher Vorteile.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center mt-12">
            <Button 
              className="bg-acencia-accent/70 hover:bg-acencia-accent text-white px-8 py-4 rounded-lg font-medium transition-colors duration-150 flex items-center space-x-2 mx-auto"
              onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
            >
              <Calendar className="w-5 h-5" />
              <span>Pflichten & Chancen besprechen - Kostenloses Erstgespräch</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mr-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-3xl font-semibold text-white tracking-tight">
                Risiken bei Nichteinhaltung
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {risks.map((risk, index) => (
                <div key={index} className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-red-400/30">
                  <div className="flex items-start space-x-3 mb-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-white">
                      {risk.title}
                    </h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed text-sm">
                    {risk.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-acencia-accent/20 rounded-lg flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-acencia-accent" />
              </div>
              <h2 className="text-3xl font-semibold text-white tracking-tight">
                Wie ACENCIA Sie unterstützt
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-200 leading-relaxed mb-4">
                  ACENCIA entlastet Sie bei der rechtskonformen Umsetzung Ihrer bAV-Pflichten. 
                  Unsere digitale Plattform automatisiert die Verwaltung und stellt sicher, 
                  dass alle gesetzlichen Anforderungen erfüllt werden.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Von der korrekten Dokumentation bis hin zur automatischen Berechnung des 
                  15%-Arbeitgeberzuschusses – wir sorgen für Rechtssicherheit und Compliance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Unsere Leistungen</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-acencia-accent mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">Rechtskonforme Einrichtung</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-acencia-accent mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">Automatische Compliance-Prüfung</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-acencia-accent mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">Vollständige Dokumentation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-acencia-accent mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">Mitarbeiterkommunikation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-acencia-accent mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">Laufende Aktualisierung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-acencia-accent/30 text-center">
            <div className="w-16 h-16 bg-acencia-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-acencia-accent" />
            </div>
            <h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">
              Rechtlichen Rahmen optimal nutzen
            </h2>
            <p className="text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
              Lassen Sie sich von unseren Experten beraten, wie Sie den rechtlichen Rahmen optimal nutzen 
              und gleichzeitig von allen Chancen und Vorteilen der bAV profitieren können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-acencia-accent/70 hover:bg-acencia-accent text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                <span>Kostenlose Beratung vereinbaren</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                className="bg-black/40 border border-white/20 hover:bg-black/60 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150"
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

export default GesetzlichePflichtenPage;