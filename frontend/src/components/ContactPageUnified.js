import React, { useState } from "react";
import { APP_CONFIG } from "../lib/config";
import Header from "./Header";
import Footer from "./Footer";
import { 
  UnifiedSection, 
  UnifiedContainer, 
  UnifiedCard, 
  UnifiedHeading,
  UnifiedButton,
  UnifiedGrid
} from "./ui/UnifiedSection";
import { MapPin, Phone, Mail, Calendar, Send, CheckCircle, Clock, MessageSquare } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const ContactPageUnified = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Nachricht gesendet!",
        description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Telefon",
      content: "+49 (0) 123 456789",
      action: "tel:+49123456789"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "E-Mail",
      content: "info@acencia.de",
      action: "mailto:info@acencia.de"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Adresse",
      content: "Musterstraße 123, 12345 Berlin",
      action: null
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Geschäftszeiten",
      content: "Mo-Fr: 9:00 - 18:00 Uhr",
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-[#001f3d]">
      <Header />
      
      {/* Hero Section - Einheitlich */}
      <UnifiedSection variant="hero">
        <UnifiedContainer>
          <div className="text-center">
            <UnifiedHeading level={1} accent>
              Kontakt aufnehmen
            </UnifiedHeading>
            <p className="text-xl text-gray-300 mt-6 mb-4 leading-relaxed">
              Wir freuen uns auf Ihre Nachricht
            </p>
            <p className="text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Haben Sie Fragen zur betrieblichen Altersvorsorge oder möchten Sie mehr über unsere digitalen 
              Lösungen erfahren? Unser Expertenteam steht Ihnen gerne zur Verfügung.
            </p>
          </div>
        </UnifiedContainer>
      </UnifiedSection>

      {/* Contact Form & Info - Kompakter Abstand */}
      <UnifiedSection variant="standard" className="!pt-0">
        <UnifiedContainer>
          <UnifiedGrid cols={2} gap="large">
            
            {/* Contact Form */}
            <UnifiedCard>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4">
                  <Send className="w-6 h-6 text-acencia-accent" />
                </div>
                <UnifiedHeading level={3}>
                  Nachricht senden
                </UnifiedHeading>
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
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-acencia-accent focus:border-transparent transition-all duration-150 resize-none"
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>

                <UnifiedButton
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </UnifiedButton>
              </form>
            </UnifiedCard>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <UnifiedCard accent>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-acencia-accent" />
                  </div>
                  <UnifiedHeading level={3}>
                    Schnellkontakt
                  </UnifiedHeading>
                </div>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-acencia-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        {React.cloneElement(info.icon, { className: "w-5 h-5 text-acencia-accent" })}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-400 mb-1">{info.title}</p>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-white hover:text-acencia-accent transition-colors duration-150"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-white">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </UnifiedCard>

              {/* Direct Booking */}
              <UnifiedCard className="bg-gradient-to-br from-acencia-accent/20 to-acencia-accent/10 border-acencia-accent/30">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-acencia-accent mr-3" />
                  <h3 className="text-lg font-semibold text-white">
                    Beratungstermin buchen
                  </h3>
                </div>
                <p className="text-gray-300 text-sm mb-6">
                  Vereinbaren Sie direkt einen Termin mit unseren bAV-Experten für eine kostenlose Erstberatung.
                </p>
                <UnifiedButton
                  variant="primary"
                  className="w-full"
                  onClick={() => window.open(APP_CONFIG.BOOKING_URL, '_blank')}
                >
                  Termin online buchen
                </UnifiedButton>
              </UnifiedCard>

              {/* Response Time */}
              <UnifiedCard compact>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-white font-medium">Schnelle Antwortzeit</p>
                    <p className="text-gray-400 text-sm">
                      Wir antworten innerhalb von 24 Stunden
                    </p>
                  </div>
                </div>
              </UnifiedCard>
            </div>
          </UnifiedGrid>
        </UnifiedContainer>
      </UnifiedSection>

      {/* Map Section - Optional */}
      <UnifiedSection variant="compact" className="!pt-0">
        <UnifiedContainer>
          <UnifiedCard>
            <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-acencia-accent mx-auto mb-4" />
                <p className="text-gray-400">Interaktive Karte</p>
                <p className="text-gray-500 text-sm mt-2">Google Maps Integration verfügbar</p>
              </div>
            </div>
          </UnifiedCard>
        </UnifiedContainer>
      </UnifiedSection>

      <Footer />
    </div>
  );
};

export default ContactPageUnified;