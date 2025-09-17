import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { MapPin, Phone, Mail, Calendar, Send, CheckCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#001f3d'}}>
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24" style={{backgroundColor: '#001f3d'}}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight">
              <span className="text-acencia-accent">Kontakt</span> aufnehmen
            </h1>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Wir freuen uns auf Ihre Nachricht
            </p>
            <p className="text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Haben Sie Fragen zur betrieblichen Altersvorsorge oder möchten Sie mehr über unsere digitalen 
              Lösungen erfahren? Kontaktieren Sie uns – wir beraten Sie gerne.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{backgroundColor: '#001f3d'}}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4">
                  <Send className="w-6 h-6 text-acencia-accent" />
                </div>
                <h2 className="text-3xl font-semibold text-white tracking-tight">
                  Nachricht senden
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-acencia-accent focus:border-transparent transition-all duration-150"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-acencia-accent focus:border-transparent transition-all duration-150"
                    placeholder="ihre.email@unternehmen.de"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-acencia-accent focus:border-transparent transition-all duration-150"
                    placeholder="Ihr Unternehmen (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-acencia-accent focus:border-transparent transition-all duration-150 resize-vertical"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-acencia-accent hover:bg-acencia-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Nachricht senden</span>
                </Button>

                <p className="text-xs text-gray-400">
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Direct Contact */}
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-acencia-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white tracking-tight">
                    Direkter Kontakt
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 text-acencia-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Telefon</h4>
                      <a href="tel:+4967038061180" className="text-acencia-accent hover:text-acencia-accent-hover transition-colors duration-150">
                        +49 (0) 6703 80611-80
                      </a>
                      <p className="text-gray-300 text-sm mt-1">Mo-Fr 9:00-17:00 Uhr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-acencia-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">E-Mail</h4>
                      <a href="mailto:info@acencia.de" className="text-acencia-accent hover:text-acencia-accent-hover transition-colors duration-150">
                        info@acencia.de
                      </a>
                      <p className="text-gray-300 text-sm mt-1">Antwort innerhalb von 24h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-acencia-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Adresse</h4>
                      <p className="text-gray-200 text-sm">
                        ACENCIA GmbH<br />
                        Fasanenweg 5<br />
                        55546 Hackenheim
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Appointment Booking */}
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-acencia-accent/30">
                <div className="flex items-center mb-4">
                  <Calendar className="w-8 h-8 text-acencia-accent mr-3" />
                  <h3 className="text-xl font-semibold text-white">
                    Beratungstermin vereinbaren
                  </h3>
                </div>
                <p className="text-gray-200 mb-6 text-sm">
                  Buchen Sie direkt einen unverbindlichen Beratungstermin in unserem Online-Kalender.
                </p>
                <Button 
                  className="w-full bg-acencia-accent hover:bg-acencia-accent-hover text-white px-4 py-3 rounded-lg font-medium transition-colors duration-150"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  Termin online buchen
                </Button>
              </div>

              {/* Quick Info */}
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Das können Sie erwarten
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">Kostenlose Erstberatung</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">Individuelle Lösungsvorschläge</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">Transparente Aufklärung</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200 text-sm">Keine Verkaufsgespräche</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;