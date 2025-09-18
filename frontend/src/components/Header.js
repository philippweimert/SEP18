import React, { useState, useEffect } from "react";
import { APP_CONFIG } from "../lib/config";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBavDropdownOpen, setIsBavDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#001F3C] border-b border-[#2a4a6b] backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center mr-12">
            <div className="text-xl font-semibold text-white tracking-tight">
              ACENCIA
            </div>
          </Link>

          {/* Navigation Links - Clean & Minimal */}
          <nav className="hidden md:flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => setIsBavDropdownOpen(true)}
              onMouseLeave={() => setIsBavDropdownOpen(false)}
            >
              <Link 
                to="/die-bav" 
                className="text-white hover:text-orange-400 font-medium text-sm transition-colors duration-200 py-2"
              >
                bAV
              </Link>
              
              {/* Clean Dropdown */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-sm py-2 transition-all duration-200 ${
                isBavDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <Link 
                  to="/die-bav/gesetzliche-pflichten" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                >
                  Rechtlicher Rahmen
                </Link>
                <Link 
                  to="/die-bav/y" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                >
                  Vorteile Arbeitnehmer
                </Link>
                <Link 
                  to="/die-bav/aktuelles" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                >
                  Aktuelles
                </Link>
              </div>
            </div>
            
            <Link 
              to="/bkv" 
              className="text-white hover:text-orange-400 font-medium text-sm transition-colors duration-200 py-2"
            >
              bKV
            </Link>
            
            <Link 
              to="/buv" 
              className="text-white hover:text-orange-400 font-medium text-sm transition-colors duration-200 py-2"
            >
              bUV
            </Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <Link 
                to="/ueber-uns" 
                className="text-white hover:text-orange-400 font-medium text-sm transition-colors duration-200 py-2"
              >
                Über uns
              </Link>
              
              <div className={`absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-sm py-2 transition-all duration-200 ${
                isAboutDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <Link 
                  to="/ueber-uns/service-team" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                >
                  Service-Team
                </Link>
              </div>
            </div>

            {/* Kontakt as separate navigation item */}
            <Link 
              to="/kontakt" 
              className="text-white hover:text-orange-400 font-medium text-sm transition-colors duration-200 py-2"
            >
              Kontakt
            </Link>
          </nav>

          {/* Login Portal Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button 
              className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              onClick={() => window.open(APP_CONFIG.LOGIN_PORTAL_URL, '_blank')}
            >
              Login Portal
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-orange-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-200 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="py-4 space-y-2 border-t border-[#2a4a6b]">
            <Link
              to="/die-bav"
              className="block py-3 text-white hover:text-orange-400 font-medium text-sm transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              bAV
            </Link>
            <Link
              to="/bkv"
              className="block py-3 text-white hover:text-orange-400 font-medium text-sm transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              bKV
            </Link>
            <Link
              to="/buv"
              className="block py-3 text-white hover:text-orange-400 font-medium text-sm transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              bUV
            </Link>
            <Link
              to="/ueber-uns"
              className="block py-3 text-white hover:text-orange-400 font-medium text-sm transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              Über uns
            </Link>
            <Link
              to="/kontakt"
              className="block py-3 text-white hover:text-orange-400 font-medium text-sm transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
            
            <div className="pt-4">
              <button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-sm font-medium transition-colors duration-200"
              onClick={() => {
                  window.open(APP_CONFIG.LOGIN_PORTAL_URL, '_blank');
                  setIsMenuOpen(false);
                }}
              >
                Login Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;