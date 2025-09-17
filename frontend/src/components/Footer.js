import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#001F3C] border-t border-[#2a4a6b] py-8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Copyright */}
          <div className="text-sm text-gray-300 font-normal order-2 md:order-1">
            © 2025 ACENCIA GmbH. Alle Rechte vorbehalten.
          </div>

          {/* Back to Top Button */}
          <div className="order-1 md:order-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-orange-500 text-white rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#001F3C]"
              aria-label="Zurück zum Seitenanfang"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
              </svg>
            </button>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 order-3">
            <Link to="/datenschutz" className="text-sm text-gray-300 hover:text-orange-400 transition-colors duration-150 font-normal">
              Datenschutzerklärung
            </Link>
            <Link to="/impressum" className="text-sm text-gray-300 hover:text-orange-400 transition-colors duration-150 font-normal">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;