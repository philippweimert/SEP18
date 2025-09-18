import React from "react";
import { CheckCircle, Settings, Users, ArrowRight } from "lucide-react";
import { APP_CONFIG } from "../lib/config";

const ProcessSection = () => {
  const processSteps = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Rechtliche Prüfung",
      subtitle: "& Einrichtung bAV",
      description: "Unter Berücksichtigung aller rechtlichen Aspekte ermitteln wir unabhängig das optimale Vorsorgemodell für Unternehmen und Mitarbeitende - individuell zugeschnitten mit innovativen Produktoptionen.",
      keyPoints: [
        "Vollständige Compliance-Prüfung",
        "Individuelle Bedarfsanalyse", 
        "Rechtssichere Dokumentation"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Digitale bAV-Verwaltung",
      subtitle: "& laufender Support",
      description: "Wir richten Ihre bAV-Verwaltung ein, digitalisieren und automatisieren Ihre Prozesse. Nahtlose Integration in bestehende HR-Systeme und vollautomatisierte Abwicklung aller Prozesse.",
      keyPoints: [
        "System-Integration (HR)",
        "Vollautomatisierte Prozesse",
        "24/7 digitaler Support"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mitarbeiterkommunikation",
      subtitle: "& (digitale) Beratung", 
      description: "Automatisierte Kommunikation mit Mitarbeitenden und Versorgungsträgern. Moderne Informationsmaßnahmen und auf Wunsch individuelle Beratung - digital oder vor Ort.",
      keyPoints: [
        "Automatisierte Kommunikation",
        "Digitale Mitarbeiter-Portale",
        "Persönliche Beratung verfügbar"
      ]
    }
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-orange-400 font-medium text-sm">Unser bewährter 3-Stufen-Prozess</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Als Partner begleiten wir Sie entlang des gesamten bAV-Prozesses
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Von der rechtlichen Einrichtung bis zur vollständigen Digitalisierung - 
            wir machen bAV einfach und effizient.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        {/* Process steps */}
        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Step number and icon */}
                <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="text-orange-500">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7">
                  <div className="bg-slate-800 rounded-2xl p-8 h-full hover:bg-slate-700 transition-colors duration-300 border border-slate-700 hover:border-orange-500/50">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-orange-400 font-medium mb-4 text-lg">
                      {step.subtitle}
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    {/* Key points */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                        Zentrale Vorteile:
                      </h4>
                      {step.keyPoints.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow or CTA */}
                <div className="lg:col-span-3 flex justify-center">
                  {index < processSteps.length - 1 ? (
                    <div className="hidden lg:flex items-center justify-center">
                      <div className="flex flex-col items-center space-y-2">
                        <ArrowRight className="w-8 h-8 text-orange-500" />
                        <span className="text-xs text-slate-500 text-center">
                          Nächster<br/>Schritt
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-4">
                      <button 
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                        onClick={() => window.open(APP_CONFIG.BOOKING_URL, '_blank')}
                      >
                        Jetzt starten
                      </button>
                      <button 
                        className="border-2 border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm"
                        onClick={() => window.open(APP_CONFIG.BOOKING_URL, '_blank')}
                      >
                        Beratung buchen
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile arrow */}
              {index < processSteps.length - 1 && (
                <div className="flex lg:hidden justify-center my-6">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white rotate-90" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;