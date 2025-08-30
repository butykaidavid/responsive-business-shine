import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Star
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "06 30/661 6016",
      description: "Hétfő-Péntek 8:00-18:00",
      action: "tel:+36306616016"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "info@bauhub.hu",
      description: "24 órán belül válaszolunk",
      action: "mailto:info@bauhub.hu"
    },
    {
      icon: MapPin,
      title: "Szolgáltatási terület",
      content: "Borsod-Abaúj-Zemplén Vármegye",
      description: "Teljes területen",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lépjen kapcsolatba velünk
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ingyenes konzultáció és árajánlat. Tapasztalt szakembereink 
            készséggel állnak rendelkezésére.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Kérjen ingyenes ajánlatot
                </CardTitle>
                <p className="text-muted-foreground">
                  Töltse ki az űrlapot, és 24 órán belül felvesszük Önnel a kapcsolatot.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Név *</Label>
                      <Input 
                        id="name" 
                        placeholder="Az Ön neve"
                        className="border-gray-200 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="06 XX XXX XXXX"
                        className="border-gray-200 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail cím</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="email@example.com"
                      className="border-gray-200 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Milyen szolgáltatás érdekli?</Label>
                    <select 
                      id="service"
                      className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-primary"
                    >
                      <option value="">Válasszon szolgáltatást</option>
                      <option value="renovation">Lakás/ház felújítás</option>
                      <option value="insulation">Szigetelés</option>
                      <option value="painting">Festés, glettelés</option>
                      <option value="drywall">Gipszkartonozás</option>
                      <option value="masonry">Kőműves munkák</option>
                      <option value="windows">Nyílászáró csere</option>
                      <option value="tiling">Burkolás</option>
                      <option value="construction">Könnyűszerkezetes építés</option>
                      <option value="other">Egyéb</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Üzenet</Label>
                    <Textarea 
                      id="message"
                      placeholder="Írja le részletesen, milyen munkálatokat szeretne elvégeztetni..."
                      className="min-h-[100px] border-gray-200 focus:border-primary"
                    />
                  </div>

                  <Button variant="cta" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Ajánlat kérése
                  </Button>
                </form>

                {/* Trust Indicators */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium text-foreground">Ingyenes felmérés</p>
                    </div>
                    <div>
                      <Star className="h-8 w-8 text-warning mx-auto mb-2" />
                      <p className="text-sm font-medium text-foreground">5★ értékelés</p>
                    </div>
                    <div>
                      <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium text-foreground">24h válaszidő</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className={`group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-md ${info.action ? 'hover:-translate-y-1' : ''}`}
                  onClick={() => info.action && window.open(info.action, '_self')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <info.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-foreground font-medium mb-1">
                          {info.content}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Why Choose Us */}
            <Card className="bg-gradient-card shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Miért válasszon minket?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "15+ év tapasztalat az építőiparban",
                  "200+ sikeres projektet fejeztünk be",
                  "Megbízható határidők és tiszta munkavégzés",
                  "Versenyképes árak, átlátható árazás",
                  "Teljes körű garancia minden munkánkra",
                  "Ingyenes helyszíni felmérés és tanácsadás"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-primary text-primary-foreground shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Azonnali segítségre van szüksége?</h3>
                <p className="mb-4 opacity-90">Hívjon most, és még ma megbeszéljük a részleteket!</p>
                <a href="tel:+36306616016">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    06 30/661 6016
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;