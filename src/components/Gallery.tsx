
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, ExternalLink, X } from "lucide-react";
import { Link } from "react-router-dom";
import renovationInterior from "@/assets/renovation-interior.jpg";
import exteriorRenovation from "@/assets/exterior-renovation.jpg";
import toolsMaterials from "@/assets/tools-materials.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  const categories = [
    { id: "all", label: "Összes munka" },
    { id: "interior", label: "Beltéri munkák" },
    { id: "exterior", label: "Kültéri munkák" },
    { id: "renovation", label: "Felújítások" }
  ];

  const projects = [
    {
      id: 1,
      title: "Modern lakás teljes felújítása",
      category: "interior",
      image: renovationInterior,
      description: "80 m² lakás komplett felújítása modern stílusban. Teljes körű gipszkartonozás, festés és burkolás.",
      tags: ["Gipszkarton", "Festés", "Burkolás"],
      duration: "3 hét",
      details: "Luxus kategóriás anyagokkal, minden helyiség teljes felújítása"
    },
    {
      id: 2,
      title: "Családi ház homlokzat felújítása",
      category: "exterior",
      image: exteriorRenovation,
      description: "Teljes homlokzat szigetelés és festés új színvilággal. Modern technológiával és prémium anyagokkal.",
      tags: ["Szigetelés", "Festés", "Homlokzat"],
      duration: "2 hét",
      details: "Energiahatékony megoldással, 15 év garanciával"
    },
    {
      id: 3,
      title: "Konyha és fürdőszoba teljes felújítás",
      category: "renovation",
      image: toolsMaterials,
      description: "Komplett konyha és fürdőszoba átalakítása. Vízvezeték, elektromos és burkolási munkák egyaránt.",
      tags: ["Burkolás", "Gépészet", "Asztalos"],
      duration: "4 hét",
      details: "Vízhatlan kivitelezés, designer csempék, egyedi megoldások"
    },
    {
      id: 4,
      title: "Tetőtér beépítés lakótérré",
      category: "interior",
      image: renovationInterior,
      description: "Használaton kívüli tetőtér lakótérré alakítása. Több mint 40 m² hasznos tér nyerése.",
      tags: ["Gipszkarton", "Szigetelés", "Nyílászáró"],
      duration: "5 hét",
      details: "Teljes hőszigetelés, új ablakokkal és padlófűtéssel"
    },
    {
      id: 5,
      title: "Modern kerítés és terasz építés",
      category: "exterior",
      image: exteriorRenovation,
      description: "Stílusos kerítés és járda építése természetes kövekkel. Tartós és esztétikus megoldás.",
      tags: ["Kőműves", "Díszítés", "Burkolás"],
      duration: "2 hét",
      details: "Természetes kő burkolat, LED világítással és automata kapuval"
    },
    {
      id: 6,
      title: "Könnyűszerkezetes garázs építés",
      category: "exterior",
      image: toolsMaterials,
      description: "Modern könnyűszerkezetes garázs építése. Gyorsan elkészül, költséghatékony megoldás.",
      tags: ["Szerkezet", "Tető", "Kapuk"],
      duration: "3 hét",
      details: "Acélszerkezettel, hőszigetelve, elektromos bekötéssel"
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openImageModal = (project: typeof projects[0]) => {
    setSelectedImage({
      src: project.image,
      title: project.title,
      description: project.details
    });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-background relative overflow-hidden scroll-mt-24 md:scroll-mt-28">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent">
            Befejezett Projektjeink
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Minden projekt egy történet. Tekintse meg, hogyan alakítjuk át az elképzeléseket 
            valósággá a legmagasabb minőségi színvonalon. <span className="text-primary font-semibold">200+ elégedett ügyfél</span> 
            már tapasztalta szakértelmünket.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all duration-300 hover:scale-105 px-6 py-3 text-lg font-medium"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-primary/20 animate-fade-in-up glass rounded-2xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                  onClick={() => openImageModal(project)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex space-x-4">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-foreground backdrop-blur-sm"
                      onClick={() => openImageModal(project)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-foreground backdrop-blur-sm"
                      onClick={() => openImageModal(project)}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary/90 text-primary-foreground font-semibold">
                    {project.duration}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                    >
                      {tag}
                    </Badge>
                  ))}
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
                ✨ Tetszik amit lát? Kezdjük el KÖZÖSEN! ✨
              </h3>
              <p className="text-xl opacity-95 mb-8 max-w-3xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '200ms' }}>
                🎯 <strong>Ingyenes helyszíni felmérés</strong> és részletes árajánlat<br/>
                🏆 <strong>15+ év tapasztalat</strong> a legmagasabb minőségben<br/>
                ⚡ <strong>Gyors kezdés</strong> - akár 1 héten belül indulunk!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in" style={{ animationDelay: '400ms' }}>
                <Link to={{ pathname: "/", hash: "#contact" }}>
                  <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 shadow-lg text-lg px-8 py-4">
                    🎯 Kérek Ajánlatot
                  </Button>
                </Link>
                <Link to={{ pathname: "/", hash: "#gallery" }}>
                  <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 text-lg px-8 py-4">
                    📋 További Munkák
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl max-h-[90vh] animate-scale-in">
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/20 border-white/30 text-white hover:bg-white hover:text-foreground backdrop-blur-sm"
              onClick={closeImageModal}
            >
              <X className="h-4 w-4" />
            </Button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-white/90">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
