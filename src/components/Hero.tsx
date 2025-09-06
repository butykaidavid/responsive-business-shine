
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Shield, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-construction.jpg";
import heroBg from "@/assets/european-house-insulation.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center pt-12 sm:pt-16 md:pt-20 lg:pt-24 scroll-mt-24 md:scroll-mt-28"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Strong green gradient overlay to match original look */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background"></div>
      {/* Additional subtle overlay to let just a hint of background show */}
      <div className="absolute inset-0 bg-background/85"></div>

      <div className="container mx-auto px-4 relative z-10 mt-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-4 md:space-y-6 animate-fade-in-up">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-2">
              <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary px-3 py-1 md:px-4 md:py-2 hover:scale-105 transition-transform text-xs md:text-sm">
                <Star className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 fill-current" />
                5.0 ⭐ Értékelés
              </Badge>
              <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700 px-3 py-1 md:px-4 md:py-2 hover:scale-105 transition-transform text-xs md:text-sm">
                <Shield className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                15+ Év Tapasztalat
              </Badge>
              <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700 px-3 py-1 md:px-4 md:py-2 hover:scale-105 transition-transform text-xs md:text-sm">
                <Users className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                200+ Ügyfél
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="mt-3 md:mt-4 lg:mt-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
                <span className="bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent animate-gradient">
                  Álmai Otthona
                </span>
                <br />
                <span className="text-foreground">
                  Vár Önre! 🏠✨
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                <strong className="text-primary">Professzionális építőipari szolgáltatások</strong> lakások és házak teljes körű felújításához.
                <span className="block mt-2 md:mt-3 text-base md:text-lg">
                  🎯 <strong>Ingyenes felmérés</strong> • 
                  ⚡ <strong>Gyors kezdés</strong> • 
                  🏆 <strong>Garantált minőség</strong>
                </span>
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 my-4 md:my-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-primary mb-1 md:mb-2" />
                <h3 className="font-bold text-xs md:text-sm text-foreground">Pontos Határidő</h3>
                <p className="text-xs text-muted-foreground">Minden projektet időben</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary mb-1 md:mb-2" />
                <h3 className="font-bold text-xs md:text-sm text-foreground">Garancia</h3>
                <p className="text-xs text-muted-foreground">Hosszú távú védelem</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Star className="h-6 w-6 md:h-8 md:w-8 text-primary mb-1 md:mb-2" />
                <h3 className="font-bold text-xs md:text-sm text-foreground">Prémium Anyagok</h3>
                <p className="text-xs text-muted-foreground">Csak a legjobb minőség</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-3">
              <Link to={{ pathname: "/", hash: "#contact" }}>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="group text-base md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-2xl hover:shadow-glow transition-all duration-500 w-full sm:w-auto"
                >
                  🎯 Ingyenes Felmérés
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+36306616016">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  📞 06 30/661 6016
                </Button>
              </a>
            </div>

            {/* Social Proof */}
            <div className="pt-4 border-t border-primary/10 mb-4 sm:mb-6">
              <p className="text-sm text-muted-foreground mb-3">
                <strong>Legutóbbi ügyfeleinktől:</strong>
              </p>
              <div className="space-y-2">
                <p className="text-sm italic text-muted-foreground">
                  💬 "Pontosan határidőre készültek el, gyönyörű lett a lakásunk!" - Kovács Anna
                </p>
                <p className="text-sm italic text-muted-foreground">
                  💬 "Professzionális csapat, csak ajánlani tudom!" - Nagy Péter
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70"></div>
              <img
                src={heroImage}
                alt="Professzionális építőipari szolgáltatások"
                className="relative rounded-3xl shadow-2xl w-full max-w-lg mx-auto group-hover:scale-105 transition-all duration-700 hover:shadow-glow"
              />
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-xs text-muted-foreground">Év Tapasztalat</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-xs text-muted-foreground">Elégedett Ügyfél</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
