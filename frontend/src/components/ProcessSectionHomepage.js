import React from "react";
import { CheckCircle, Settings, Users, ArrowRight } from "lucide-react";
import { APP_CONFIG } from "../lib/config";
import { Button } from "./ui/button";

const ProcessSectionHomepage = () => {
  const processSteps = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Rechtliche Prüfung",
      subtitle: "& Einrichtung bAV",
      description: "Unter Berücksichtigung aller rechtlichen Aspekte ermitteln wir unabhängig das optimale Vorsorgemodell für Unternehmen und Mitarbeitende - individuell zugeschnitten mit innovativen Produktoptionen.",
      keyPoints: ["Vollständige Compliance-Prüfung", "Individuelle Bedarfsanalyse", "Rechtssichere Dokumentation"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Digitale bAV-Verwaltung",
      subtitle: "& laufender Support",
      description: "Wir richten Ihre bAV-Verwaltung ein, digitalisieren und automatisieren Ihre Prozesse. Nahtlose Integration in bestehende HR-Systeme und vollautomatisierte Abwicklung aller Prozesse.",
      keyPoints: ["System-Integration (HR)", "Vollautomatisierte Prozesse", "24/7 digitaler Support"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mitarbeiterkommunikation",
      subtitle: "& (digitale) Beratung",
      description: "Automatisierte Kommunikation mit Mitarbeitenden und Versorgungsträgern. Moderne Informationsmaßnahmen und auf Wunsch individuelle Beratung - digital oder vor Ort.",
      keyPoints: ["Automatisierte Kommunikation", "Digitale Mitarbeiter-Portale", "Persönliche Beratung verfügbar"]
    }
  ];

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 text-display">
            Als Partner begleiten wir Sie entlang des gesamten 
            <span className="text-emphasis"> bAV-Prozesses</span>
          </h2>
          <p className="text-body-large text-slate-600 max-w-3xl mx-auto">
            Von der rechtlichen Einrichtung bis zur vollständigen Digitalisierung - 
            wir machen bAV einfach und effizient.
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="relative stagger-item" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Step Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-400 border border-slate-200 hover:border-orange-300 card-hover h-full">
                
                {/* Step Number */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-4 mb-6 inline-block icon-hover">
                  <div className="text-orange-600">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 text-headline">
                  {step.title}
                </h3>
                <p className="text-orange-600 font-medium mb-4 text-body">
                  {step.subtitle}
                </p>
                <p className="text-slate-600 text-body-small leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Key Points */}
                <div className="space-y-2">
                  <h4 className="text-caption text-slate-500 font-semibold uppercase tracking-wider mb-3">
                    Zentrale Vorteile:
                  </h4>
                  {step.keyPoints.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-body-small">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow connecting to next step */}
                {index < processSteps.length - 1 && (
                  <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center animate-pulse">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="btn-primary bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-400 hover:scale-105 shadow-lg text-body"
              onClick={() => window.open(APP_CONFIG.BOOKING_URL, '_blank')}
            >
              Jetzt starten
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-400 micro-bounce text-body"
              onClick={() => window.open(APP_CONFIG.BOOKING_URL, '_blank')}
            >
              Beratung buchen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSectionHomepage;