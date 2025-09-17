import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CustomerSegments from "./CustomerSegments";
import GoogleReviews from "./GoogleReviews";
import { Button } from "./ui/button";
import { Shield, Users, TrendingUp, ArrowRight, Building2, AlertTriangle, CheckCircle, ChevronDown, ChevronUp, Play, FileCheck, Settings, MessageCircle, PiggyBank, DollarSign, UserCheck, Heart } from "lucide-react";

const DieBavPage = () => {
  const [isChallengesExpanded, setIsChallengesExpanded] = useState(false);
  const [isDefinitionExpanded, setIsDefinitionExpanded] = useState(false);
  const [expandedProcessCard, setExpandedProcessCard] = useState(null);
  const location = useLocation();
  const [autoplay, setAutoplay] = useState(false);
  const [showVideoOverlay, setShowVideoOverlay] = useState(false);
  const [player, setPlayer] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check for autoplay parameter
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get('autoplay') === 'true') {
      setAutoplay(true);
    }
    
    // Check if URL has hash for challenges section
    if (window.location.hash === '#herausforderungen') {
      setTimeout(() => {
        setIsChallengesExpanded(true);
        // Scroll to challenges section after a short delay
        setTimeout(() => {
          const challengesElement = document.getElementById('herausforderungen');
          if (challengesElement) {
            challengesElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }, 500);
    }
  }, [location]);

  useEffect(() => {
    // Load YouTube Player API for video end detection
    const loadYouTubeAPI = () => {
      if (window.YT && window.YT.Player) {
        initializePlayer();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      document.body.appendChild(script);

      window.onYouTubeIframeAPIReady = () => {
        initializePlayer();
      };
    };

    const initializePlayer = () => {
      setTimeout(() => {
        try {
          const ytPlayer = new window.YT.Player('bav-video-player', {
            events: {
              onReady: (event) => {
                setPlayer(event.target);
                // Auto-play if autoplay parameter is set
                if (autoplay) {
                  event.target.playVideo();
                }
              },
              onStateChange: (event) => {
                if (event.data === window.YT.PlayerState.ENDED) {
                  setShowVideoOverlay(true);
                }
              }
            }
          });
        } catch (error) {
          console.error('Error initializing YouTube player:', error);
        }
      }, 1000);
    };

    loadYouTubeAPI();
  }, [autoplay]);

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
      description: "Ständige Gesetzesänderungen erfordern permanente Überwachung"
    },
    {
      title: "Systembrüche",
      description: "Fehlende Integration führt zu Medienbrüchen und Doppelerfassung"
    }
  ];

  const solutions = [
    {
      title: "Digitale Automatisierung",
      description: "Digital & automatisiert - eliminiert Fehlerquellen"
    },
    {
      title: "HR-Entlastung",
      description: "Bis zu 80% Zeitersparnis durch intelligente Automatisierung" 
    },
    {
      title: "Compliance-Sicherheit",
      description: "Immer aktuell und rechtssicher durch permanente Updates"
    },
    {
      title: "Nahtlose Integration", 
      description: "Durchgängiger Datenfluss in bestehende HR-Systeme"
    }
  ];

  const processSupportCards = [
    {
      title: "Rechtliche Prüfung & Einrichtung der bAV",
      subtitle: "Wir geben Sicherheit.",
      description: "Wir prüfen alle rechtlichen Grundlagen und entwickeln ein passendes Vorsorgemodell – individuell, unabhängig und zukunftssicher.",
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: "Digitale Verwaltung & laufender Support",
      subtitle: "Wir erleichtern den Alltag.",
      description: "Wir digitalisieren Ihre bAV-Verwaltung, automatisieren Prozesse und begleiten Sie mit persönlichem Support – unabhängig vom aktuellen Stand Ihrer bAV.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Mitarbeiterkommunikation & (digitale) Beratung",
      subtitle: "Wir begeistern Ihre Mitarbeitenden.",
      description: "Wir informieren über Ansprüche und beraten individuell – digital oder persönlich, verständlich und wertschätzend.",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      title: "Steuervorteile & Kostenoptimierung",
      subtitle: "Wir schaffen Mehrwert.",
      description: "Durch Entgeltumwandlung sparen Unternehmen und Mitarbeitende Steuern und Sozialabgaben – das senkt Kosten und steigert Ihre Attraktivität als Arbeitgeber.",
      icon: <PiggyBank className="w-6 h-6" />
    }
  ];

  const benefitsCards = [
    {
      title: "Reduktion von Kosten und Aufwänden",
      description: "Wir digitalisieren und vereinfachen Ihre laufenden Verwaltungsprozesse, auf Basis eines kostenneutralen Modells.",
      icon: (
        <svg className="w-14 h-14 absolute" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 21h18" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 17v-7a6 6 0 0 1 10 0v7" stroke="#ecd2b8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="7" y="17" width="10" height="4" stroke="#ecd2b8" strokeWidth="1.5" fill="none" rx="1"/>
          <path d="M12 3v14" stroke="#ecd2b8" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M9 6l3-3 3 3" stroke="#ecd2b8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Minimierung von Haftungsrisiken",
      description: "Wir übernehmen komplexe rechtliche Prüfprozesse und minimieren Haftungsrisiken - heute und in Zukunft.",
      icon: (
        <svg className="w-14 h-14 absolute" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#ecd2b8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" stroke="#ecd2b8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Mitarbeiterbindung und -motivation",
      description: "Innovative Vorsorgemodelle sowie eine moderne Mitarbeiter-kommunikation und -Beratung bieten attraktive Benefits.",
      icon: (
        <svg className="w-14 h-14 absolute" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#ecd2b8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="#ecd2b8" strokeWidth="1.5" fill="none"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#ecd2b8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#ecd2b8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13l1.5 1.5L17 11" stroke="#ecd2b8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Entlastung der Personalabteilung",
      description: "Unser persönlicher Support unterstützt Sie als Partner proaktiv bei Anpassungs- oder Veränderungsmaßnahmen.",
      icon: (
        <svg className="w-14 h-14 absolute" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="3" stroke="#ecd2b8" strokeWidth="1.5" fill="none"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="#ecd2b8" strokeWidth="1.5" fill="none"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen" style={{backgroundColor: '#001f3d'}}>
      <Header />
      
      {/* Hero Section - Dunkelblauer Hintergrund */}
      <section className="py-16 md:py-24" style={{backgroundColor: '#001f3d'}}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column - 7/12 */}
            <div className="lg:col-span-7">
              <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight">
                Wir machen <span className="text-acencia-accent">bAV einfach!</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Entlasten Sie Ihr HR-Team mit unserer digitalen & automatisierten All-in-One-Plattform für die betriebliche Altersvorsorge.
              </p>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-accent rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-300 text-base">DSGVO konform & Rechtssicher</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-accent rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-300 text-base">Digital & Automatisiert</span>
                </li>
              </ul>

              {/* CTA Button */}
              <div className="mb-8">
                <Button 
                  className="bg-acencia-accent hover:bg-acencia-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  <span>Jetzt starten</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-sm text-gray-400">
                Informationen aus dem Geschäftsbetrieb gemäß §93 HGB
              </p>
            </div>

            {/* Right Column - 5/12 */}
            <div className="lg:col-span-5">
              {/* Video Player */}
              <div className="bg-black/30 backdrop-blur-sm rounded-lg mb-8 relative overflow-hidden border border-white/10" style={{ aspectRatio: '16/9' }}>
                <iframe 
                  id="bav-video-player"
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/Dw1XYzzPTkY?enablejsapi=1&rel=0&modestbranding=1&controls=1&showinfo=0" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="absolute inset-0 rounded-lg"
                ></iframe>
                
                {/* Video End Overlay - Black Screen */}
                {showVideoOverlay && (
                  <div className="absolute inset-0 bg-black flex items-center justify-center z-10 rounded-lg">
                    <div className="text-center max-w-sm mx-4">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-4">Video beendet</h3>
                      <p className="text-gray-300 mb-6 text-sm">Möchten Sie das Video erneut ansehen?</p>
                      <div className="space-y-3">
                        <button
                          onClick={() => {
                            if (player) {
                              player.seekTo(0);
                              player.playVideo();
                              setShowVideoOverlay(false);
                            }
                          }}
                          className="w-full bg-acencia-accent hover:bg-acencia-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2"
                        >
                          <Play className="w-4 h-4" />
                          <span>Erneut ansehen</span>
                        </button>
                        <button
                          onClick={() => setShowVideoOverlay(false)}
                          className="w-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150"
                        >
                          Schließen
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Onboarding Card */}
              <div className="bg-black/30 backdrop-blur-sm border border-green-400/30 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-300 font-medium text-sm">0,00 € Onboarding</span>
                </div>
                <p className="text-green-200 text-sm">Bis zum 01.01.2027</p>
                <Button className="w-full mt-4 bg-green-600/70 border border-green-400/30 text-white hover:bg-green-600 text-sm py-2">
                  KOSTENFREI
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Definition & Challenges Section - Dunkelblauer Hintergrund */}
      <section className="py-16 md:py-20" style={{backgroundColor: '#001f3d'}}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Definition Section - Left */}
            <div>
              <div 
                className="cursor-pointer bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-black/40 transition-all duration-150 h-32 flex items-center"
                onClick={() => setIsDefinitionExpanded(!isDefinitionExpanded)}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-acencia-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        Was ist betriebliche Altersvorsorge?
                      </h3>
                      <p className="text-gray-300 text-sm leading-tight">
                        Klicken Sie hier, um mehr über bAV und Ihre Rechte zu erfahren
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-300 flex-shrink-0 ml-4">
                    {isDefinitionExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </div>

              {/* Definition Expandable Content */}
              <div className={`transition-all duration-200 overflow-hidden ${
                isDefinitionExpanded ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
              }`}>
                <div className="space-y-6">
                  {/* Main Definition */}
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Shield className="w-5 h-5 text-acencia-accent mr-2" />
                      Definition & Grundlagen
                    </h4>
                    <div className="space-y-4">
                      <p className="text-gray-200 leading-relaxed text-sm">
                        Die betriebliche Altersvorsorge (bAV) ist eine Form der privaten Altersvorsorge, die über den Arbeitgeber organisiert wird. Sie ergänzt die gesetzliche Rente und bildet die zweite Säule des deutschen Drei-Säulen-Systems.
                      </p>
                      
                      <p className="text-gray-200 leading-relaxed text-sm">
                        Bei der Entgeltumwandlung wird ein Teil des Bruttogehalts für die Altersvorsorge verwendet. Dadurch reduzieren sich Steuern und Sozialabgaben während der Erwerbsphase, was sowohl Arbeitnehmer als auch Arbeitgeber finanziell entlastet.
                      </p>

                      <p className="text-gray-200 leading-relaxed text-sm">
                        Seit 2002 haben alle Arbeitnehmer einen gesetzlichen Anspruch auf Entgeltumwandlung. Arbeitgeber müssen mindestens 15% Zuschuss leisten, wenn sie durch die Entgeltumwandlung Sozialversicherungsbeiträge sparen.
                      </p>

                      <p className="text-gray-200 leading-relaxed text-sm">
                        Moderne bAV-Lösungen sind digital, automatisiert und rechtssicher. Sie entlasten die Personalabteilung und schaffen Transparenz für alle Beteiligten.
                      </p>

                      <div className="mt-4">
                        <button
                          onClick={() => window.location.href = '/die-bav/gesetzliche-pflichten'}
                          className="inline-flex items-center px-4 py-2 bg-acencia-accent/70 hover:bg-acencia-accent text-white text-xs font-medium rounded-lg transition-colors duration-150"
                        >
                          <Shield className="w-3 h-3 mr-1" />
                          Erfahren Sie mehr zu Pflichten & Chancen
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Legal Requirements */}
                  <div className="bg-black/40 backdrop-blur-sm border border-red-400/30 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-red-300 font-semibold text-sm mb-2">Rechtliche Verpflichtungen</h4>
                        <p className="text-gray-200 text-sm leading-relaxed mb-3">
                          <strong>Seit 2002 haben alle Arbeitnehmer einen Rechtsanspruch auf betriebliche Altersvorsorge durch Entgeltumwandlung.</strong> 
                          Der Arbeitgeber ist verpflichtet, ein entsprechendes Angebot zu unterbreiten und zu dokumentieren.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-2">
                          <button
                            onClick={() => window.open('https://www.gesetze-im-internet.de/betravg/__1a.html', '_blank')}
                            className="inline-flex items-center px-3 py-2 bg-red-600/70 hover:bg-red-600 text-white text-xs font-medium rounded-lg transition-colors duration-150"
                          >
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            § 1a BetrAVG - Rechtsanspruch
                          </button>
                          <button
                            onClick={() => window.open('https://www.gesetze-im-internet.de/betravg/__4a.html', '_blank')}
                            className="inline-flex items-center px-3 py-2 bg-red-600/70 hover:bg-red-600 text-white text-xs font-medium rounded-lg transition-colors duration-150"
                          >
                            <Shield className="w-3 h-3 mr-1" />
                            § 4a BetrAVG - Arbeitgeberpflichten
                          </button>
                        </div>
                        
                        <p className="text-red-300 text-xs mt-2 italic">
                          Betriebsrentengesetz (BetrAVG) - Bundesgesetzblatt
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenges Section - Right */}
            <div>
              <div 
                className="cursor-pointer bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-black/40 transition-all duration-150 h-32 flex items-center"
                onClick={() => setIsChallengesExpanded(!isChallengesExpanded)}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        bAV-Verwaltung ist komplex, zeitaufwendig und fehleranfällig
                      </h3>
                      <p className="text-gray-300 text-sm leading-tight">
                        Klicken Sie hier, um die Herausforderungen und unsere Lösungen zu sehen
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-300 flex-shrink-0 ml-4">
                    {isChallengesExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </div>

              {/* Challenges Expandable Content */}
              <div className={`transition-all duration-200 overflow-hidden ${
                isChallengesExpanded ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
              }`}>
                <div className="space-y-6">
                  {/* Challenges */}
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                      Herausforderungen
                    </h4>
                    <ul className="space-y-3">
                      {challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="text-sm font-medium text-white mb-1">{challenge.title}</h5>
                            <p className="text-sm text-gray-300">{challenge.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-acencia-accent mr-2" />
                      Unsere Lösungen
                    </h4>
                    <ul className="space-y-3">
                      {solutions.map((solution, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-acencia-accent mt-0.5 flex-shrink-0" />
                          <div>
                            <h5 className="text-sm font-medium text-white mb-1">{solution.title}</h5>
                            <p className="text-sm text-gray-300">{solution.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Support Section - Dunkelblauer Hintergrund */}
      <section className="py-16 md:py-20" style={{backgroundColor: '#001f3d'}}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">
              Wir begleiten Sie entlang aller Prozesse - dauerhaft
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSupportCards.map((card, index) => (
              <div 
                key={index} 
                className="bg-black/30 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-black/40 transition-all duration-500 cursor-pointer group hover:-translate-y-1 hover:scale-105"
                style={{
                  borderRadius: '24px'
                }}
              >
                {/* Collapsed State */}
                <div 
                  className="p-6 flex flex-col items-center text-center"
                  onClick={() => setExpandedProcessCard(expandedProcessCard === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {card.title}
                  </h3>
                  
                  <div 
                    className="text-sm font-medium mb-3 px-3 py-1 rounded-full relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #ecd2b8 0%, #e8c9a8 100%)',
                      color: '#0b2a3d'
                    }}
                  >
                    <span className="relative z-10">{card.subtitle}</span>
                    
                    {/* Shine effect */}
                    <div 
                      className="absolute top-0 w-full h-full transition-all duration-500 group-hover:left-full"
                      style={{
                        left: '-100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,.3), transparent)'
                      }}
                    ></div>
                  </div>

                  <div className="text-gray-300 mt-2">
                    {expandedProcessCard === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                <div className={`transition-all duration-200 overflow-hidden ${
                  expandedProcessCard === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div 
                      className="pt-4"
                      style={{
                        borderTop: '1px solid rgba(236,210,184,.2)'
                      }}
                    >
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Dunkelblauer Hintergrund */}
      <section className="py-16 md:py-20" style={{backgroundColor: '#001f3d'}}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">
              Ihre Vorteile
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Warum Unternehmen auf ACENCIA vertrauen
            </p>
          </div>
          
          {/* Premium Cards - 4x1 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefitsCards.map((card, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Hexagonal Card */}
                <div 
                  className="relative w-full h-36 bg-black/30 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-black/40 cursor-pointer transition-all duration-500 ease-out group hover:-translate-y-2 hover:scale-105 flex items-center justify-center pt-7 mb-5"
                  style={{
                    borderRadius: '22px'
                  }}
                >
                  {/* Hexagon Badge */}
                  <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 w-24 h-24 grid place-items-center group-hover:-translate-y-1 transition-transform duration-500" style={{filter: 'drop-shadow(0 7px 14px rgba(0,0,0,.2))'}}>
                    <svg className="w-24 h-24 absolute inset-0" viewBox="0 0 100 100">
                      <polygon 
                        points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                        fill="#092130"
                        stroke="#ecd2b8"
                        strokeWidth="2.5"
                        opacity="0.98"
                      />
                      <polygon 
                        points="50,14 82,32 82,68 50,86 18,68 18,32"
                        stroke="#ecd2b8"
                        strokeWidth="5"
                        fill="none"
                        className="group-hover:stroke-[7] transition-all duration-300"
                      />
                    </svg>
                    
                    {/* Icon Container - zentriert und vergrößert */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 flex items-center justify-center">
                        {card.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Label */}
                  <div 
                    className="w-11/12 h-11 rounded-xl flex items-center justify-center font-semibold text-sm tracking-wide relative overflow-hidden px-3"
                    style={{
                      background: 'linear-gradient(135deg, #ecd2b8 0%, #e8c9a8 100%)',
                      color: '#0b2a3d',
                      fontSize: '15px',
                      fontWeight: '600',
                      letterSpacing: '.3px',
                      boxShadow: 'inset 0 2px 4px rgba(255,255,255,.4), inset 0 -2px 4px rgba(0,0,0,.05), 0 2px 8px rgba(0,0,0,.08)'
                    }}
                  >
                    <span className="relative z-10 text-center leading-tight">{card.title}</span>
                    
                    {/* Shine effect */}
                    <div 
                      className="absolute top-0 w-full h-full transition-all duration-500 group-hover:left-full"
                      style={{
                        left: '-100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,.3), transparent)'
                      }}
                    ></div>
                  </div>

                  {/* Base Accent */}
                  <div 
                    className="absolute left-1/2 transform -translate-x-1/2 rounded-full"
                    style={{
                      bottom: '12px',
                      width: '55%',
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, rgba(236,210,184,.5) 20%, rgba(236,210,184,.7) 50%, rgba(236,210,184,.5) 80%, transparent)',
                      opacity: '0.8'
                    }}
                  >
                    <div 
                      className="absolute left-0 right-0 rounded-full"
                      style={{
                        top: '-2px',
                        height: '6px',
                        background: 'inherit',
                        filter: 'blur(4px)',
                        opacity: '0.6'
                      }}
                    ></div>
                  </div>
                </div>

                {/* Description direkt unter der Karte */}
                <div className="text-center">
                  <p className="text-gray-300 text-sm leading-relaxed px-2">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migrated sections from Homepage */}
      {/* Für jede Unternehmensgröße Section */}
      <CustomerSegments />
      
      {/* Das sagen unsere Kunden Section */}
      <GoogleReviews />
      
      <Footer />
    </div>
  );
};

export default DieBavPage;