import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Restaurant Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Bella Vista</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Authentic Italian cuisine in the heart of Little Italy. 
              Experience the taste of tradition with every bite.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                Menu
              </button>
              <button 
                onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                Gallery
              </button>
              <button 
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                About Us
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>123 Via Roma Street</p>
              <p>Little Italy, NY 10012</p>
              <p>(555) 123-4567</p>
              <p>info@bellavista.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-400" /> for authentic Italian cuisine
          </p>
          <p className="text-xs opacity-75 mt-2">
            © {currentYear} Bella Vista Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;