import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden mesh-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-primary opacity-5 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>
      {/* Hero Image with Parallax Effect */}
      <div className="absolute inset-0 z-10 opacity-8">
        <img
          src={heroImage}
          alt="BauHub építőipari szolgáltatások"
          className="w-full h-full object-cover transform scale-110 animate-fade-in"
          style={{ transform: 'scale(1.1) translateZ(0)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in-up space-y-8" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center space-x-2 mb-6 animate-scale-in" style={{ animationDelay: '600ms' }}>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-warning text-warning transform hover:scale-125 transition-transform duration-300" style={{ animationDelay: `${800 + i * 100}ms` }} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground font-medium">
                5.0 értékelés • 200+ elégedett ügyfél
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up" style={{ animationDelay: '900ms' }}>
              Az otthonod
              <span className="text-transparent bg-gradient-primary bg-clip-text block animate-shimmer" style={{ 
                backgroundSize: '200% 100%',
                animationDelay: '1200ms'
              }}>
                új színt emelük
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: '1500ms' }}>
              Professzionális építőipari szolgáltatások lakások és házak felújításához. 
              Minőségi munkavégzés, megbízható határidők, versenyképes árak.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '1800ms' }}>
              {[
                "Ingyenes helyszíni felmérés",
                "Garanciális kötelezettség",
                "Gyors és tiszta munkavégzés",
                "Versenyképes árak"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 group hover-lift" style={{ animationDelay: `${2100 + index * 200}ms` }}>
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in" style={{ animationDelay: '2900ms' }}>
              <a href="#contact">
                <Button variant="hero" size="lg" className="group shadow-2xl hover:shadow-glow transform hover:scale-105 transition-all duration-500">
                  Ingyenes ajánlat
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" size="lg" className="glass hover:bg-primary hover:text-primary-foreground border-primary/30 hover:border-primary transition-all duration-300">
                  Szolgáltatások
                </Button>
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-primary/20 animate-fade-in-up" style={{ animationDelay: '3200ms' }}>
              <p className="text-sm text-muted-foreground mb-2">Hívjon most:</p>
              <a 
                href="tel:+36306616016" 
                className="text-2xl font-bold text-primary hover:text-primary-dark transition-all duration-300 transform hover:scale-105 inline-block hover:animate-pulse-glow"
              >
                06 30/661 6016
              </a>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
            
            <div className="relative glass rounded-3xl p-8 shadow-glass hover:shadow-2xl transition-all duration-500 border border-primary/20 hover-lift backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-glass rounded-3xl"></div>
              <div className="relative z-10">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
                Miért válasszon minket?
              </h3>
              
              <div className="space-y-4">
                {[
                  { number: "15+", label: "Év tapasztalat" },
                  { number: "200+", label: "Befejezett projekt" },
                  { number: "100%", label: "Elégedett ügyfelek" },
                  { number: "24h", label: "Gyors válaszidő" }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-primary/10 last:border-b-0 group hover:bg-primary/5 rounded-lg px-3 transition-all duration-300" style={{ animationDelay: `${1500 + index * 200}ms` }}>
                    <span className="text-muted-foreground font-medium group-hover:text-primary transition-colors duration-300">{stat.label}</span>
                    <span className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">{stat.number}</span>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center hover:border-primary-light transition-colors duration-300 glass">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;