import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Euro, 
  Clock, 
  Star,
  ArrowRight,
  Home,
  Shield,
  Paintbrush,
  Hammer,
  Building
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Lakás Teljes Felújítása",
      location: "Miskolc, Belváros",
      service: "Teljes felújítás",
      duration: "6 hét",
      size: "75 m²",
      budget: "4.2M Ft",
      date: "2024.03",
      rating: 5,
      client: "Kovács család",
      description: "Egy 1970-es évekből származó panellakás komplett felújítása modern dizájnnal. A projekt során teljes elektromos felújítás, vizes blokkok átalakítása, lakótér újragondolása történt.",
      beforeImage: "/images/projects/lakás-before-1.jpg",
      afterImage: "/images/projects/lakás-after-1.jpg",
      features: [
        "Teljes elektromos rendszer felújítás",
        "Vizes blokkok modernizálása", 
        "Nyitott térrendszer kialakítása",
        "Energiahatékony nyílászárók",
        "Modern burkolatok és festés",
        "Beépített bútorok tervezése"
      ],
      timeline: [
        { phase: "Tervezés és engedélyezés", duration: "1 hét" },
        { phase: "Bontási munkák", duration: "1 hét" },
        { phase: "Gépészeti munkák", duration: "2 hét" },
        { phase: "Burkolás és festés", duration: "1.5 hét" },
        { phase: "Befejező munkák", duration: "0.5 hét" }
      ],
      icon: Home,
      highlight: "Legnépszerűbb"
    },
    {
      id: 2,
      title: "Családi Ház Homlokzat Szigetelése",
      location: "Kazincbarcika, Lakótelep",
      service: "Homlokzat szigetelés",
      duration: "3 hét",
      size: "180 m²",
      budget: "1.8M Ft",
      date: "2024.02",
      rating: 5,
      client: "Nagy család",
      description: "Kétszintes családi ház komplett homlokzat szigetelése ETICS rendszerrel. 15 cm vastag hőszigetelés, új színezés, párkányok felújítása.",
      beforeImage: "/images/projects/homlokzat-before-2.jpg",
      afterImage: "/images/projects/homlokzat-after-2.jpg",
      features: [
        "15 cm vastag EPS szigetelés",
        "Teljes ETICS rendszer",
        "Ablakpárkányok felújítása",
        "Színes vakolat rendszer",
        "Energetikai tanúsítvány",
        "15 év garancia"
      ],
      timeline: [
        { phase: "Homlokzat előkészítése", duration: "3 nap" },
        { phase: "Szigetelőanyag felragasztása", duration: "1 hét" },
        { phase: "Hálózás és alapozás", duration: "5 nap" },
        { phase: "Díszítővakolat készítése", duration: "1 hét" }
      ],
      icon: Shield,
      highlight: "Energiahatékony"
    },
    {
      id: 3,
      title: "Fürdőszoba Komplett Felújítása",
      location: "Ózd, Centrum",
      service: "Fürdőszoba felújítás",
      duration: "2 hét",
      size: "8 m²",
      budget: "900K Ft",
      date: "2024.04",
      rating: 5,
      client: "Szabó család", 
      description: "Régi fürdőszoba teljes átalakítása modern, funkcionális térré. Vízhatlan burkolás, új szaniterek, led világítás, minimál dizájn.",
      beforeImage: "/images/projects/fürdő-before-3.jpg",
      afterImage: "/images/projects/fürdő-after-3.jpg",
      features: [
        "Vízhatlan burkolás rendszer",
        "Modern szaniter termékek",
        "LED világítástechnika",
        "Padlófűtés rendszer",
        "Zuhanykabinok beépítése",
        "Minimál dizájn megoldások"
      ],
      timeline: [
        { phase: "Bontás és előkészítés", duration: "2 nap" },
        { phase: "Vizes és elektromos", duration: "4 nap" },
        { phase: "Burkolási munkák", duration: "5 nap" },
        { phase: "Szaniterek és befejezés", duration: "3 nap" }
      ],
      icon: Paintbrush,
      highlight: "Vízhatlan"
    },
    {
      id: 4,
      title: "Iroda Gipszkarton Rendszerek",
      location: "Tiszaújváros, Ipari Park",
      service: "Gipszkartonozás",
      duration: "2 hét",
      size: "120 m²",
      budget: "650K Ft",
      date: "2024.01",
      rating: 5,
      client: "TechFirm Kft.",
      description: "Modern irodatér kialakítása gipszkarton válaszfalakkal és álmennyezettel. Akusztikai megoldások, modern világítástechnika integrálása.",
      beforeImage: "/images/projects/iroda-before-4.jpg", 
      afterImage: "/images/projects/iroda-after-4.jpg",
      features: [
        "Akusztikai gipszkarton rendszer",
        "Álmennyezetek LED világítással",
        "Válaszfalak üvegbetétekkel",
        "Kábelvezetési megoldások",
        "Tűzgátló kivitelezés",
        "Precíz felületek"
      ],
      timeline: [
        { phase: "Tervezés és anyagelőkészítés", duration: "2 nap" },
        { phase: "Vázszerkezet építése", duration: "4 nap" },
        { phase: "Gipszkarton fedés", duration: "4 nap" },
        { phase: "Fugázás és festés", duration: "4 nap" }
      ],
      icon: Hammer,
      highlight: "Akusztikai"
    },
    {
      id: 5,
      title: "Vendéglő Komplett Átalakítása",
      location: "Sárospatak, Főtér",
      service: "Teljes felújítás",
      duration: "8 hét",
      size: "200 m²",
      budget: "8.5M Ft",
      date: "2023.11",
      rating: 5,
      client: "Borvendéglő Bt.",
      description: "Hagyományos vendéglő modern átalakítása, megtartva a hagyományos hangulatot. Konyha modernizálás, belső terek átrendezése, terasz kialakítása.",
      beforeImage: "/images/projects/vendégló-before-5.jpg",
      afterImage: "/images/projects/vendégló-after-5.jpg",
      features: [
        "Profi konyhatechnika beépítés",
        "Hagyományos stílus megőrzése",
        "Akadálymentes megközelítés",
        "Korszerű világítástechnika",
        "Terasz fedett kialakítása",
        "HACCP megfelelőség"
      ],
      timeline: [
        { phase: "Engedélyezés és tervezés", duration: "2 hét" },
        { phase: "Bontás és előkészítés", duration: "1 hét" },
        { phase: "Gépészeti munkák", duration: "2 hét" },
        { phase: "Burkolás és asztalosmunkák", duration: "2 hét" },
        { phase: "Befejező és berendezési munkák", duration: "1 hét" }
      ],
      icon: Building,
      highlight: "Vendéglátó egység"
    },
    {
      id: 6,
      title: "Családi Ház Tetőfelújítása",
      location: "Mezőkövesd, Külváros",
      service: "Tetőfelújítás",
      duration: "4 hét",
      size: "140 m²",
      budget: "2.3M Ft",
      date: "2024.05",
      rating: 5,
      client: "Tóth család",
      description: "40 éves tetőszerkezet teljes felújítása, új cserépfedés, tetőtér hőszigetelés, új ereszcsatorna rendszer kiépítése.",
      beforeImage: "/images/projects/tetó-before-6.jpg",
      afterImage: "/images/projects/tetó-after-6.jpg",
      features: [
        "Szerkezeti elemek megerősítése",
        "Bramac Protector tetőcserép",
        "20 cm tetőtér hőszigetelés",
        "Új ereszcsatorna rendszer",
        "Gépészeti átvezetések",
        "10 év garancia"
      ],
      timeline: [
        { phase: "Régi fedés bontása", duration: "3 nap" },
        { phase: "Szerkezet ellenőrzése, javítása", duration: "1 hét" },
        { phase: "Hőszigetelés és fóliázás", duration: "1 hét" },
        { phase: "Új fedés és kiegészítők", duration: "1.5 hét" },
        { phase: "Ereszcsatorna és befejezés", duration: "2 nap" }
      ],
      icon: Home,
      highlight: "Tetőfelújítás"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float opacity-70"></div>
          <div className="absolute bottom-32 right-32 w-80 h-80 bg-primary-light/15 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent">
                Megvalósított Projektjeink
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <strong className="text-primary">200+ sikeres projekt</strong> áll mögöttünk! 
              Tekintse meg legszebb munkáinkat és győződjön meg szakértelmünkről.
              <span className="block mt-3 text-lg">
                🏆 <strong>Kiemelkedő minőség</strong> • 
                ⚡ <strong>Pontos határidők</strong> • 
                🎯 <strong>Elégedett ügyfelek</strong>
              </span>
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "200+", label: "Befejezett Projekt", icon: Home },
              { number: "15+", label: "Év Tapasztalat", icon: Star },
              { number: "98%", label: "Elégedett Ügyfél", icon: Shield },
              { number: "30+", label: "Folyamatban", icon: Clock }
            ].map((stat, index) => (
              <Card key={index} className="text-center bg-background/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-background/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-primary/20 rounded-3xl relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Highlight Badge */}
                {project.highlight && (
                  <div className="absolute top-6 right-6 z-10">
                    <Badge className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                      {project.highlight}
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-md group-hover:shadow-xl">
                      <project.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight mb-2">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{project.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center bg-primary/5 rounded-lg p-3">
                      <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-sm font-bold text-foreground">{project.duration}</div>
                      <div className="text-xs text-muted-foreground">Időtartam</div>
                    </div>
                    <div className="text-center bg-primary/5 rounded-lg p-3">
                      <Home className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-sm font-bold text-foreground">{project.size}</div>
                      <div className="text-xs text-muted-foreground">Terület</div>
                    </div>
                    <div className="text-center bg-primary/5 rounded-lg p-3">
                      <Euro className="h-5 w-5 text-primary mx-auto mb-1" />
                      <div className="text-sm font-bold text-foreground">{project.budget}</div>
                      <div className="text-xs text-muted-foreground">Költség</div>
                    </div>
                    <div className="text-center bg-primary/5 rounded-lg p-3">
                      <Star className="h-5 w-5 text-warning mx-auto mb-1" />
                      <div className="text-sm font-bold text-foreground">{project.rating}.0</div>
                      <div className="text-xs text-muted-foreground">Értékelés</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-bold text-foreground mb-3">Főbb jellemzők:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline Preview */}
                  <div className="mb-6">
                    <h4 className="font-bold text-foreground mb-3">Ütemezés:</h4>
                    <div className="space-y-2">
                      {project.timeline.slice(0, 3).map((phase, phaseIndex) => (
                        <div key={phaseIndex} className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">{phase.phase}</span>
                          <span className="text-primary font-medium">{phase.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Ügyfél:</p>
                        <p className="font-bold text-foreground">{project.client}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-warning fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex space-x-3">
                    <a href="#contact" className="flex-1">
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        Hasonló Projekt
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                    <a href="tel:+36306616016">
                      <Button variant="cta" size="sm">
                        📞 Megbeszélés
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20 animate-scale-in">
            <div className="bg-gradient-hero text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden hover:shadow-glow transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  🚀 Következő Projekt az Öné lehet!
                </h3>
                <p className="text-xl opacity-95 mb-8 max-w-3xl mx-auto leading-relaxed">
                  🎯 <strong>Ingyenes helyszíni felmérés</strong> és részletes árajánlat<br/>
                  🏆 <strong>Referenciáinkkal igazolt minőség</strong> - 200+ sikeres projekt<br/>
                  ⚡ <strong>Gyors projekt indítás</strong> - akár már 1 héten belül<br/>
                  💰 <strong>Korrekt, átlátható árazás</strong> - meglepetések nélkül
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="#contact">
                    <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 shadow-lg text-lg px-8 py-4">
                      🎯 Projekt Indítása
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </a>
                  <a href="tel:+36306616016">
                    <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 text-lg px-8 py-4">
                      📞 Konzultáció
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;