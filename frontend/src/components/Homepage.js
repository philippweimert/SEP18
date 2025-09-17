import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Award, Users, TrendingUp, ArrowRight, Sparkles, CheckCircle, Trophy, Zap, Building, Shield } from "lucide-react";

const Homepage = () => {
  const expertiseAreas = [
    {
      title: "bAV",
      subtitle: "Betriebliche Altersvorsorge",
      description: "Komplexe bAV-Herausforderungen einfach gelöst - mit über 30 Jahren Expertise",
      link: "/die-bav",
      color: "from-slate-600 to-slate-700",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "bKV", 
      subtitle: "Betriebliche Krankenversicherung",
      description: "Gesundheitsvorsorge als Mitarbeiterbenefit - professionell implementiert",
      link: "/bkv",
      color: "from-blue-600 to-blue-700", 
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "bUV",
      subtitle: "Betriebliche Unfallversicherung", 
      description: "Umfassender Schutz für Ihre Mitarbeitenden - über das Gesetz hinaus",
      link: "/buv",
      color: "from-indigo-600 to-indigo-700",
      icon: <Award className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      text: "Über 30 Jahre Erfahrung",
      icon: <Trophy className="w-4 h-4" />
    },
    {
      text: "DSGVO konform & Rechtssicher",
      icon: <Shield className="w-4 h-4" />
    },
    {
      text: "Individuelle Lösungen für jede Unternehmensgröße",
      icon: <Building className="w-4 h-4" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-acencia via-acencia to-acencia-light">
      <Header />
      
      {/* Professional Hero Section */}
      <div className="bg-white">
        <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Content - Hero Text */}
              <div className="lg:col-span-7">
                {/* Main Headline - Apple Style */}
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-6 leading-tight tracking-tight">
                  Digital. Einfach.{" "}
                  <span className="text-orange-500">Modern.</span>
                </h1>

                {/* Subtitle - Professional */}
                <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                  Automatisieren Sie Ihre betriebliche Altersvorsorge komplett
                </p>

                {/* Clean Benefits List */}
                <div className="space-y-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3"
                    >
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="text-orange-600">
                          {benefit.icon}
                        </div>
                      </div>
                      <span className="text-gray-700 font-medium">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Professional CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
                  >
                    <span>Jetzt kostenfrei starten</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <Link 
                    to="/die-bav?autoplay=true"
                    className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-medium text-base transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <span>Video ansehen</span>
                  </Link>
                </div>
              </div>

              {/* Right Content - Professional Layout */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Solutions Cards - Professional */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Unsere Lösungen</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {expertiseAreas.map((area, index) => (
                      <Link 
                        key={index}
                        to={area.link}
                        className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                      >
                        <div className="text-center">
                          <h4 className="text-sm font-medium text-gray-900 mb-1">
                            {area.title}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {area.subtitle}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Professional Onboarding Card */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">
                          <span className="text-green-600">0,00 €</span> Onboarding
                        </h3>
                        <p className="text-sm text-gray-600">
                          Bis zum <span className="font-medium">01.01.2027</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                        Kostenfrei
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;