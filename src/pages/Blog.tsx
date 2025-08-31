import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Homlokzati hőszigetelés: ETICS rendszerek előnyei",
      excerpt: "Miért válasszuk az ETICS (külső kompozit hőszigetelő rendszer) megoldást? Minden tudnivaló a hatékony homlokzati szigetelésről.",
      content: `Az ETICS (External Thermal Insulation Composite System) rendszer ma az egyik legnépszerűbb homlokzati hőszigetelési megoldás. 

      **Miért érdemes választani?**
      
      • **Energiatakarékosság**: Akár 40-50%-kal csökkentheti a fűtési költségeket
      • **Hőhidak megszüntetése**: Folyamatos szigetelőréteg a teljes homlokzaton
      • **Páradiffúzió**: A rendszer lélegzik, nem gyűlik fel a nedvesség
      • **Esztétikai megjelenés**: Sokféle színben és textúrában elérhető
      
      **Alkalmazási területek:**
      
      Családi házak, társasházak, irodaépületek homlokzatán egyaránt alkalmazható. Különösen ajánlott régi épületek felújításánál, ahol a belső szigetelés nem megoldható.
      
      **Szakszerű kivitelezés kulcsfontosságú**: A rendszer csak megfelelő alapozás és időjárás-független kivitelezés mellett biztosítja a hosszú távú hatékonyságot.`,
      category: "Szigetelés",
      author: "BauHub Szakértő",
      date: "2024-03-15",
      readTime: "5 perc"
    },
    {
      id: 2,
      title: "Fürdőszoba burkolás: Praktikus tippek és trendek",
      excerpt: "Modern fürdőszoba burkolási megoldások, amelyek funkcionalitást és esztétikumot egyesítenek. Szakértői tanácsok a tartós eredményért.",
      content: `A fürdőszoba burkolás nemcsak esztétikai, hanem gyakorlati szempontból is kulcsfontosságú elem.

      **Anyagválasztás szempontjai:**
      
      • **Csúszásmentesség**: R10-R13 besorolású lapok a biztonság érdekében
      • **Vízállóság**: Minimális vízfelszívódású anyagok választása
      • **Könnyű tisztíthatóság**: Sima felületű, fugamentes megoldások
      • **Méretek**: Nagy méretű lapok kevesebb fugával, egyszerűbb karbantartás
      
      **2024-es trendek:**
      
      1. **Természetes kő hatású lapok**: Travertin, márvány megjelenés
      2. **Minimalista stílus**: Egységes színvilág, kevés mintázat
      3. **Formatervezési újdonságok**: Hexagon, elongált téglalap formák
      4. **Textúrált felületek**: Matt felületek a fényvisszaverődés csökkentésére
      
      **Fugázási tippek**: Epoxy alapú fugázóanyagok használata a magas nedvességű zónákban a penészesedés elkerülése érdekében.`,
      category: "Burkolás",
      author: "BauHub Szakértő", 
      date: "2024-03-10",
      readTime: "6 perc"
    },
    {
      id: 3,
      title: "Tetőfelújítás előtt: Mire figyeljünk?",
      excerpt: "Tetőfelújítás tervezése és kivitelezése. Praktikus tanácsok a hosszú távú megoldásért és a költséghatékony kivitelezésért.",
      content: `A tetőfelújítás komoly beruházás, ezért fontos a gondos előkészítés és tervezés.

      **Felmérési szempontok:**
      
      • **Szerkezeti állapot**: Szarufák, ácsszerkezet vizsgálata
      • **Szigetelés ellenőrzése**: Hő- és vízszigetelés hatékonysága
      • **Cserepek/fedőanyag**: Repedések, elmozdulások feltérképezése
      • **Ereszcsatorna rendszer**: Vízelvezetés megfelelősége
      
      **Időzítés fontossága:**
      
      Tavaszi-nyári időszakban érdemes tervezni, amikor kedvezőek az időjárási viszonyok. A felújítás 2-3 hétig is eltarthat, ezért fontos a száraz időszak kiválasztása.
      
      **Anyagválasztás:**
      
      1. **Cserép**: Hagyományos megoldás, tartós és esztétikus
      2. **Lemezfedés**: Gyors telepítés, költséghatékony
      3. **Bitumenes zsindely**: Könnyű, rugalmas, változatos megjelenés
      
      **Engedélyezés**: Több mint 30%-os tetőfelújításnál építési engedély szükséges!`,
      category: "Tetőzet",
      author: "BauHub Szakértő",
      date: "2024-03-05", 
      readTime: "5 perc"
    },
    {
      id: 4,
      title: "Nyílászárócsere: Mikor érdemes cserélni?",
      excerpt: "Régi ablakok és ajtók cseréje jelentős energiamegtakarítást eredményezhet. Tudnivalók a nyílászárócsere előnyeiről és folyamatáról.",
      content: `A nyílászárók cseréje az egyik leghatékonyabb energetikai felújítás lehet egy ingatlanban.

      **Mikor érdemes cserélni?**
      
      • **20 évnél régebbi ablakok**: Elavult szigetelési technológia
      • **Huzat érzékelhető**: Tömítések elöregedése
      • **Kondenzáció**: Páralecsapódás az üvegen belül
      • **Nehéz nyitás/zárás**: Szerkezeti problémák
      
      **Modern nyílászárók előnyei:**
      
      1. **Energiatakarékosság**: 3 rétegű üvegezés, alacsony U-érték
      2. **Zajvédelem**: Akár 40-50 dB zajcsökkentés
      3. **Biztonság**: Többpontos zárak, biztonsági üvegezés
      4. **Karbantartás**: Minimális ápolási igény
      
      **Anyagok összehasonlítása:**
      
      • **PVC**: Költséghatékony, jó szigetelés, széles színpaletta
      • **Fa**: Természetes megjelenés, jó hőszigetelés, környezetbarát
      • **Alumínium**: Tartós, modern design, minimális karbantartás
      
      **Támogatások**: CSOK Plus és egyéb állami támogatások igénybe vehetők energetikai korszerűsítéshez.`,
      category: "Nyílászárók",
      author: "BauHub Szakértő",
      date: "2024-02-28",
      readTime: "4 perc"
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