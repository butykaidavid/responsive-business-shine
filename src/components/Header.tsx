import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: "Főoldal", href: "#home", isRoute: false },
    { label: "Szolgáltatások", href: "#services", isRoute: false },
    { label: "Kalkulátor", href: "#calculator", isRoute: false },
    { label: "Projektjeink", href: "/projektek", isRoute: true },
    { label: "Galéria", href: "#gallery", isRoute: false },
    { label: "Blog", href: "/blog", isRoute: true },
    { label: "Kapcsolat", href: "#contact", isRoute: false },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-xl shadow-lg z-50 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-0.5 group cursor-pointer">
            <div className="bg-gradient-primary text-primary-foreground px-3 py-1.5 rounded-xl font-bold text-xl shadow-lg group-hover:shadow-primary-lg transition-all duration-300 transform group-hover:scale-105">
              Bau
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Hub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="relative text-foreground hover:text-primary transition-all duration-300 font-medium py-2 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative text-foreground hover:text-primary transition-all duration-300 font-medium py-2 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+36306616016" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              <Phone className="h-4 w-4" />
              <span>06 30/661 6016</span>
            </a>
            <a href="#contact">
              <Button variant="cta" size="sm" className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Ajánlat kérés
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 transform group-hover:scale-110 transition-transform duration-300" />
            ) : (
              <Menu className="h-6 w-6 transform group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in-up glass rounded-b-lg mx-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2 transform hover:translate-x-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2 transform hover:translate-x-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <div className="pt-4 border-t flex flex-col space-y-3">
                <a href="tel:+36306616016" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>06 30/661 6016</span>
                </a>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>info@bauhub.hu</span>
                </div>
                <a href="#contact">
                  <Button variant="cta" size="sm" className="w-fit">
                    Ajánlat kérés
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;