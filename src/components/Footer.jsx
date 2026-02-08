import React from 'react';
import { Instagram, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif font-bold mb-4">
              AB <span className="text-brand-orange">Interiors</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Transforming spaces into personalized sanctuaries. 
              Serving Hyderabad with excellence in interior design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4 text-brand-orange">Explore</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4 text-brand-orange">Connect</h3>
            <div className="flex flex-col items-center md:items-end space-y-3 text-gray-400">
              <a href="tel:9059103403" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={16} /> 9059 103 403
              </a>
              <a href="mailto:abinteriors9@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} /> abinteriors9@gmail.com
              </a>
              <a href="https://instagram.com/abinteriors9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Instagram size={16} /> @abinteriors9
              </a>
              <a href="https://www.linkedin.com/in/abhilash-neela-77489516a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-900 text-center text-xs text-gray-600">
          <p>© {new Date().getFullYear()} AB Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
