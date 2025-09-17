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

  const benefitsCards = [
    {
      title: "Reduktion von Kosten und Aufwänden",
      description: "Wir digitalisieren und vereinfachen Ihre laufenden Verwaltungsprozesse, auf Basis eines kostenneutralen Modells.",
      icon: (
        <div className="w-16 h-16 hexagon bg-[#1a3a52] flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="43.5 62 113 76" preserveAspectRatio="xMidYMid meet">
            <path d="M81.114 74.195H60.882a1.14 1.14 0 0 0-1.142 1.136v59.165a1.14 1.14 0 0 0 1.142 1.136h20.232a1.14 1.14 0 0 0 1.142-1.136V75.331a1.14 1.14 0 0 0-1.142-1.136z" fill="#d4b896"></path>
            <path d="M111.467 92.156H91.235a.944.944 0 0 0-.944.944v41.02c0 .521.423.944.944.944h20.232a.944.944 0 0 0 .944-.944V93.1a.945.945 0 0 0-.944-.944z" fill="#d4b896"></path>
            <path d="M141.819 103.632h-20.232a.79.79 0 0 0-.792.788v29.383a.79.79 0 0 0 .792.788h20.232a.79.79 0 0 0 .792-.788V104.42a.79.79 0 0 0-.792-.788z" fill="#d4b896"></path>
            <path d="M153.128 138H46.873a3.365 3.365 0 0 1-3.373-3.357V65.357c0-1.854 1.51-3.357 3.373-3.357s3.373 1.503 3.373 3.357v65.93h102.882c1.863 0 3.372 1.503 3.372 3.357S154.99 138 153.128 138z" fill="#d4b896"></path>
          </svg>
        </div>
      )
    },
    {
      title: "Minimierung von Haftungsrisiken",
      description: "Wir übernehmen komplexe rechtliche Prüfprozesse und minimieren Haftungsrisiken - heute und in Zukunft.",
      icon: (
        <div className="w-16 h-16 hexagon bg-[#1a3a52] flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="26.576 24.98 147.309 150" preserveAspectRatio="xMidYMid meet">
            <path fill="#d4b896" d="M64.121 89.98v50h-14v-50h14z"></path>
            <path fill="#d4b896" d="M146.121 89.98v50h-14v-50h14z"></path>
            <path fill="#d4b896" d="M105.121 89.98v50h-14v-50h14z"></path>
            <path fill="#d4b896" d="M100.121 24.98L26.848 73.859a.612.612 0 0 0 .339 1.121h146.178a.517.517 0 0 0 .288-.948z"></path>
            <path fill="#d4b896" d="M165.121 152.98v22h-130v-22h130z"></path>
          </svg>
        </div>
      )
    },
    {
      title: "Mitarbeiterbindung und -motivation",
      description: "Innovative Vorsorgemodelle sowie eine moderne Mitarbeiter-kommunikation und -Beratung bieten attraktive Benefits.",
      icon: (
        <div className="w-16 h-16 hexagon bg-[#1a3a52] flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="25.502 49.499 148.998 101.005" preserveAspectRatio="xMidYMid meet">
            <path d="M150.812 98.779a2.692 2.692 0 0 0-3.758.626l-7.272 10.193-13.538-9.249a9.477 9.477 0 0 0-.258-.169c-1.316-.975-16.082-11.899-27.309-19.416.356-1.162-.013-2.489-1.048-3.157a2.695 2.695 0 0 0-3.909 1.111l-9.112 16.9c-.46.851-1.319 1.161-1.79 1.269-.931.212-1.988.05-2.901-.444l-.294-.16c-.916-.496-1.631-1.294-1.962-2.189-.168-.454-.381-1.344.078-2.195l8.819-16.345a.041.041 0 0 1 .023-.02l10.686-4.002a5.38 5.38 0 0 1 2.158-.335l18.195.92.006.001 12.122 2.163a2.7 2.7 0 0 0 3.156-2.417c.132-1.43-.988-2.68-2.4-2.932l-12.098-2.159-.345-.039-20.034-1.012a2.77 2.77 0 0 0-1.079.167l-13.15 4.924c-.51.191-.956.529-1.27.975-.177.251-.34.513-.488.788l-.264.489c-4.956-.321-12.9-1.405-12.986-1.417a2.689 2.689 0 0 0-3.035 2.308c-.202 1.478-4.617 2.25 2.303 3.041.307.035 6.038.821 10.916 1.261l-5.975 11.075c-1.073 1.988-1.215 4.407-.391 6.638.791 2.139 2.372 3.938 4.451 5.063l.293.159a9.716 9.716 0 0 0 4.623 1.19c.687 0 1.373-.076 2.046-.231 2.313-.531 4.255-1.975 5.328-3.963l6.807-12.616c11.522 7.743 26.555 18.898 26.716 19.018.07.051.141.1.216.144l15.837 10.814a2.937 2.937 0 0 1 1.232 1.897 2.943 2.943 0 0 1-.455 2.216l-.164.241a2.954 2.954 0 0 1-4.106.778l-15.707-10.73a2.686 2.686 0 0 0-3.743.71 2.7 2.7 0 0 0 .708 3.75l12.233 8.356c.141.156.296.303.477.427a2.937 2.937 0 0 1 1.232 1.897 2.943 2.943 0 0 1-.455 2.216l-.164.241c-.918 1.35-2.759 1.697-4.163.741l-13.66-8.828a2.689 2.689 0 0 0-3.724.805 2.702 2.702 0 0 0 .804 3.731l11.184 7.227c.153.18.322.35.527.489a2.937 2.937 0 0 1 1.232 1.897 2.943 2.943 0 0 1-.455 2.216l-.164.241a2.958 2.958 0 0 1-4.117.771l-11.008-7.436a2.69 2.69 0 0 0-3.74.729 2.703 2.703 0 0 0 .727 3.747l7.434 5.022c.165.208.352.402.583.56a2.937 2.937 0 0 1 1.232 1.897 2.943 2.943 0 0 1-.455 2.216l-.164.241c-.919 1.348-2.76 1.698-4.094.787l-9.857-6.808 2.053-2.921c2.324-3.307 1.53-7.892-1.771-10.222l-.624-.44a7.273 7.273 0 0 0-2.454-1.109c.622-3.053-.552-6.33-3.253-8.236l-.688-.486a7.988 7.988 0 0 0-5.154-1.449c-.01-.066-.013-.133-.025-.199a8.297 8.297 0 0 0-3.406-5.404l-.24-.17c-2.9-2.046-6.662-1.967-9.449-.098-.473-.68-1.047-1.305-1.761-1.809l-.624-.44a7.25 7.25 0 0 0-5.466-1.224 7.264 7.264 0 0 0-4.735 2.998l-1.251 1.78-5.385-7.97c-6.868-10.67-2.509-1.557-3.741-.722a2.702 2.702 0 0 0-.721 3.748l6.529 9.664-3.307 4.704a7.296 7.296 0 0 0-1.222 5.477 7.285 7.285 0 0 0 2.993 4.744l.625.441a7.235 7.235 0 0 0 3.437 1.277c.053 2.57 1.272 5.083 3.526 6.673l.236.167a8.254 8.254 0 0 0 4.778 1.521c.481 0 .967-.042 1.452-.126a8.49 8.49 0 0 0 1.292-.34 8.026 8.026 0 0 0 2.803 3.529l.688.486a7.985 7.985 0 0 0 4.619 1.47c.235 0 .471-.041.707-.061.389 1.703 1.356 3.28 2.89 4.363l.626.442a7.27 7.27 0 0 0 4.204 1.335 7.315 7.315 0 0 0 5.997-3.109l2.72-3.869 9.913 6.847a8.292 8.292 0 0 0 4.687 1.449 8.336 8.336 0 0 0 6.905-3.647l.164-.241a8.315 8.315 0 0 0 1.409-3.934c.342.043.686.075 1.028.075a8.336 8.336 0 0 0 6.905-3.647l.164-.241a8.329 8.329 0 0 0 1.446-4.637 8.333 8.333 0 0 0 6.81-3.641l.164-.241a8.294 8.294 0 0 0 1.402-3.837c.344.044.69.078 1.04.078.524 0 1.051-.049 1.577-.149a8.282 8.282 0 0 0 5.343-3.497l.164-.241a8.313 8.313 0 0 0 1.298-6.261 8.358 8.358 0 0 0-1.49-3.414l7.477-10.48a2.71 2.71 0 0 0-.627-3.77zm-90.018 24.84a1.912 1.912 0 0 1-1.193.732 1.914 1.914 0 0 1-1.443-.32l-.625-.441a1.922 1.922 0 0 1-.786-1.253 1.92 1.92 0 0 1 .319-1.445l7.876-11.204a1.92 1.92 0 0 1 1.25-.788 1.904 1.904 0 0 1 1.444.32l.624.44a1.935 1.935 0 0 1 .545 2.56l-8.011 11.399zm8.681 7.814a2.929 2.929 0 0 1-1.911 1.206 2.946 2.946 0 0 1-2.207-.491l-.236-.167a2.967 2.967 0 0 1-.715-4.125l.748-1.065c.032-.043.073-.076.103-.12l7.876-11.204c.03-.042.046-.09.074-.132l2.145-3.051a2.93 2.93 0 0 1 1.912-1.206c.174-.03.347-.045.52-.045.603 0 1.187.183 1.682.533l.241.17a2.967 2.967 0 0 1 .714 4.125l-10.946 15.572zm10.628 5.136a2.66 2.66 0 0 1-1.734 1.093 2.652 2.652 0 0 1-1.999-.443l-.689-.486a2.692 2.692 0 0 1-.648-3.741l9.527-13.554a2.678 2.678 0 0 1 3.732-.65l.689.486a2.692 2.692 0 0 1 .648 3.741v-.001l-9.526 13.555zm15.679-4.809l-7.876 11.204a1.933 1.933 0 0 1-2.693.469l-.625-.442a1.943 1.943 0 0 1-.468-2.699l7.876-11.204a1.923 1.923 0 0 1 1.251-.788 1.904 1.904 0 0 1 1.443.32l.624.44a1.944 1.944 0 0 1 .468 2.7z" fill="#d4b896"></path>
            <path d="M174.3 96.518l-31.78-46.522a1.138 1.138 0 0 0-1.585-.297l-16.671 11.433a1.144 1.144 0 0 0-.297 1.588l31.781 46.522a1.138 1.138 0 0 0 1.585.297l16.671-11.433a1.144 1.144 0 0 0 .296-1.588z" fill="#d4b896"></path>
            <path d="M72.839 61.978l-17.496-10.12a1.137 1.137 0 0 0-1.557.418l-28.133 48.823a1.147 1.147 0 0 0 .417 1.56l17.496 10.12a1.135 1.135 0 0 0 1.558-.417l28.133-48.823a1.147 1.147 0 0 0-.418-1.561z" fill="#d4b896"></path>
            <path fill="#d4b896" d="M44.723 97.769a4.15 4.15 0 0 1-4.146 4.154 4.15 4.15 0 0 1-4.146-4.154 4.15 4.15 0 0 1 4.146-4.154 4.15 4.15 0 0 1 4.146 4.154z"></path>
            <path fill="#d4b896" d="M163.157 94.395a4.15 4.15 0 0 1-4.146 4.154 4.15 4.15 0 0 1-4.146-4.154 4.15 4.15 0 0 1 4.146-4.154 4.15 4.15 0 0 1 4.146 4.154z"></path>
          </svg>
        </div>
      )
    },
    {
      title: "Entlastung der Personalabteilung",
      description: "Unser persönlicher Support unterstützt Sie als Partner proaktiv bei Anpassungs- oder Veränderungsmaßnahmen.",
      icon: (
        <div className="w-16 h-16 hexagon bg-[#1a3a52] flex items-center justify-center">
          <svg className="w-10 h-10" viewBox="49.999 35.003 100.002 129.997" preserveAspectRatio="xMidYMid meet">
            <path d="M127.676 124.091a.709.709 0 0 0-.723-.146c-.152.055-15.407 5.56-35.664 5.56-20.261 0-37.539-5.513-37.711-5.569a.71.71 0 0 0-.918.77c1.501 11.118 5.864 20.49 13.875 28.392 7.056 6.961 17.632 9.265 27.97 9.265 8.353 0 19.027-7.099 25.732-19.23 5.006-9.057 7.614-18.238 7.64-18.33a.71.71 0 0 0-.201-.712z" fill="#d4b896"></path>
            <path d="M83.763 69.251c0 3.347 1.867 5.34 3.367 6.941 1.369 1.461 2.143 2.358 2.143 3.803 0 1.117.902 2.021 2.016 2.021a2.018 2.018 0 0 0 2.016-2.021c0-3.117-1.795-5.032-3.236-6.571-1.41-1.504-2.274-2.511-2.274-4.172 0-1.658.862-2.66 2.267-4.157 1.445-1.538 3.243-3.454 3.243-6.585s-1.798-5.047-3.243-6.586c-1.406-1.498-2.267-2.5-2.267-4.157 0-1.679.875-2.706 2.302-4.242 1.429-1.538 3.208-3.453 3.208-6.501a2.018 2.018 0 0 0-2.016-2.021 2.018 2.018 0 0 0-2.016 2.021c0 1.39-.768 2.284-2.126 3.745-1.508 1.623-3.384 3.642-3.384 6.998 0 3.345 1.865 5.332 3.363 6.928 1.371 1.46 2.147 2.358 2.147 3.815 0 1.457-.776 2.354-2.146 3.815-1.499 1.594-3.364 3.581-3.364 6.926z" fill="#d4b896"></path>
            <path d="M76.558 79.995c0 1.117.902 2.021 2.016 2.021a2.018 2.018 0 0 0 2.016-2.021c0-3.117-1.795-5.032-3.236-6.571-1.41-1.504-2.274-2.511-2.274-4.172 0-1.658.862-2.66 2.267-4.157 1.445-1.538 3.243-3.454 3.243-6.585a2.018 2.018 0 0 0-2.016-2.021 2.018 2.018 0 0 0-2.016 2.021c0 1.457-.776 2.354-2.146 3.815-1.499 1.596-3.364 3.583-3.364 6.928 0 3.347 1.867 5.34 3.367 6.941 1.369 1.459 2.143 2.356 2.143 3.801z" fill="#d4b896"></path>
            <path d="M101.988 79.995c0 1.117.902 2.021 2.016 2.021a2.018 2.018 0 0 0 2.016-2.021c0-3.117-1.795-5.032-3.236-6.571-1.41-1.504-2.274-2.511-2.274-4.172 0-1.658.862-2.66 2.267-4.157 1.445-1.538 3.243-3.454 3.243-6.585a2.018 2.018 0 0 0-2.016-2.021 2.018 2.018 0 0 0-2.016 2.021c0 1.457-.776 2.354-2.146 3.815-1.499 1.596-3.364 3.583-3.364 6.928 0 3.347 1.867 5.34 3.367 6.941 1.369 1.459 2.143 2.356 2.143 3.801z" fill="#d4b896"></path>
            <path d="M136.05 105.607h-5.495v-4.899a3.34 3.34 0 0 0-.758-2.107c-3.153-6.051-19.642-10.665-39.52-10.665-19.89 0-36.386 4.62-39.526 10.676a3.342 3.342 0 0 0-.752 2.1v23.899C50 146.882 68.069 165 90.278 165c19.144 0 35.201-13.467 39.271-31.448.104.01.204.031.31.031h6.192c7.692 0 13.95-6.275 13.95-13.988s-6.259-13.988-13.951-13.988zm-12.214 19.004c0 18.555-15.054 33.651-33.558 33.651S56.72 143.166 56.72 124.611v-16.925c7.154 3.488 19.507 5.795 33.558 5.795 14.051 0 26.404-2.307 33.558-5.795v16.925zm12.214 2.234h-5.56c.04-.74.065-1.484.065-2.235v-12.265h5.495c3.986 0 7.23 3.252 7.23 7.25s-3.243 7.25-7.23 7.25z" fill="#d4b896"></path>
          </svg>
        </div>
      )
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
            {benefitsCards.map((card, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all duration-150 h-full"
              >
                <div className="mb-4">
                  {card.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {card.description}
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