
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Shield, 
  Paintbrush, 
  Hammer, 
  Wrench, 
  DoorOpen, 
  Thermometer,
  Building,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Lakás és ház felújítás",
      description: "Teljes körű felújítási szolgáltatások lakások és házak számára, modern megoldásokkal és prémium anyagokkal.",
      features: ["Teljes körű tervezés", "Minőségi kivitelezés", "Határidő betartása"],
      highlight: "Legnépszerűbb",
      price: "Már 2.5M Ft-tól"
    },
    {
      icon: Shield,
      title: "Homlokzat szigetelés",
      description: "Energiahatékony homlokzat, aljzat és padlásszigetelés 15 év garanciával. Akár 50% energia megtakarítás!",
      features: ["Hőszigetelés", "Vízszigetelés", "Hangcsillapítás"],
      highlight: "Energiahatékony",
      price: "200 Ft/m²-től"
    },
    {
      icon: Paintbrush,
      title: "Festés, glettelés",
      description: "Professzionális festési és glettelési munkák prémium festékekkel. Színtanácsadással és tiszta munkavégzéssel.",
      features: ["Színtanácsadás", "Minőségi festékek", "Tiszta munkavégzés"],
      highlight: "Gyors kivitelezés",
      price: "1500 Ft/m²-től"
    },
    {
      icon: Hammer,
      title: "Gipszkartonozás",
      description: "Modern gipszkarton rendszerek építése, álmennyezetek és válaszfalak tervezése és kivitelezése.",
      features: ["Gyors kivitelezés", "Precíz munka", "Dizájn megoldások"],
      highlight: "Precíz munka",
      price: "3500 Ft/m²-től"
    },
    {
      icon: Wrench,
      title: "Kőműves munkák",
      description: "Professzionális falazás, burkolás és javítási munkák. Tapasztalt mestereink garantálják a tartós megoldásokat.",
      features: ["Tapasztalt mesterek", "Tartós megoldások", "Pontos kivitelezés"],
      highlight: "Hagyományos technika",
      price: "Egyedi árajánlat"
    },
    {
      icon: DoorOpen,
      title: "Nyílászáró csere",
      description: "Energiahatékony ablakok és ajtók szakszerű beépítése. Akár 60% hőveszteség csökkentés garantáltan!",
      features: ["Energiahatékonyság", "Szakszerű beépítés", "Hosszú garancia"],
      highlight: "60% energiamegtakarítás",
      price: "45.000 Ft/db-tól"
    },
    {
      icon: Thermometer,
      title: "Hideg, meleg burkolás", 
      description: "Csempe, járólap és natural stone burkolóanyagok vízhatlan fektetése fürdőszobában és konyhában.",
      features: ["Vízhatlan kivitelezés", "Esztétikus megjelenés", "Hosszú élettartam"],
      highlight: "Vízhatlan garancia",
      price: "4500 Ft/m²-től"
    },
    {
      icon: Building,
      title: "Könnyűszerkezetes építés",
      description: "Modern garázsok, filagóriák és melléképületek gyors és költséghatékony építése acélszerkezettel.",
      features: ["Gyors építés", "Költséghatékonyság", "Egyedi tervezés"],
      highlight: "Gyors megoldás",
      price: "350.000 Ft/db-tól"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-background relative overflow-hidden scroll-mt-24 md:scroll-mt-28">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-mesh opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent">
            Szakértő Szolgáltatásaink
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <strong className="text-primary">Teljes körű építőipari szolgáltatások</strong> egy helyen! 
            Tapasztalt szakembereink garantálják a minőségi munkavégzést és a pontos határidő betartását.
            <br />
            <span className="text-lg mt-2 block">
              🏆 <strong>15+ év tapasztalat</strong> • 
              ⚡ <strong>Gyors kivitelezés</strong> • 
              🛡️ <strong>Garancia minden munkára</strong>
            </span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-background/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-primary/20 hover-lift glass animate-fade-in-up rounded-2xl relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold">
                    {service.highlight}
                  </span>
                </div>
              )}

              <CardHeader className="pb-4 relative">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-md group-hover:shadow-xl">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                  {service.title}
                </CardTitle>
                {/* Price */}
                <div className="text-primary font-bold text-sm mt-2">
                  {service.price}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-sm group">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-2">
                  <a href="#contact">
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      Ajánlat kérése
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-scale-in">
          <div className="bg-gradient-hero text-white rounded-3xl p-8 md:p-12 shadow-2xl glass relative overflow-hidden hover:shadow-glow transition-all duration-500">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
                🚀 Kezdjük el KÖZÖSEN a projektjét! 🚀
              </h3>
              <p className="text-xl opacity-95 mb-8 max-w-3xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '200ms' }}>
                🎯 <strong>Ingyenes helyszíni felmérés</strong> és részletes árajánlat minden szolgáltatásra<br/>
                🏆 <strong>15+ év tapasztalat</strong> - a legmagasabb minőségi színvonal garantálva<br/>
                ⚡ <strong>Gyors projekt indítás</strong> - akár már 1 héten belül elkezdhetjük!<br/>
                💰 <strong>Korrekt árak</strong> - minden költséget előre megbeszélünk
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in" style={{ animationDelay: '400ms' }}>
                <a href="#contact">
                  <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 shadow-lg text-lg px-8 py-4">
                    🎯 Ingyenes Felmérés
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </a>
                <a href="tel:+36306616016">
                  <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 text-lg px-8 py-4">
                    📞 Telefonos Egyeztetés
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
