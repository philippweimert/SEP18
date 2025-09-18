import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { 
  UnifiedSection, 
  UnifiedContainer, 
  UnifiedCard, 
  UnifiedHeading,
  UnifiedGrid
} from "./ui/UnifiedSection";
import { Users, Award, Lightbulb, Shield, ArrowRight, MapPin, Phone, Mail, Calendar } from "lucide-react";
import { APP_CONFIG } from "../lib/config";

const AboutPage = () => {
  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Partnerschaft",
      description: "Echter Partner unserer Kunden mit langfristiger Begleitung."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expertise", 
      description: "Über 30 Jahre Erfahrung in der betrieblichen Altersvorsorge."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Digitalisierung und Automatisierung für maximale Effizienz."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sicherheit",
      description: "Rechtssichere und compliance-konforme Abwicklung als Standard."
    }
  ];

  return (
    <div className="min-h-screen" style={{backgroundColor: '#001f3d'}}>
      <Header />
      
      <UnifiedSection variant="hero">
        <UnifiedContainer>
          <div className="text-center">
            <UnifiedHeading level={1}>
              Über <span className="text-acencia-accent">ACENCIA</span>
            </UnifiedHeading>
            <p className="text-xl text-gray-300 mt-6 mb-4 leading-relaxed">
              Ihr Partner für digitale betriebliche Altersvorsorge
            </p>
            <p className="text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Seit über 30 Jahren begleiten wir Unternehmen und deren Mitarbeiter bei der Gestaltung 
              und Verwaltung der betrieblichen Altersvorsorge. Mit Innovation und Expertise machen wir bAV einfach.
            </p>
          </div>
        </UnifiedContainer>
      </UnifiedSection>

      <UnifiedSection variant="standard" className="!pt-0">
        <UnifiedContainer>
          <UnifiedCard>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4">
                <Lightbulb className="w-6 h-6 text-acencia-accent" />
              </div>
              <UnifiedHeading level={2}>Unsere Mission</UnifiedHeading>
            </div>

            <UnifiedGrid cols={2} gap="large">
              <div>
                <p className="text-gray-200 leading-relaxed mb-4">
                  Wir digitalisieren und automatisieren die betriebliche Altersvorsorge, um HR-Teams zu entlasten 
                  und Unternehmen dabei zu helfen, ihren Mitarbeitern attraktive Zusatzleistungen zu bieten.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Unser Ziel ist es, die Komplexität der bAV zu reduzieren und durch intelligente Technologie 
                  eine reibungslose, rechtssichere Abwicklung zu gewährleisten.
                </p>
              </div>
              <UnifiedCard accent compact>
                <h3 className="text-lg font-semibold text-white mb-4">Warum ACENCIA?</h3>
                <ul className="space-y-2 text-gray-200 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-acencia-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>30+ Jahre Branchenerfahrung</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-acencia-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>100% digitale Lösungen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-acencia-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>DSGVO-konforme Abwicklung</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-acencia-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Persönliche Betreuung</span>
                  </li>
                </ul>
              </UnifiedCard>
            </UnifiedGrid>
          </UnifiedCard>
        </UnifiedContainer>
      </UnifiedSection>

      <UnifiedSection variant="standard" className="!pt-0">
        <UnifiedContainer>
          <div className="text-center mb-12">
            <UnifiedHeading level={2}>Unsere Werte</UnifiedHeading>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Diese Grundsätze leiten unser tägliches Handeln und prägen unsere Zusammenarbeit mit Kunden und Partnern.
            </p>
          </div>
          <UnifiedGrid cols={2} gap="medium">
            {values.map((value, index) => (
              <UnifiedCard key={index} hover compact>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                    <div className="text-acencia-accent">
                      {value.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{value.description}</p>
                  </div>
                </div>
              </UnifiedCard>
            ))}
          </UnifiedGrid>
        </UnifiedContainer>
      </UnifiedSection>

      <UnifiedSection variant="standard" className="!pt-0">
        <UnifiedContainer>
          <UnifiedGrid cols={2} gap="large">
            <UnifiedCard>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-acencia-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-white tracking-tight">Unternehmen</h3>
              </div>
              <div className="space-y-4 text-gray-200">
                <div>
                  <h4 className="font-semibold text-white mb-2">Gründung</h4>
                  <p className="text-sm">Seit über 30 Jahren am Markt etabliert</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Geschäftsführung</h4>
                  <p className="text-sm">Uwe Weimert</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Spezialisierung</h4>
                  <p className="text-sm">Betriebliche Altersvorsorge, Digitalisierung, HR-Technologie</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Rechtsform</h4>
                  <p className="text-sm">GmbH, registriert beim Amtsgericht Mainz</p>
                </div>
              </div>
            </UnifiedCard>
            <UnifiedCard>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-acencia-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-white tracking-tight">Kontakt</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-acencia-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Adresse</h4>
                    <p className="text-gray-200 text-sm">ACENCIA GmbH<br />Fasanenweg 5<br />55546 Hackenheim</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-acencia-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telefon</h4>
                    <a href="tel:+4967038061180" className="text-acencia-accent hover:text-acencia-accent-hover text-sm transition-colors duration-150">+49 (0) 6703 80611-80</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-acencia-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">E-Mail</h4>
                    <a href="mailto:info@acencia.de" className="text-acencia-accent hover:text-acencia-accent-hover text-sm transition-colors duration-150">info@acencia.de</a>
                  </div>
                </div>
              </div>
            </UnifiedCard>
          </UnifiedGrid>
        </UnifiedContainer>
      </UnifiedSection>

      <UnifiedSection variant="standard" className="!pt-0">
        <UnifiedContainer>
          <UnifiedCard className="text-center">
            <div className="w-16 h-16 bg-acencia-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-acencia-accent" />
            </div>
            <UnifiedHeading level={2} className="mb-4">Bereit für eine Zusammenarbeit?</UnifiedHeading>
            <p className="text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre betriebliche Altersvorsorge digitalisieren und Ihr HR-Team entlasten. 
              Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-acencia-accent hover:bg-acencia-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2"
                onClick={() => window.open(APP_CONFIG.BOOKING_URL, '_blank')}
              >
                <span>Beratungstermin vereinbaren</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                className="bg-black/40 border border-white/20 hover:bg-black/60 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150"
                onClick={() => window.location.href = '/kontakt'}
              >
                Kontakt aufnehmen
              </Button>
            </div>
          </UnifiedCard>
        </UnifiedContainer>
      </UnifiedSection>
      
      <Footer />
    </div>
  );
};

export default AboutPage;