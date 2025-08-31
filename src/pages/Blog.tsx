import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "ETICS homlokzati hőszigetelés 2024: Teljes útmutató a modern energiatakarékossághoz",
      excerpt: "Minden tudnivaló az ETICS (külső kompozit hőszigetelő) rendszerről, amely akár 50%-kal csökkentheti energiaköltségeit. Szakmai kivitelezési tippek és költségkalkuláció.",
      content: `Az ETICS (External Thermal Insulation Composite System) rendszer ma Európa vezető homlokzati hőszigetelési technológiája, amely forradalmasította az energiahatékony építkezést.

**Mi az ETICS rendszer?**

Az ETICS egy többrétegű hőszigetelő rendszer, amely a homlokzat külső felületére kerül. A rendszer alapja a hőszigetelő anyag (általában EPS, XPS vagy kőzetgyapot), amelyet speciális ragasztóval rögzítenek a falra, majd dűbelekkel mechanikusan rögzítenek.

**A rendszer felépítése:**
1. Alapozóréteg: Speciális ragasztó
2. Hőszigetelő réteg: 8-20 cm vastag szigetelőanyag  
3. Mechanikai rögzítés: Műanyag vagy fém dűbelek
4. Felvértezett alapozóréteg: Üvegszövet háló és alapozó
5. Díszítő vakolat: Színes és textúrált felületi réteg

**Energiahatékonysági előnyök:**
• Fűtési költség csökkentés: 40-60%-os energia megtakarítás lehetséges
• Hőhidak kiküszöbölése: Folyamatos szigetelőréteg a teljes homlokzaton
• Optimális belső komfort: Egyenletes belső hőmérséklet egész évben

**Költségkalkuláció 2024:**
- Közepes minőségű EPS rendszer: 8.000-10.500 Ft/m²
- Prémium kőzetgyapot rendszer: 10.500-13.500 Ft/m²

**Támogatási lehetőségek:**
- Otthonfelújítási támogatás: 3-6 millió Ft
- Energetikai korszerűsítési hitel: kamattámogatással
- CSOK Plus: családok számára kiegészítő támogatás`,
      category: "Hőszigetelés",
      author: "BauHub Szakértő",
      date: "2024-03-20",
      readTime: "12 perc"
    },
    {
      id: 2,
      title: "Fürdőszoba burkolás 2024: Trendek, anyagok és szakmai trükkök",
      excerpt: "Átfogó útmutató a modern fürdőszoba burkoláshoz. Legújabb trendek, anyagválasztás, vízhatlan megoldások és praktikus tanácsok.",
      content: `A fürdőszoba burkolás az egyik legkritikusabb építési feladat, amely ötvözi a funkcionalitást, esztétikumot és vízállóságot.

**2024-es burkolási trendek:**
1. Nagy méretű lapok (60x120 cm, 80x160 cm)
2. Természetes kő hatású lapok  
3. Hexagon (hatszög) alakú lapok
4. Természetes földszínek dominálnak

**Anyagok összehasonlítása:**
- Porcelán lapok: Vízfelvétel <0,5%, 3.500-15.000 Ft/m²
- Kerámialapok: Költséghatékony, 1.500-6.000 Ft/m²
- Természetes kő: Luxus megjelenés, 8.000-25.000 Ft/m²

**Vízhatlan kivitelezési technikák:**
• Folyékony vízszigetelés: Polimer alapú bevonatok
• Fólia vízszigetelés: PE vagy PVC fólia
• Szövetbetétes vízszigetelés: Üvegszövet erősítés

**Költségkalkuláció (5 m²):**
- Alapszintű felújítás: 190.000 Ft
- Közepes szintű: 275.000 Ft  
- Luxus felújítás: 425.000 Ft`,
      category: "Burkolás",
      author: "BauHub Szakértő",
      date: "2024-03-18",
      readTime: "15 perc"
    },
    {
      id: 3,
      title: "Tetőfelújítás 2024: Teljes útmutató a költségektől a kivitelezésig",
      excerpt: "Komprehenzív tetőfelújítási kalauz. Anyagválasztás, költségek, időzítés, engedélyezés és gyakorlati tanácsok.",
      content: `A tetőfelújítás az egyik legnagyobb beruházás egy ingatlan életében. 2024-ben új anyagok, technikák és támogatási lehetőségek állnak rendelkezésre.

**Fedőanyagok összehasonlítása:**
1. Kerámiacserép: 50-80 év élettartam, 2.800-4.500 Ft/m²
2. Betoncserép: 30-50 év, 1.800-3.200 Ft/m²
3. Fémlemez fedések: 25-40 év, 1.200-8.500 Ft/m²
4. Bitumenes zsindely: 20-30 év, 2.200-4.800 Ft/m²

**Költségkalkuláció 100 m²:**
- Alapszintű felújítás: 1.200.000 Ft
- Teljes körű (szigeteléssel): 2.400.000 Ft
- Energetikai korszerűsítés: 3.180.000 Ft

**Támogatások:**
- Otthonfelújítási támogatás: Maximum 6 millió Ft
- CSOK Plus kiegészítő: További 3 millió Ft családoknak`,
      category: "Tetőzet",
      author: "BauHub Szakértő", 
      date: "2024-03-15",
      readTime: "18 perc"
    },
    {
      id: 4,
      title: "Nyílászárócsere 2024: Energetikai korszerűsítés támogatásokkal",
      excerpt: "Részletes útmutató a modern nyílászárók kiválasztásához. Anyagok, energiahatékonyság, támogatások és telepítési folyamat.",
      content: `A nyílászárócsere az egyik leghatékonyabb energetikai beruházás, amely akár 40-60%-kal is csökkentheti a fűtési költségeket.

**Anyagok összehasonlítása:**
- PVC: Kiváló ár/érték, 45.000-140.000 Ft/m²
- Fa: Természetes megjelenés, 80.000-280.000 Ft/m²  
- Alumínium: Tartós, modern, 90.000-350.000 Ft/m²
- Fa-alumínium: Prémium megoldás, 180.000-280.000 Ft/m²

**Energetikai megtakarítás:**
- Régi ablak: 4,5-6,0 W/m²K, 9.000-12.000 Ft/m²/év
- Modern PVC: 1,0-1,4 W/m²K, 2.000-2.800 Ft/m²/év
- Megtakarítás: 75-80%

**Támogatások 2024:**
- Otthonfelújítási támogatás: 3-6 millió Ft
- CSOK Plus: Extra 3 millió Ft családoknak
- Zöld hitelek: 3-6% kedvezményes kamat`,
      category: "Nyílászárók",
      author: "BauHub Szakértő",
      date: "2024-03-12", 
      readTime: "16 perc"
    },
    {
      id: 5,
      title: "Gipszkarton rendszerek 2024: Válaszfalak, álmennyezetek és modern megoldások",
      excerpt: "Teljes körű gipszkartonozási útmutató. Rendszertípusok, költségek, kivitelezési technikák és kreatív megoldások.",
      content: `A gipszkarton technológia forradalmasította a modern építőipart. Gyors, tiszta és sokoldalú megoldásokat kínál.

**Rendszertípusok:**
1. Egyszeres vázas válaszfal: 75 mm, 3.500-4.500 Ft/m²
2. Dupla vázas rendszer: 150 mm, 5.500-7.500 Ft/m²
3. Álmennyezet közvetlen: 6-8 cm magasság, 2.800-3.800 Ft/m²
4. Kétszintű függesztés: 12-15 cm, 3.500-4.800 Ft/m²

**Gipszkarton típusok:**
- Standard GKB: Normál használat, 450-650 Ft/m²
- Vízálló GKBI: Fürdőszoba, 550-750 Ft/m²  
- Tűzálló GKF: Tűzvédelem, 650-950 Ft/m²
- Hangcsillapító GKA: Akusztika, 1.200-1.800 Ft/m²

**Speciális kialakítások:**
- Íves konstrukciók
- Többszintű mennyezetek  
- Rejtett világítás
- Titkos ajtók`,
      category: "Gipszkarton",
      author: "BauHub Szakértő",
      date: "2024-03-08",
      readTime: "14 perc"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              BauHub Blog
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Építőipari szakértelem, praktikus tanácsok és legfrissebb trendek. 
            Minden, amit tudnia kell az otthona felújításáról.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-gray max-w-none">
                    {post.content.split('\n').map((paragraph, index) => {
                      if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                        return (
                          <h3 key={index} className="text-lg font-semibold mt-6 mb-3 text-foreground">
                            {paragraph.replace(/\*\*/g, '')}
                          </h3>
                        );
                      } else if (paragraph.trim().startsWith('•')) {
                        return (
                          <li key={index} className="ml-4 mb-2 text-muted-foreground">
                            {paragraph.replace('•', '').trim()}
                          </li>
                        );
                      } else if (paragraph.trim().match(/^\d+\./)) {
                        return (
                          <li key={index} className="ml-4 mb-2 text-muted-foreground list-decimal">
                            {paragraph.replace(/^\d+\./, '').trim()}
                          </li>
                        );
                      } else if (paragraph.trim()) {
                        return (
                          <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                            {paragraph.trim()}
                          </p>
                        );
                      }
                      return null;
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;