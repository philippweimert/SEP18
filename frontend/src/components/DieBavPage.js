import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CustomerSegments from "./CustomerSegments";
import GoogleReviews from "./GoogleReviews";
import { Button } from "./ui/button";
import { Shield, Users, TrendingUp, ArrowRight, Building2, AlertTriangle, CheckCircle, ChevronDown, ChevronUp, Play, FileCheck, Settings, MessageCircle, PiggyBank, DollarSign, UserCheck, Heart } from "lucide-react";

const DieBavPage = () => {
  const [isChallengesExpanded, setIsChallengesExpanded] = useState(true);
  const [isDefinitionExpanded, setIsDefinitionExpanded] = useState(true);
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
    // Load YouTube Player API if autoplay is enabled
    if (autoplay) {
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
            const ytPlayer = new window.YT.Player('youtube-player', {
              videoId: 'Dw1XYzzPTkY',
              events: {
                onReady: (event) => {
                  setPlayer(event.target);
                  event.target.playVideo();
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
        }, 500);
      };

      loadYouTubeAPI();
    }
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
      description: "Vollautomatisierte Abwicklung eliminiert Fehlerquellen"
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

  const moreInfoBoxes = [
    {
      title: "Für Unternehmen",
      description: "Alles Wichtige über Pflichten, Herausforderungen, Chancen und Vorteile der bAV für Arbeitgeber.",
      icon: <Building2 className="w-6 h-6" />,
      link: "/die-bav/x"
    },
    {
      title: "Für Arbeitnehmer", 
      description: "Erfahren Sie, wie Sie von steuerlichen Vorteilen profitieren und Ihre Altersvorsorge optimieren.",
      icon: <Users className="w-6 h-6" />,
      link: "/die-bav/y"
    },
    {
      title: "Aktuelles",
      description: "Bleiben Sie informiert über die neuesten Entwicklungen, Gesetze und Trends in der bAV.",
      icon: <TrendingUp className="w-6 h-6" />,
      link: "/die-bav/aktuelles"
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Same structure as homepage */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column - 7/12 */}
            <div className="lg:col-span-7">
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight tracking-tight">
                Wir machen <span className="text-orange-600">bAV einfach!</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Entlasten Sie Ihr HR-Team mit unserer vollautomatisierten, digitalen All-in-One-Plattform für die betriebliche Altersvorsorge.
              </p>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">100% digitale Verwaltung</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">Vollautomatisierte Prozesse</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">DSGVO-konform & rechtssicher</span>
                </li>
              </ul>

              {/* CTA Button */}
              <div className="mb-8">
                <Button 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  <span>Jetzt starten</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-sm text-gray-500">
                Informationen aus dem Geschäftsbetrieb gemäß §93 HGB
              </p>
            </div>

            {/* Right Column - 5/12 */}
            <div className="lg:col-span-5">
              {/* Video Player */}
              <div className="bg-gray-100 rounded-lg mb-8 relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                {autoplay ? (
                  <div className="relative w-full h-full">
                    <iframe
                      id="youtube-player"
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/Dw1XYzzPTkY?enablejsapi=1&autoplay=1&controls=1&rel=0`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0"
                    ></iframe>
                    
                    {/* Video End Overlay */}
                    {showVideoOverlay && (
                      <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-10">
                        <div className="bg-white rounded-xl p-8 text-center max-w-sm mx-4">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Video beendet</h3>
                          <div className="space-y-3">
                            <button
                              onClick={() => {
                                if (player) {
                                  player.seekTo(0);
                                  player.playVideo();
                                  setShowVideoOverlay(false);
                                }
                              }}
                              className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-150"
                            >
                              Erneut ansehen
                            </button>
                            <Link 
                              to="/bav-rechtliche-grundlagen"
                              className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors duration-150"
                            >
                              Gesetzliche Pflichten - bAV
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="w-8 h-8 text-orange-600" />
                      </div>
                      <h3 className="text-gray-900 font-medium text-base mb-2">Betriebliche Altersvorsorge einfach einrichten</h3>
                      <p className="text-gray-600 text-sm">Sehen Sie, wie ACENCIA Ihre bAV digitalisiert</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Onboarding Card */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-green-800 font-medium text-sm">0,00 € Onboarding</span>
                </div>
                <p className="text-green-700 text-sm">Bis zum 01.01.2027</p>
                <Button className="w-full mt-4 bg-white border border-green-300 text-green-800 hover:bg-green-50 text-sm py-2">
                  KOSTENFREI
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section - Expandable */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div 
            className="cursor-pointer bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all duration-150"
            onClick={() => setIsDefinitionExpanded(!isDefinitionExpanded)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                    Was ist betriebliche Altersvorsorge?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Klicken Sie hier, um mehr über bAV und Ihre Rechte zu erfahren
                  </p>
                </div>
              </div>
              <div className="text-gray-400">
                {isDefinitionExpanded ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </div>
          </div>

          {/* Expandable Content */}
          <div className={`transition-all duration-200 overflow-hidden ${
            isDefinitionExpanded ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Die betriebliche Altersvorsorge (bAV) ist eine Form der privaten Altersvorsorge, die über den Arbeitgeber organisiert wird. 
                    Sie ergänzt die gesetzliche Rente und bietet Arbeitnehmern die Möglichkeit, zusätzliche Rentenansprüche aufzubauen.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Dabei wird ein Teil des Bruttogehalts für die Altersvorsorge verwendet, wodurch sich die Steuer- und Sozialabgabenlast reduziert.
                  </p>
                  
                  {/* Visual Alert for Legal Claim */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-red-800 font-semibold text-sm mb-1">Wichtiger Rechtshinweis</h4>
                      <p className="text-red-700 text-sm leading-relaxed">
                        <strong>Seit 2002 haben alle Arbeitnehmer einen Rechtsanspruch auf betriebliche Altersvorsorge durch Entgeltumwandlung.</strong> 
                        Dieser Anspruch ist gesetzlich verankert und kann nicht verwehrt werden.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div id="herausforderungen">
            <div 
              className="cursor-pointer bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all duration-150"
              onClick={() => setIsChallengesExpanded(!isChallengesExpanded)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      bAV-Verwaltung ist komplex, zeitaufwendig und fehleranfällig
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Klicken Sie hier, um die Herausforderungen und unsere Lösungen zu sehen
                    </p>
                  </div>
                </div>
                <div className="text-gray-400">
                  {isChallengesExpanded ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </div>
            </div>

            {/* Expandable Content */}
            <div className={`transition-all duration-200 overflow-hidden ${
              isChallengesExpanded ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
            }`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Challenges */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                    Herausforderungen
                  </h4>
                  <ul className="space-y-3">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-900 mb-1">{challenge.title}</h5>
                          <p className="text-sm text-gray-600">{challenge.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Unsere Lösungen
                  </h4>
                  <ul className="space-y-3">
                    {solutions.map((solution, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h5 className="text-sm font-medium text-gray-900 mb-1">{solution.title}</h5>
                          <p className="text-sm text-gray-600">{solution.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Support Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              Wir begleiten Sie entlang aller Prozesse - dauerhaft
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSupportCards.map((card, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all duration-150 h-full"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-orange-600">
                    {card.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                
                <p className="text-sm font-medium text-orange-600 mb-3">
                  {card.subtitle}
                </p>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              Ihre Vorteile
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all duration-150 h-full"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-gray-300 rounded"></div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Vorteil {index}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  Hier wird später der Inhalt für Vorteil {index} eingefügt.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Info Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              Mehr erfahren
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {moreInfoBoxes.map((box, index) => (
              <Link 
                key={index}
                to={box.link}
                className="group block"
              >
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all duration-150 h-full">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-all duration-150">
                    <div className="text-orange-600 group-hover:text-orange-700 transition-colors duration-150">
                      {box.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-150">
                    {box.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {box.description}
                  </p>
                  
                  <div className="flex items-center text-orange-600 group-hover:text-orange-700 transition-colors duration-150">
                    <span className="text-sm font-medium">Mehr erfahren</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform duration-150" />
                  </div>
                </div>
              </Link>
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