import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-0.5">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-lg font-bold text-xl">
                Bau
              </div>
              <span className="text-xl font-bold">Hub</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professzionális építőipari szolgáltatások lakások és házak felújításához. 
              15+ év tapasztalat, megbízható munkavégzés.
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>
              <span className="text-sm text-gray-300">5.0 • 200+ elégedett ügyfél</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Szolgáltatások</h3>
            <ul className="space-y-2">
              {[
                "Lakás és ház felújítás",
                "Szigetelés",
                "Festés, glettelés",
                "Gipszkartonozás",
                "Kőműves munkák",
                "Nyílászáró csere",
                "Burkolás",
                "Könnyűszerkezetes építés"
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    to={{ pathname: "/", hash: "#services" }}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Elérhetőségek</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+36306616016" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    06 30/661 6016
                  </a>
                  <p className="text-sm text-gray-400">Hétfő-Péntek 8:00-18:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:info@bauhub.hu" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    info@bauhub.hu
                  </a>
                  <p className="text-sm text-gray-400">24 órán belül válaszolunk</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">Borsod-Abaúj-Zemplén Vármegye</p>
                  <p className="text-sm text-gray-400">Teljes területen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & CTA */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Gyors menü</h3>
            <ul className="space-y-2">
              {[
                { label: "Főoldal", href: "#home" },
                { label: "Szolgáltatások", href: "#services" },
                { label: "Referenciák", href: "#gallery" },
                { label: "Kapcsolat", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={{ pathname: "/", hash: link.href }}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <Link to={{ pathname: "/", hash: "#contact" }}>
                <Button variant="cta" size="sm" className="w-full">
                  Ingyenes ajánlat
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>© {currentYear} BauHub. Minden jog fenntartva.</p>
              <p className="mt-1">
                Tartalmi hibák előfordulhatnak, az ebből okozott károkért felelősséget nem vállalunk.
              </p>
              <div className="mt-2 flex items-center justify-center space-x-1.5 md:justify-start">
                <span className="text-sm text-gray-400">Made with</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="h-5 w-5 text-red-500 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)] animate-heartbeat"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span className="text-sm text-gray-400">by</span>
                <a 
                  href="https://codivo.hu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-light text-base text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Codivo<span className="text-warning">{`}`}</span> Studio
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Adatvédelem</a>
              <a href="#" className="hover:text-white transition-colors">ÁSZF</a>
              <a href="#" className="hover:text-white transition-colors">Impresszum</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

