import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Kovács Anna",
      location: "Miskolc",
      service: "Lakás felújítás",
      rating: 5,
      date: "2024.01.15",
      text: "Pontosan határidőre készültek el, gyönyörű lett a lakásunk! A csapat nagyon precíz és tiszta munkát végzett. A festés és glettelés kifogástalan minőségű. Mindenkinek ajánlom őket!",
      avatar: "KA"
    },
    {
      id: 2,
      name: "Nagy Péter",
      location: "Kazincbarcika",
      service: "Homlokzat szigetelés",
      rating: 5,
      date: "2024.02.03",
      text: "Professzionális csapat, csak ajánlani tudom! A homlokzat szigetelés után jelentősen csökkent a fűtésszámlánk. Minden részletre odafigyeltek, tiszta munkavégzés.",
      avatar: "NP"
    },
    {
      id: 3,
      name: "Szabó Mária",
      location: "Ózd",
      service: "Fürdőszoba burkolás",
      rating: 5,
      date: "2024.02.18",
      text: "Tökéletes burkolás, minden részlettel elégedettek vagyunk! A vízhatlan kivitelezés valóban garantált, gyönyörű lett a fürdőszobánk. Időben befejezték a munkát.",
      avatar: "SM"
    },
    {
      id: 4,
      name: "Kiss László",
      location: "Tiszaújváros",
      service: "Nyílászáró csere",
      rating: 5,
      date: "2024.03.05",
      text: "Energiahatékony ablakok, szakszerű beépítés! Jelentősen csökkent a zajszint és a hőveszteség. A csapat pontos, megbízható és udvarias volt.",
      avatar: "KL"
    },
    {
      id: 5,
      name: "Tóth Katalin",
      location: "Sárospatak",
      service: "Gipszkartonozás",
      rating: 5,
      date: "2024.03.12",
      text: "Gyors és precíz kivitelezés! Az álmennyezet és válaszfalak tökéletesen készültek el. Modern megoldások, ügyes szakemberek. Kiváló ár-érték arány.",
      avatar: "TK"
    },
    {
      id: 6,
      name: "Horváth József",
      location: "Mezőkövesd",
      service: "Könnyűszerkezetes építés",
      rating: 5,
      date: "2024.03.20",
      text: "Gyors és költséghatékony garázs építés! Mindössze 2 hét alatt elkészült a 6x4 méteres garázs. Minőségi anyagok, precíz kivitelezés, fair árazás.",
      avatar: "HJ"
    },
    {
      id: 7,
      name: "Varga Zoltán",
      location: "Nyíregyháza",
      service: "Kőműves munkák",
      rating: 5,
      date: "2024.04.02",
      text: "Tapasztalt mesterek, tartós megoldások! A falazási és javítási munkák kifogástalanul sikerültek. Hagyományos technikákkal, modern minőségben.",
      avatar: "VZ"
    },
    {
      id: 8,
      name: "Molnár Éva",
      location: "Debrecen",
      service: "Festés, glettelés",
      rating: 5,
      date: "2024.04.15",
      text: "Színtanácsadás, minőségi festékek, tiszta munkavégzés! A lakás falai tökéletesen egyenesek lettek a glettelés után. Gyors és hatékony kivitelezés.",
      avatar: "ME"
    },
    {
      id: 9,
      name: "Balogh András",
      location: "Eger",
      service: "Hideg-meleg burkolás",
      rating: 5,
      date: "2024.04.28",
      text: "Vízhatlan járólapozás, esztétikus megjelenés! A konyhában és fürdőszobában végzett burkolási munkák kifogástalanok. Precíz és gyors kivitelezés.",
      avatar: "BA"
    },
    {
      id: 10,
      name: "Farkas Zsófia",
      location: "Miskolc",
      service: "Teljes felújítás",
      rating: 5,
      date: "2024.05.10",
      text: "Komplett lakásfelújítás, minden elvárást felülmúlt! 3 hetes projektünk során végig professzionális volt a csapat. Kitűnő koordináció és kivitelezés.",
      avatar: "FZ"
    }
  ];

  const averageRating = 5.0;
  const totalReviews = reviews.length;

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(reviews.length / 3)) % Math.ceil(reviews.length / 3));
  };

  const visibleReviews = reviews.slice(currentIndex * 3, (currentIndex + 1) * 3);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent">
            Ügyfeleink Véleménye
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-warning fill-current" />
              ))}
              <span className="text-3xl font-bold text-foreground ml-4">{averageRating}</span>
              <span className="text-muted-foreground ml-2">({totalReviews} vélemény)</span>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <strong className="text-primary">200+ elégedett ügyfél</strong> választotta már a szolgáltatásainkat. 
            Olvassa el véleményeiket és győződjön meg minőségünkről!
          </p>
        </div>

        {/* Reviews Slider */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleReviews.map((review, index) => (
              <Card 
                key={review.id} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-background/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-primary/20 rounded-2xl relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <Quote className="h-8 w-8 text-primary" />
                  </div>

                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-lg">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                    </div>
                  </div>

                  {/* Service & Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {review.service}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-warning fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm italic">
                    "{review.text}"
                  </p>

                  {/* Date */}
                  <div className="text-xs text-muted-foreground">
                    {review.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevReview}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {[...Array(Math.ceil(reviews.length / 3))].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextReview}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-scale-in">
          <div className="bg-gradient-hero text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden hover:shadow-glow transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                🌟 Legyen Ön is elégedett ügyfeleink között! 🌟
              </h3>
              <p className="text-xl opacity-95 mb-8 max-w-3xl mx-auto leading-relaxed">
                🎯 <strong>Ingyenes helyszíni felmérés</strong> és részletes árajánlat<br/>
                🏆 <strong>Garantált minőség</strong> - 15+ év tapasztalattal<br/>
                ⚡ <strong>Gyors kivitelezés</strong> - megbízható határidők
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="#contact">
                  <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 shadow-lg text-lg px-8 py-4">
                    🎯 Ingyenes Ajánlat
                  </Button>
                </a>
                <a href="tel:+36306616016">
                  <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 text-lg px-8 py-4">
                    📞 Azonnali Kapcsolat
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

export default Reviews;