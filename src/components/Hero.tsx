
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Shield, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import heroBg from "@/assets/exterior-renovation.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center pt-16 sm:pt-20 md:pt-24 lg:pt-28 scroll-mt-24 md:scroll-mt-28"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay for readability - more subtle background */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/55"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 animate-fade-in-up">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-2">
              <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary px-4 py-2 hover:scale-105 transition-transform">
                <Star className="h-4 w-4 mr-2 fill-current" />
                5.0 ⭐ Értékelés
              </Badge>
              <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700 px-4 py-2 hover:scale-105 transition-transform">
                <Shield className="h-4 w-4 mr-2" />
                15+ Év Tapasztalat
              </Badge>
              <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700 px-4 py-2 hover:scale-105 transition-transform">
                <Users className="h-4 w-4 mr-2" />
                200+ Ügyfél
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="mt-4 md:mt-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                <span className="bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent animate-gradient">
                  Álmai Otthona
                </span>
                <br />
                <span className="text-white">
                  Vár Önre! 🏠✨
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                <strong className="text-primary">Professzionális építőipari szolgáltatások</strong> lakások és házak teljes körű felújításához.
                <span className="block mt-3 text-lg">
                  🎯 <strong>Ingyenes felmérés</strong> • 
                  ⚡ <strong>Gyors kezdés</strong> • 
                  🏆 <strong>Garantált minőség</strong>
                </span>
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Clock className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-bold text-sm text-foreground">Pontos Határidő</h3>
                <p className="text-xs text-muted-foreground">Minden projektet időben</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Shield className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-bold text-sm text-foreground">Garancia</h3>
                <p className="text-xs text-muted-foreground">Hosszú távú védelem</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Star className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-bold text-sm text-foreground">Prémium Anyagok</h3>
                <p className="text-xs text-muted-foreground">Csak a legjobb minőség</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <a href="#contact">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="group text-lg px-8 py-4 shadow-2xl hover:shadow-glow transition-all duration-500"
                >
                  🎯 Ingyenes Felmérés
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="tel:+36306616016">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
                >
                  📞 06 30/661 6016
                </Button>
              </a>
            </div>

            {/* Social Proof */}
            <div className="pt-4 border-t border-white/20 mb-4 sm:mb-6">
              <p className="text-sm text-white/80 mb-3">
                <strong>Legutóbbi ügyfeleinktől:</strong>
              </p>
              <div className="space-y-2">
                <p className="text-sm italic text-white/70">
                  💬 "Pontosan határidőre készültek el, gyönyörű lett a lakásunk!" - Kovács Anna
                </p>
                <p className="text-sm italic text-white/70">
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
