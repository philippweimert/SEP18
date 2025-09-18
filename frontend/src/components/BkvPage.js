import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { UnifiedSection, UnifiedContainer, UnifiedCard, UnifiedHeading, UnifiedGrid, UnifiedButton } from "./ui/UnifiedSection";
import { Shield, Users, TrendingUp, ArrowRight, Building2, Heart, CheckCircle, Play } from "lucide-react";
import { APP_CONFIG } from "../lib/config";

const BkvPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen" style={{backgroundColor: '#001f3d'}}>
      <Header />
      
      <UnifiedSection variant="hero">
        <UnifiedContainer>
          <UnifiedGrid cols={2} gap="large">
            <div>
              <UnifiedHeading level={1}>Wir machen <span className="text-acencia-accent">bKV</span> einfach!</UnifiedHeading>
              <p className="text-xl text-gray-300 mb-8 mt-6 leading-relaxed">Gesundheitsvorsorge als Mitarbeiterbenefit - Attraktive Zusatzleistungen für Ihre Belegschaft</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3"><div className="w-2 h-2 bg-acencia-accent rounded-full mt-2.5 flex-shrink-0"></div><span className="text-gray-300 text-base">Steuerfreie Zusatzleistungen</span></li>
                <li className="flex items-start space-x-3"><div className="w-2 h-2 bg-acencia-accent rounded-full mt-2.5 flex-shrink-0"></div><span className="text-gray-300 text-base">Erhöhte Mitarbeiterzufriedenheit</span></li>
                <li className="flex items-start space-x-3"><div className="w-2 h-2 bg-acencia-accent rounded-full mt-2.5 flex-shrink-0"></div><span className="text-gray-300 text-base">Wettbewerbsvorteil bei der Talentgewinnung</span></li>
              </ul>
              <UnifiedButton onClick={() => window.open(APP_CONFIG.BOOKING_URL, '_blank')} icon={<ArrowRight className="w-4 h-4" />}>Jetzt informieren</UnifiedButton>
              <p className="text-sm text-gray-400 mt-8">Informationen aus dem Geschäftsbetrieb gemäß §93 HGB</p>
            </div>
            <div className="space-y-6">
              <UnifiedCard className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-acencia-accent" />
                </div>
                <h3 className="text-white font-medium text-base mb-2">Betriebliche Krankenversicherung</h3>
                <p className="text-gray-300 text-sm">Gesundheitsvorsorge für Ihre Mitarbeiter</p>
              </UnifiedCard>
              <UnifiedCard className="border-green-400/30">
                <div className="flex items-center space-x-2 mb-2"><CheckCircle className="w-4 h-4 text-green-400" /><span className="text-green-300 font-medium text-sm">Kostenlose Beratung</span></div>
                <p className="text-green-200 text-sm">Unverbindliche Erstberatung</p>
                <Button className="w-full mt-4 bg-green-600/70 border border-green-400/30 text-white hover:bg-green-600 text-sm py-2">KOSTENFREI</Button>
              </UnifiedCard>
            </div>
          </UnifiedGrid>
        </UnifiedContainer>
      </UnifiedSection>

      <UnifiedSection variant="standard" className="!pt-0">
        <UnifiedContainer>
          <UnifiedCard>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4"><Heart className="w-6 h-6 text-acencia-accent" /></div>
              <h2 className="text-3xl font-semibold text-white tracking-tight">Was ist betriebliche Krankenversicherung?</h2>
            </div>
            <UnifiedGrid cols={2} gap="large">
              <p className="text-gray-200 leading-relaxed">Die betriebliche Krankenversicherung (bKV) ist eine Zusatzversicherung, die Arbeitgeber für ihre Mitarbeiter abschließen können. Sie ergänzt die gesetzliche Krankenversicherung um attraktive Mehrleistungen.</p>
              <p className="text-gray-200 leading-relaxed">Als steuerfreier Sachbezug bis 50 Euro monatlich bietet die bKV sowohl für Arbeitgeber als auch Arbeitnehmer erhebliche Vorteile bei der Mitarbeiterbindung und Gesundheitsvorsorge.</p>
            </UnifiedGrid>
          </UnifiedCard>
        </UnifiedContainer>
      </UnifiedSection>
      
      <Footer />
    </div>
  );
};

export default BkvPage;