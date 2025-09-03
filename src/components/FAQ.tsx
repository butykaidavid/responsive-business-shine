import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  HelpCircle, 
  Clock, 
  Euro, 
  Shield, 
  Phone,
  ArrowRight 
} from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Mennyi időt vesz igénybe egy lakásfelújítás?",
      answer: "A lakásfelújítás időtartama a projekt méretétől és összetettségétől függ. Egy átlagos 60m²-es lakás teljes felújítása általában 3-6 hetet vesz igénybe. Kisebb munkák (festés, glettelés) 1-2 hét alatt elkészülnek. A pontos időtartamot a helyszíni felmérés után tudjuk meghatározni.",
      category: "időtartam"
    },
    {
      question: "Milyen garanciát vállalnak a munkáikra?",
      answer: "Minden általunk végzett munkára átfogó garanciát vállalunk. Festési munkákra 2 év, burkolásra 3 év, szigetelésre 15 év garanciát adunk. A garancia fedezi a kivitelezési hibákat és az anyagdefektusokat is. Garanciális javításokat ingyenesen végezzük el.",
      category: "garancia"
    },
    {
      question: "Hogyan alakul a projekt költsége?",
      answer: "A költségek az anyagválasztástól, a munka összetettségétől és a terület nagyságától függenek. Ingyenes helyszíni felméréssel részletes, kötött árajánlatot készítünk. Az árak tartalmazzák az anyagokat és a munkadíjat. Rejtett költségek nincsenek, minden előre egyeztetett.",
      category: "költség"
    },
    {
      question: "Milyen területeken vállalnak munkát?",
      answer: "Szolgáltatásainkat Borsod-Abaúj-Zemplén vármegye teljes területén nyújtjuk. Főbb városok: Miskolc, Kazincbarcika, Ózd, Tiszaújváros, Sárospatak, Mezőkövesd és környékük. 50 km-es körzetben ingyenes a kiszállás, ezen túl minimális útiköltséget számolunk fel.",
      category: "terület"
    },
    {
      question: "Szükség van építési engedélyre?",
      answer: "A legtöbb felújítási munkához (festés, burkolás, gipszkartonozás, szigetelés) nem szükséges építési engedély. Nagyobb átalakításokhoz (falak bontása, tetőfelújítás) engedély kell. Segítünk az engedélyezési folyamatban és a szükséges dokumentumok beszerzésében.",
      category: "engedély"
    },
    {
      question: "Hogyan készítik elő a munkaterületet?",
      answer: "A munkaterületet teljes mértékben előkészítjük: lefóliázzuk a bútorokat, védőtakarókat használunk, portalanítunk. A munkavégzés során folyamatosan rendben tartjuk a környezetet. A munka befejezése után alapos takarítást végzünk.",
      category: "előkészítés"
    },
    {
      question: "Milyen anyagokat használnak?",
      answer: "Csak minőségi, márkás anyagokat használunk: Knauf gipszkarton, Caparol festékek, Mapei ragasztók és fugázók. Az anyagok kiválasztásánál az ár-érték arányt és a tartósságot tartjuk szem előtt. Minden anyagra gyári garancia vonatkozik.",
      category: "anyagok"
    },
    {
      question: "Tudnak segíteni a lakás bútorozásában?",
      answer: "Igen! Tapasztalt belsőépítészeti tanácsadóink segíthetnek a színválasztásban, anyagkombinációkban és térképészeti megoldásokban. Együttműködünk bútorgyártókkal és lakberendezőkkel is. Komplex megoldásokat kínálunk.",
      category: "tanácsadás"
    },
    {
      question: "Milyen fizetési lehetőségek vannak?",
      answer: "Rugalmas fizetési lehetőségeket biztosítunk: készpénz, bankkártya, átutalás. Nagyobb projekteknél részletfizetést is lehetővé teszünk (előleg, közbenső részlet, végelszámolás). SZÉP kártyát is elfogadunk bizonyos szolgáltatásokra.",
      category: "fizetés"
    },
    {
      question: "Vállalnak munkát hétvégén is?",
      answer: "Igen, hétvégi munkavégzést is vállalunk, amennyiben ez a projekt jellege és az ügyfél igényei miatt szükséges. Hétvégi munkáért 20% pótdíjat számolunk fel. Előzetes egyeztetés szükséges a szomszédokkal a zajszint miatt.",
      category: "munkaidő"
    },
    {
      question: "Segítenek anyagbeszerzésben?",
      answer: "Természetesen! Hosszú távú beszállítói kapcsolataink révén kedvezményes áron szerzünk be minden szükséges anyagot. Színválasztásban, mintákban segítünk. Az anyagszállítást és raktározást is megoldjuk. Ez időt és pénzt takarít meg.",
      category: "beszerzés"
    },
    {
      question: "Mit tegyünk, ha probléma merül fel?",
      answer: "Minden projekthez dedikált projektvezető tartozik, aki a munkavégzés teljes időtartama alatt elérhető. Probléma esetén azonnali megoldást keresünk. 24 órán belül reagálunk minden megkeresésre. Ügyfél-elégedettségünk a legfontosabb.",
      category: "probléma"
    }
  ];

  const categories = [
    { icon: Clock, title: "Időtartam & Határidők", count: 3 },
    { icon: Euro, title: "Költségek & Fizetés", count: 3 },
    { icon: Shield, title: "Garancia & Minőség", count: 3 },
    { icon: HelpCircle, title: "Általános Kérdések", count: 3 }
  ];

  return (
    <section id="faq" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent">
            Gyakran Ismételt Kérdések
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <strong className="text-primary">Minden kérdésre válaszolunk!</strong> 
            Itt találja a leggyakoribb kérdéseket és válaszokat szolgáltatásainkkal kapcsolatban.
            <br />
            <span className="text-lg mt-2 block">
              💬 <strong>Gyors válaszok</strong> • 
              📞 <strong>Személyes tanácsadás</strong> • 
              🎯 <strong>Részletes tájékoztatás</strong>
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-4 animate-fade-in-up">
              <h3 className="text-xl font-bold text-foreground mb-6">Kategóriák</h3>
              {categories.map((category, index) => (
                <Card 
                  key={index}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1 hover:shadow-primary/20"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <category.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors duration-300">
                          {category.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {category.count} kérdés
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Contact Card */}
              <Card className="bg-gradient-card shadow-lg border-0 mt-8">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-primary" />
                    Nem talál választ?
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4">
                    Hívjon minket bizalommal! Szakembereink készséggel válaszolnak minden kérdésére.
                  </p>
                  <a href="tel:+36306616016">
                    <Button variant="cta" size="sm" className="w-full">
                      📞 06 30/661 6016
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-3">
            <Card className="shadow-lg border-0 bg-background/90 backdrop-blur-sm animate-fade-in-up">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-border/50 rounded-lg px-4 hover:shadow-md transition-all duration-300 hover:border-primary/30"
                    >
                      <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors duration-300 py-4">
                        <span className="font-medium text-foreground pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-scale-in">
          <div className="bg-gradient-hero text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden hover:shadow-glow transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                🤝 Még mindig kérdései vannak?
              </h3>
              <p className="text-xl opacity-95 mb-8 max-w-3xl mx-auto leading-relaxed">
                🎯 <strong>Ingyenes konzultáció</strong> - részletes válaszok kérdéseire<br/>
                📋 <strong>Személyre szabott ajánlat</strong> - egyedi igényeire szabva<br/>
                ⚡ <strong>Azonnali válaszadás</strong> - 24 órán belül
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to={{ pathname: "/", hash: "#contact" }}>
                  <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 shadow-lg text-lg px-8 py-4">
                    💬 Kérdés Feltevése
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:+36306616016">
                  <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 text-lg px-8 py-4">
                    📞 Telefonos Konzultáció
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

export default FAQ;