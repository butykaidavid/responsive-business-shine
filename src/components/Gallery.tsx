import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, ExternalLink } from "lucide-react";
import renovationInterior from "@/assets/renovation-interior.jpg";
import exteriorRenovation from "@/assets/exterior-renovation.jpg";
import toolsMaterials from "@/assets/tools-materials.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

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
      description: "80 m² lakás komplett felújítása modern stílusban",
      tags: ["Gipszkarton", "Festés", "Burkolás"],
      duration: "3 hét"
    },
    {
      id: 2,
      title: "Családi ház homlokzat felújítása",
      category: "exterior",
      image: exteriorRenovation,
      description: "Teljes homlokzat szigetelés és festés új színvilággal",
      tags: ["Szigetelés", "Festés", "Homlokzat"],
      duration: "2 hét"
    },
    {
      id: 3,
      title: "Konyha és fürdőszoba felújítás",
      category: "renovation",
      image: toolsMaterials,
      description: "Komplett konyha és fürdőszoba átalakítása",
      tags: ["Burkolás", "Gépészet", "Asztalos"],
      duration: "4 hét"
    },
    {
      id: 4,
      title: "Tetőtér beépítés",
      category: "interior",
      image: renovationInterior,
      description: "Használaton kívüli tetőtér lakótérré alakítása",
      tags: ["Gipszkarton", "Szigetelés", "Nyílászáró"],
      duration: "5 hét"
    },
    {
      id: 5,
      title: "Kerítés és terasz építés",
      category: "exterior",
      image: exteriorRenovation,
      description: "Modern kerítés és járda építése",
      tags: ["Kőműves", "Díszítés", "Burkolás"],
      duration: "2 hét"
    },
    {
      id: 6,
      title: "Garázsépítés",
      category: "exterior",
      image: toolsMaterials,
      description: "Könnyűszerkezetes garázs építése",
      tags: ["Szerkezet", "Tető", "Kapuk"],
      duration: "3 hét"
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Referencia munkáink
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tekintse meg befejezett projektjeinket, amelyek tanúsítják 
            szakértelmünket és minőségi munkavégzésünket.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all duration-300"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-0 shadow-md"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                    <Button size="sm" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-foreground">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-foreground">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {project.duration}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
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
                      className="text-xs border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
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
        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Tetszik amit lát?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Lépjen kapcsolatba velünk, és kezdjük el közösen megtervezni 
              az Ön projektjét. Ingyenes konzultáció és árajánlat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Kérek ajánlatot
              </Button>
              <Button variant="outline" size="lg">
                További munkák
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;