import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-gray-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="BauHub építőipari szolgáltatások"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground font-medium">
                5.0 értékelés • 200+ elégedett ügyfél
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Az otthonod
              <span className="text-primary block">
                új színt emelük
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Professzionális építőipari szolgáltatások lakások és házak felújításához. 
              Minőségi munkavégzés, megbízható határidők, versenyképes árak.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Ingyenes helyszíni felmérés",
                "Garanciális kötelezettség",
                "Gyors és tiszta munkavégzés",
                "Versenyképes árak"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Ingyenes ajánlat
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Szolgáltatások
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-muted-foreground mb-2">Hívjon most:</p>
              <a 
                href="tel:+36306616016" 
                className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
              >
                06 30/661 6016
              </a>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative animate-slide-up">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="relative bg-card rounded-2xl p-8 shadow-xl border">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Miért válasszon minket?
              </h3>
              
              <div className="space-y-4">
                {[
                  { number: "15+", label: "Év tapasztalat" },
                  { number: "200+", label: "Befejezett projekt" },
                  { number: "100%", label: "Elégedett ügyfelek" },
                  { number: "24h", label: "Gyors válaszidő" }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <span className="text-muted-foreground font-medium">{stat.label}</span>
                    <span className="text-2xl font-bold text-primary">{stat.number}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;