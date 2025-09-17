import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Shield, Eye, Database, Lock, AlertCircle, CheckCircle } from "lucide-react";

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "general",
      title: "Allgemeine Hinweise",
      icon: <Shield className="w-6 h-6" />,
      content: `Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können.`
    },
    {
      id: "collection",
      title: "Datenerfassung auf unserer Website",
      icon: <Database className="w-6 h-6" />,
      content: `Wer ist verantwortlich für die Datenerfassung auf dieser Website? Die Datenverarbeitung auf dieser 
                Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser 
                Website entnehmen.`
    },
    {
      id: "usage",
      title: "Wie erfassen wir Ihre Daten?",
      icon: <Eye className="w-6 h-6" />,
      content: `Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um 
                Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch 
                der Website durch unsere IT-Systeme erfasst.`
    },
    {
      id: "rights",
      title: "Welche Rechte haben Sie bezüglich Ihrer Daten?",
      icon: <Lock className="w-6 h-6" />,
      content: `Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, 
                Sperrung oder Löschung dieser Daten zu verlangen.`
    }
  ];

  return (
    <div className="min-h-screen" style={{backgroundColor: '#001f3d'}}>
      <Header />
      
      {/* Hero Section - Apple-like */}
      <section className="py-16 md:py-24" style={{backgroundColor: '#001f3d'}}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight">
              <span className="text-acencia-accent">Datenschutz</span>erklärung
            </h1>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Transparenz über den Umgang mit Ihren Daten
            </p>
            <p className="text-sm text-gray-400">
              Informationen gemäß Art. 13, 14 DSGVO
            </p>
          </div>
        </div>
      </section>

      {/* Responsible Entity */}
      <section className="py-16 md:py-20" style={{backgroundColor: '#001f3d'}}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-acencia-accent" />
              </div>
              <h2 className="text-3xl font-semibold text-white tracking-tight">
                Verantwortliche Stelle
              </h2>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-gray-200 leading-relaxed space-y-2">
                <p><strong className="text-white">ACENCIA GmbH</strong></p>
                <p>Fasanenweg 5</p>
                <p>55546 Hackenheim</p>
                <br />
                <p><strong className="text-white">Geschäftsführer:</strong> Uwe Weimert</p>
                <p><strong className="text-white">E-Mail:</strong> <a href="mailto:info@acencia.de" className="text-acencia-accent hover:text-acencia-accent-hover">info@acencia.de</a></p>
                <p><strong className="text-white">Telefon:</strong> <a href="tel:+4967038061180" className="text-acencia-accent hover:text-acencia-accent-hover">+49 (0) 6703 80611-80</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Overview Sections */}
      {sections.map((section, index) => (
        <section 
          key={section.id}
          className="py-16 md:py-20"
          style={{backgroundColor: '#001f3d'}}
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-8">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4">
                  <div className="text-acencia-accent">
                    {section.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  {section.title}
                </h3>
              </div>
              
              <p className="text-gray-200 leading-relaxed">
                {section.content}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* Data Processing Details */}
      <section className="py-16 md:py-20" style={{backgroundColor: '#001f3d'}}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4">
                <Database className="w-6 h-6 text-acencia-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Datenverarbeitung im Detail
              </h3>
            </div>
            
            <div className="space-y-8">
              {/* Server Logs */}
              <div className="border-l-4 border-acencia-accent/30 pl-6">
                <h4 className="text-lg font-semibold text-white mb-3">Server-Log-Dateien</h4>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                  die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="space-y-2 text-gray-200 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Browsertyp und Browserversion</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Verwendetes Betriebssystem</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Referrer URL</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Hostname des zugreifenden Rechners</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Uhrzeit der Serveranfrage</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>IP-Adresse</span>
                  </li>
                </ul>
              </div>

              {/* Contact Form */}
              <div className="border-l-4 border-blue-400/30 pl-6">
                <h4 className="text-lg font-semibold text-white mb-3">Kontaktformular</h4>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                  inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                  von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>

              {/* Cookies */}
              <div className="border-l-4 border-purple-400/30 pl-6">
                <h4 className="text-lg font-semibold text-white mb-3">Cookies</h4>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen 
                  Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver 
                  und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die 
                  Ihr Browser speichert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 md:py-20" style={{backgroundColor: '#001f3d'}}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-4">
                <Lock className="w-6 h-6 text-acencia-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Ihre Rechte
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Recht auf Auskunft</h4>
                    <p className="text-gray-300 text-xs">Art. 15 DSGVO</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Recht auf Berichtigung</h4>
                    <p className="text-gray-300 text-xs">Art. 16 DSGVO</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Recht auf Löschung</h4>
                    <p className="text-gray-300 text-xs">Art. 17 DSGVO</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Recht auf Einschränkung</h4>
                    <p className="text-gray-300 text-xs">Art. 18 DSGVO</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Recht auf Datenübertragbarkeit</h4>
                    <p className="text-gray-300 text-xs">Art. 20 DSGVO</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Widerspruchsrecht</h4>
                    <p className="text-gray-300 text-xs">Art. 21 DSGVO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Privacy */}
      <section className="py-16 md:py-20" style={{backgroundColor: '#001f3d'}}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-acencia-accent/30 text-center">
            <div className="w-16 h-16 bg-acencia-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8 text-acencia-accent" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
              Fragen zum Datenschutz?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed">
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, 
              Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an uns.
            </p>
            <div className="space-y-2">
              <p className="text-white font-medium">ACENCIA GmbH</p>
              <p className="text-gray-200">
                <a href="mailto:info@acencia.de" className="text-acencia-accent hover:text-acencia-accent-hover transition-colors duration-150">
                  info@acencia.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;