import React, { useEffect, useState } from "react";
import { APP_CONFIG } from "../lib/config";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CustomerSegments from "./CustomerSegments";
import GoogleReviews from "./GoogleReviews";
import { 
  UnifiedSection, 
  UnifiedContainer, 
  UnifiedCard, 
  UnifiedHeading,
  UnifiedButton,
  UnifiedGrid,
  UnifiedFeatureList
} from "./ui/UnifiedSection";
import { 
  Shield, Users, TrendingUp, ArrowRight, Building2, 
  AlertTriangle, CheckCircle, ChevronDown, ChevronUp, 
  Play, FileCheck, Settings, MessageCircle, PiggyBank, 
  DollarSign, UserCheck, Heart 
} from "lucide-react";

const DieBavPageUnified = () => {
  const [isChallengesExpanded, setIsChallengesExpanded] = useState(false);
  const [isDefinitionExpanded, setIsDefinitionExpanded] = useState(false);
  const [expandedProcessCard, setExpandedProcessCard] = useState(null);
  const location = useLocation();
  const [autoplay, setAutoplay] = useState(false);
  const [showVideoOverlay, setShowVideoOverlay] = useState(false);
  const [player, setPlayer] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get('autoplay') === 'true') {
      setAutoplay(true);
    }
    
    if (window.location.hash === '#herausforderungen') {
      setTimeout(() => {
        setIsChallengesExpanded(true);
        setTimeout(() => {
          const challengesElement = document.getElementById('herausforderungen');
          if (challengesElement) {
            challengesElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }, 500);
    }
  }, [location]);

  const challenges = [
    {
      title: "Komplexe Verwaltung",
      description: "bAV-Verwaltung ist administrativ sehr komplex und fehleranfällig"
    },
    {
      title: "Zeitaufwand", 
      description: "Manuelle Prozesse binden wertvolle HR-Ressourcen"
    },
    {
      title: "Rechtsunsicherheit",
      description: "Arbeitsrechtliche Anforderungen sind schwer zu überblicken"
    }
  ];

  const solutions = [
    {
      title: "Automatisierung",
      description: "Digitale Prozesse reduzieren den Verwaltungsaufwand um bis zu 80%"
    },
    {
      title: "Rechtssicherheit",
      description: "Compliance-konforme Abwicklung nach aktueller Gesetzeslage"
    },
    {
      title: "Expertenbetreuung",
      description: "Persönliche Ansprechpartner mit über 30 Jahren Erfahrung"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Analyse & Beratung",
      shortDescription: "Individuelle Bedarfsanalyse",
      fullDescription: "Wir analysieren Ihre aktuelle Situation und entwickeln ein maßgeschneidertes bAV-Konzept für Ihr Unternehmen.",
      icon: <FileCheck className="w-6 h-6" />,
      details: [
        "Bestandsaufnahme bestehender Versorgungen",
        "Analyse der Mitarbeiterstruktur",
        "Ermittlung des optimalen Durchführungswegs",
        "Kostenprognose und Wirtschaftlichkeitsberechnung"
      ]
    },
    {
      number: "02", 
      title: "Implementierung",
      shortDescription: "Nahtlose Integration",
      fullDescription: "Vollständige Einrichtung der bAV-Lösung mit digitaler Verwaltungsplattform und Mitarbeiter-Onboarding.",
      icon: <Settings className="w-6 h-6" />,
      details: [
        "Einrichtung der digitalen Verwaltungsplattform",
        "Integration in bestehende HR-Systeme",
        "Schulung der HR-Mitarbeiter",
        "Mitarbeiterinformation und -beratung"
      ]
    },
    {
      number: "03",
      title: "Laufende Betreuung", 
      shortDescription: "Kontinuierlicher Support",
      fullDescription: "Dauerhafte Begleitung mit persönlichem Ansprechpartner und automatisierten Verwaltungsprozessen.",
      icon: <MessageCircle className="w-6 h-6" />,
      details: [
        "Persönlicher Ansprechpartner",
        "Automatisierte Verwaltungsprozesse", 
        "Regelmäßige Gesetzesanpassungen",
        "Jährliche Optimierungsgespräche"
      ]
    }
  ];

  const benefits = [
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Steuervorteile",
      description: "Bis zu 8% steuerfreie Umwandlung vom Bruttogehalt möglich"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mitarbeiterbindung",
      description: "Erhöhte Loyalität und reduzierte Fluktuation"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Rechtssicherheit",
      description: "Erfüllung aller gesetzlichen Anforderungen"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Wettbewerbsvorteil",
      description: "Attraktivität als Arbeitgeber steigern"
    }
  ];

  const features = [
    "Steuerfreie Umwandlung bis 8% der BBG",
    "Arbeitgeberzuschuss möglich",
    "Flexible Durchführungswege",
    "Digitale Verwaltung"
  ];

  return (
    <div className="min-h-screen bg-[#001f3d]">
      <Header />
      
      {/* Hero Section - Vereinheitlicht */}
      <UnifiedSection variant="hero">
        <UnifiedContainer>
          <UnifiedGrid cols={2} gap="large">
            {/* Left Column */}
            <div>
              <UnifiedHeading level={1} accent>
                Wir machen bAV einfach!
              </UnifiedHeading>
              
              <p className="text-xl text-gray-300 mb-8 mt-6 leading-relaxed">
                Digitale Lösungen für die betriebliche Altersvorsorge - 
                Entlasten Sie Ihre HR-Abteilung und bieten Sie Ihren Mitarbeitern attraktive Zusatzleistungen
              </p>

              <UnifiedFeatureList 
                items={features}
                className="mb-8"
              />

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <UnifiedButton 
                  variant="primary"
                  onClick={() => window.open(APP_CONFIG.BOOKING_URL, '_blank')}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Kostenlose Beratung
                </UnifiedButton>
                <UnifiedButton 
                  variant="secondary"
                  onClick={() => {
                    const element = document.getElementById('prozess');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Mehr erfahren
                </UnifiedButton>
              </div>

              <p className="text-sm text-gray-400">
                Informationen aus dem Geschäftsbetrieb gemäß §93 HGB
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Video Card */}
              <UnifiedCard accent>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black/50">
                  <iframe
                    id="bav-video-player"
                    src={`https://www.youtube.com/embed/qNGPrtPBueQ?enablejsapi=1&rel=0&modestbranding=1${autoplay ? '&autoplay=1' : ''}`}
                    title="ACENCIA bAV Erklärvideo"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-white font-medium">In 2 Minuten erklärt</p>
                  <p className="text-gray-400 text-sm">So funktioniert digitale bAV</p>
                </div>
              </UnifiedCard>

              {/* Onboarding Card */}
              <UnifiedCard className="border-green-400/30">
                <div className="flex items-center space-x-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300 font-medium">Kostenfreies Onboarding</span>
                </div>
                <p className="text-green-200 text-sm mb-4">
                  Wir übernehmen die komplette Einrichtung
                </p>
                <div className="bg-green-600/20 border border-green-400/30 rounded-lg px-4 py-2 text-center">
                  <span className="text-green-300 font-semibold">100% KOSTENFREI</span>
                </div>
              </UnifiedCard>
            </div>
          </UnifiedGrid>
        </UnifiedContainer>
      </UnifiedSection>

      {/* Challenges & Solutions - Kompakter Abstand */}
      <UnifiedSection variant="compact" className="!pt-0">
        <UnifiedContainer>
          <div className="text-center mb-12">
            <UnifiedHeading level={2}>
              Herausforderungen & Lösungen
            </UnifiedHeading>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Die betriebliche Altersvorsorge ist komplex - wir machen sie einfach
            </p>
          </div>

          <UnifiedGrid cols={2} gap="large">
            {/* Challenges */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
                Typische Herausforderungen
              </h3>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <UnifiedCard key={index} compact hover>
                    <h4 className="text-white font-medium mb-2">{challenge.title}</h4>
                    <p className="text-gray-400 text-sm">{challenge.description}</p>
                  </UnifiedCard>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                Unsere Lösungen
              </h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <UnifiedCard key={index} compact hover accent>
                    <h4 className="text-white font-medium mb-2">{solution.title}</h4>
                    <p className="text-gray-400 text-sm">{solution.description}</p>
                  </UnifiedCard>
                ))}
              </div>
            </div>
          </UnifiedGrid>
        </UnifiedContainer>
      </UnifiedSection>

      {/* Process Section - Nahtlos anschließend */}
      <UnifiedSection variant="standard" id="prozess" className="!pt-0">
        <UnifiedContainer>
          <div className="text-center mb-12">
            <UnifiedHeading level={2}>
              Unser bewährter Prozess
            </UnifiedHeading>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              In drei einfachen Schritten zur optimalen bAV-Lösung
            </p>
          </div>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <UnifiedCard key={index} hover>
                <div 
                  className="cursor-pointer"
                  onClick={() => setExpandedProcessCard(
                    expandedProcessCard === index ? null : index
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="text-4xl font-bold text-acencia-accent">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-400">{step.shortDescription}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-acencia-accent/20 rounded-lg flex items-center justify-center">
                        {React.cloneElement(step.icon, { className: "w-6 h-6 text-acencia-accent" })}
                      </div>
                      {expandedProcessCard === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {expandedProcessCard === index && (
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-gray-300 mb-4">{step.fullDescription}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </UnifiedCard>
            ))}
          </div>
        </UnifiedContainer>
      </UnifiedSection>

      {/* Benefits Grid - Kompakter */}
      <UnifiedSection variant="compact" className="!pt-0">
        <UnifiedContainer>
          <div className="text-center mb-10">
            <UnifiedHeading level={2}>
              Ihre Vorteile auf einen Blick
            </UnifiedHeading>
          </div>

          <UnifiedGrid cols={4} gap="medium">
            {benefits.map((benefit, index) => (
              <UnifiedCard key={index} hover compact className="text-center">
                <div className="w-16 h-16 bg-acencia-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.cloneElement(benefit.icon, { className: "w-8 h-8 text-acencia-accent" })}
                </div>
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </UnifiedCard>
            ))}
          </UnifiedGrid>
        </UnifiedContainer>
      </UnifiedSection>

      {/* Customer Segments - Direkt anschließend */}
      <div className="!-mt-8">
        <CustomerSegments />
      </div>

      {/* Google Reviews */}
      <UnifiedSection variant="compact">
        <GoogleReviews />
      </UnifiedSection>

      {/* CTA Section */}
      <UnifiedSection variant="standard">
        <UnifiedContainer>
          <UnifiedCard className="text-center py-12">
            <UnifiedHeading level={2} className="mb-6">
              Bereit für die digitale bAV?
            </UnifiedHeading>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Lassen Sie sich unverbindlich beraten und erfahren Sie, wie Sie mit ACENCIA 
              Ihre betriebliche Altersvorsorge digitalisieren können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <UnifiedButton 
                variant="primary"
                size="large"
                onClick={() => window.open(APP_CONFIG.BOOKING_URL, '_blank')}
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Jetzt Termin vereinbaren
              </UnifiedButton>
              <UnifiedButton 
                variant="ghost"
                size="large"
                onClick={() => window.location.href = '/kontakt'}
              >
                Kontakt aufnehmen
              </UnifiedButton>
            </div>
          </UnifiedCard>
        </UnifiedContainer>
      </UnifiedSection>

      <Footer />
    </div>
  );
};

export default DieBavPageUnified;