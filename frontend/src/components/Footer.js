import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16">
      {/* Apple-like Container */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="md:col-span-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
              <Link to="/" className="block mb-6 md:mb-0">
                <div className="text-2xl font-semibold text-gray-900 tracking-tight">
                  ACENCIA
                </div>
                <div className="text-sm text-gray-500 font-medium tracking-wider uppercase mt-1">
                  Wir machen bAV einfach
                </div>
              </Link>
              
              {/* Apple-like Social Media Buttons */}
              <div className="flex items-center space-x-3">
                {/* LinkedIn Button */}
                <button
                  onClick={() => window.open('https://www.linkedin.com/company/acencia/', '_blank')}
                  className="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-orange-100 text-gray-600 hover:text-orange-600 rounded-lg transition-all duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
                    />
                  </svg>
                </button>

                {/* YouTube Button */}
                <button
                  onClick={() => window.open('https://www.youtube.com/@ACENCIAde', '_blank')}
                  className="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-orange-100 text-gray-600 hover:text-orange-600 rounded-lg transition-all duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  aria-label="YouTube"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Apple-like Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-500 font-normal">
            © 2025 ACENCIA GmbH. Alle Rechte vorbehalten.
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
            <Link to="/datenschutz" className="text-sm text-gray-500 hover:text-orange-600 transition-colors duration-150 font-normal">
              Datenschutzerklärung
            </Link>
            <Link to="/impressum" className="text-sm text-gray-500 hover:text-orange-600 transition-colors duration-150 font-normal">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;