import React from "react";
import { APP_CONFIG } from "../lib/config";
import Header from "./Header";
import Footer from "./Footer";
import { UnifiedSection, UnifiedContainer, UnifiedCard, UnifiedHeading, UnifiedGrid } from "./ui/UnifiedSection";
import { Button } from "./ui/button";
import { Users, Award, HeartHandshake, Target, ArrowRight, Mail, Calendar } from "lucide-react";

const ServiceTeamPage = () => {
  const teamValues = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expertise",
      description: "Über 30 Jahre Erfahrung in der betrieblichen Altersvorsorge und tiefes Verständnis für die Bedürfnisse unserer Kunden."
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Persönliche Betreuung",
      description: "Jeder Kunde bekommt seinen festen Ansprechpartner – für kontinuierliche und vertrauensvolle Zusammenarbeit."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Zielorientiert",
      description: "Wir arbeiten ergebnisorientiert und fokussieren uns auf messbare Erfolge für unsere Kunden."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Teamwork",
      description: "Interdisziplinäres Team aus Versicherungsexperten, IT-Spezialisten und Kundenbetreuern."
    }
  ];

  return (
    <div className="min-h-screen" style={{backgroundColor: '#001f3d'}}>
      <Header />
      
      <UnifiedSection variant="hero">
        <UnifiedContainer>
          <div className="text-center">
            <UnifiedHeading level={1}>Unser <span className="text-acencia-accent">Service-Team</span></UnifiedHeading>
            <p className="text-xl text-gray-300 mt-6 mb-4 leading-relaxed">Experten für Ihre betriebliche Altersvorsorge</p>
            <p className="text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">Mit über 30 Jahren Erfahrung und einem engagierten Team von Spezialisten stehen wir Ihnen bei allen Fragen zur bAV zur Seite. Lernen Sie die Menschen hinter ACENCIA kennen.</p>
          </div>
        </UnifiedContainer>
      </UnifiedSection>

      <UnifiedSection variant="standard" className="!pt-0">
        <UnifiedContainer>
          <UnifiedCard>
            <div className="flex items-center mb-6"><div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4"><Users className="w-6 h-6 text-acencia-accent" /></div><UnifiedHeading level={2}>Unser Ansatz</UnifiedHeading></div>
            <UnifiedGrid cols={2} gap="large">
              <div><p className="text-gray-200 leading-relaxed mb-4">Bei ACENCIA steht der Mensch im Mittelpunkt. Wir glauben daran, dass erfolgreiche bAV-Projekte nur durch persönliche Betreuung und echte Partnerschaft entstehen. Unser interdisziplinäres Team verbindet jahrzehntelange Branchenerfahrung mit modernster Technologie.</p><p className="text-gray-200 leading-relaxed">Jeder Kunde bekommt einen festen Ansprechpartner, der das Unternehmen und seine Bedürfnisse kennt. So entstehen langfristige Partnerschaften, die auf Vertrauen und gegenseitigem Verständnis basieren.</p></div>
              <UnifiedCard accent compact><h3 className="text-lg font-semibold text-white mb-4">Was uns auszeichnet</h3><ul className="space-y-2 text-gray-200 text-sm"><li className="flex items-start space-x-2"><div className="w-2 h-2 bg-acencia-accent rounded-full mt-2 flex-shrink-0"></div><span>Persönliche Ansprechpartner</span></li><li className="flex items-start space-x-2"><div className="w-2 h-2 bg-acencia-accent rounded-full mt-2 flex-shrink-0"></div><span>Interdisziplinäre Expertise</span></li><li className="flex items-start space-x-2"><div className="w-2 h-2 bg-acencia-accent rounded-full mt-2 flex-shrink-0"></div><span>Kontinuierliche Weiterbildung</span></li><li className="flex items-start space-x-2"><div className="w-2 h-2 bg-acencia-accent rounded-full mt-2 flex-shrink-0"></div><span>Kundenorientierte Lösungen</span></li></ul></UnifiedCard>
            </UnifiedGrid>
          </UnifiedCard>
        </UnifiedContainer>
      </UnifiedSection>

      <UnifiedSection variant="standard" className="!pt-0">
        <UnifiedContainer>
          <div className="text-center mb-12"><UnifiedHeading level={2}>Unsere Werte</UnifiedHeading><p className="text-gray-300 max-w-2xl mx-auto">Diese Prinzipien leiten unser tägliches Handeln und prägen die Zusammenarbeit in unserem Team.</p></div>
          <UnifiedGrid cols={2} gap="medium">
            {teamValues.map((value, index) => (
              <UnifiedCard key={index} hover compact>
                <div className="flex items-start space-x-4"><div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center"><div className="text-acencia-accent">{value.icon}</div></div><div className="flex-1"><h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3><p className="text-gray-300 leading-relaxed text-sm">{value.description}</p></div></div>
              </UnifiedCard>
            ))}
          </UnifiedGrid>
        </UnifiedContainer>
      </UnifiedSection>

      <UnifiedSection variant="standard" className="!pt-0">
        <UnifiedContainer>
          <UnifiedCard>
            <div className="flex items-center mb-6"><div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4"><Award className="w-6 h-6 text-acencia-accent" /></div><h2 className="text-3xl font-semibold text-white tracking-tight">Geschäftsführung</h2></div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-white/20"><div className="flex flex-col md:flex-row md:items-center md:space-x-8"><div className="mb-6 md:mb-0"><div className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center"><Users className="w-12 h-12 text-acencia-accent" /></div></div><div className="flex-1"><h3 className="text-2xl font-semibold text-white mb-2">Uwe Weimert</h3><p className="text-acencia-accent font-medium mb-4">Geschäftsführer</p><p className="text-gray-200 leading-relaxed mb-4">Mit über 30 Jahren Erfahrung in der Versicherungsbranche leitet Uwe Weimert ACENCIA mit Leidenschaft und Expertise. Seine Vision: betriebliche Altersvorsorge durch Digitalisierung zu vereinfachen und für alle zugänglich zu machen.</p><div className="flex space-x-4"><a href="mailto:info@acencia.de" className="inline-flex items-center text-acencia-accent hover:text-acencia-accent-hover transition-colors duration-150"><Mail className="w-4 h-4 mr-2" /><span className="text-sm">Kontakt aufnehmen</span></a></div></div></div></div>
          </UnifiedCard>
        </UnifiedContainer>
      </UnifiedSection>

      <UnifiedSection variant="standard" className="!pt-0">
        <UnifiedContainer>
          <UnifiedCard className="text-center border-blue-400/30"><div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6"><Users className="w-8 h-8 text-blue-400" /></div><h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">Unser Team wächst</h2><p className="text-gray-200 mb-6 max-w-2xl mx-auto">ACENCIA befindet sich in einer Wachstumsphase. Weitere Teammitglieder und deren Vorstellung folgen in Kürze. Auch Informationen zu Karrieremöglichkeiten werden hier ergänzt.</p></UnifiedCard>
        </UnifiedContainer>
      </UnifiedSection>

      <UnifiedSection variant="standard" className="!pt-0">
        <UnifiedContainer>
          <UnifiedCard className="text-center border-acencia-accent/30"><div className="w-16 h-16 bg-acencia-accent/20 rounded-full flex items-center justify-center mx-auto mb-6"><Calendar className="w-8 h-8 text-acencia-accent" /></div><h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">Lernen Sie uns persönlich kennen</h2><p className="text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">Vereinbaren Sie ein unverbindliches Gespräch mit unserem Team. Wir freuen uns darauf, Sie kennenzulernen und gemeinsam Lösungen für Ihre bAV zu entwickeln.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Button className="bg-acencia-accent hover:bg-acencia-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2" onClick={() => window.open(APP_CONFIG.BOOKING_URL, '_blank')}><span>Beratungstermin vereinbaren</span><ArrowRight className="w-4 h-4" /></Button><Button className="bg-black/40 border border-white/20 hover:bg-black/60 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150" onClick={() => window.location.href = '/kontakt'}>Kontakt aufnehmen</Button></div></UnifiedCard>
        </UnifiedContainer>
      </UnifiedSection>
      
      <Footer />
    </div>
  );
};

export default ServiceTeamPage;