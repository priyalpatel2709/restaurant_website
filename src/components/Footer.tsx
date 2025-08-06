import { footerContent } from "@/const/data/footerContent";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const {
    restaurantName,
    tagline,
    quickLinks,
    contactInfo,
    madeWith,
    copyright,
  } = footerContent;

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-hero text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Restaurant Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              {restaurantName}
            </h3>
            <p className="text-sm opacity-90 leading-relaxed">{tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(link.href)}
                  className="block text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm opacity-90">
              {contactInfo.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.email}</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90 flex items-center justify-center gap-2">
            {madeWith.split("❤️")[0]}
            <Heart className="h-4 w-4 text-red-400" />
            {madeWith.split("❤️")[1]}
          </p>
          <p className="text-xs opacity-75 mt-2">
            © {currentYear} {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
