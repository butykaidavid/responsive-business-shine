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
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Lakás és ház felújítás",
      description: "Teljes körű felújítási szolgáltatások lakások és házak számára, modern megoldásokkal.",
      features: ["Teljes körű tervezés", "Minőségi kivitelezés", "Határidő betartása"]
    },
    {
      icon: Shield,
      title: "Szigetelés",
      description: "Homlokzat, aljzat és padlásszigetelés energiahatékony megoldásokkal.",
      features: ["Hőszigetelés", "Vízszigetelés", "Hangcsillapítás"]
    },
    {
      icon: Paintbrush,
      title: "Festés, glettelés",
      description: "Professzionális festési és glettelési munkák beltéri és kültéri felületekre.",
      features: ["Színtanácsadás", "Minőségi festékek", "Tiszta munkavégzés"]
    },
    {
      icon: Hammer,
      title: "Gipszkartonozás",
      description: "Gipszkarton rendszerek építése, válaszfalak, álmennyezetek kialakítása.",
      features: ["Gyors kivitelezés", "Precíz munka", "Dizájn megoldások"]
    },
    {
      icon: Wrench,
      title: "Kőműves munkák",
      description: "Falazás, burkolás, javítási munkák szakszerű kivitelezésben.",
      features: ["Tapasztalt mesterek", "Tartós megoldások", "Pontos kivitelezés"]
    },
    {
      icon: DoorOpen,
      title: "Nyílászáró csere",
      description: "Ablakok és ajtók cseréje, beépítése energiahatékony megoldásokkal.",
      features: ["Energiahatékonyság", "Szakszerű beépítés", "Garancia"]
    },
    {
      icon: Thermometer,
      title: "Hideg, meleg burkolás",
      description: "Csempe, járólap és egyéb burkolóanyagok szakszerű fektetése.",
      features: ["Vízhatlan kivitelezés", "Esztétikus megjelenés", "Tartósság"]
    },
    {
      icon: Building,
      title: "Könnyűszerkezetes építés",
      description: "Garázsok, filagóriák, melléképületek építése modern technológiával.",
      features: ["Gyors építés", "Költséghatékonyság", "Egyedi tervezés"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Szolgáltatásaink
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Teljes körű építőipari szolgáltatások egy helyen. Tapasztalt szakembereink 
            garantálják a minőségi munkavégzést és a pontos határidő betartását.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-background/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-primary/20 hover-lift glass animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-md group-hover:shadow-lg">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm group">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in-up">
                Kezdjük el közösen a projektjét!
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Ingyenes helyszíni felmérés és árajánlat. Tapasztalt szakembereink 
                segítenek megvalósítani álmai otthonát.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '400ms' }}>
              <a href="#contact">
                <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 shadow-lg">
                  Ingyenes felmérés
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </a>
              <a href="tel:+36306616016">
                <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105">
                  Telefonos egyeztetés
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