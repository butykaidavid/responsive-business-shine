import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-lg font-bold text-xl">
                Bau
              </div>
              <span className="text-xl font-bold">hub</span>
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
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {service}
                  </a>
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
                  <p className="text-gray-300">Budapest és környéke</p>
                  <p className="text-sm text-gray-400">50 km-es körzetben</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Hétfő - Péntek</p>
                  <p className="text-sm text-gray-400">8:00 - 18:00</p>
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
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <Button variant="cta" size="sm" className="w-full">
                Ingyenes ajánlat
              </Button>
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
                Készítette: <span className="text-primary font-medium">Professzionális webfejlesztés</span>
              </p>
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