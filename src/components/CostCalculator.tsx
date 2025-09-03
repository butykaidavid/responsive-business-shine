import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Calculator, Home, Palette, Hammer, Building, PaintBucket, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

interface ServicePrice {
  id: string;
  name: string;
  icon: any;
  basePrice: number;
  unit: string;
  description: string;
}

const services: ServicePrice[] = [
  {
    id: "renovation",
    name: "Teljes felújítás",
    icon: Home,
    basePrice: 85000,
    unit: "m²",
    description: "Komplett lakás/ház felújítás"
  },
  {
    id: "insulation",
    name: "Homlokzati szigetelés",
    icon: Building,
    basePrice: 12000,
    unit: "m²",
    description: "EPS/XPS szigetelés"
  },
  {
    id: "painting",
    name: "Festés, mázolás",
    icon: Palette,
    basePrice: 3500,
    unit: "m²",
    description: "Belső/külső festés"
  },
  {
    id: "drywall",
    name: "Gipszkartonozás",
    icon: Hammer,
    basePrice: 4500,
    unit: "m²",
    description: "Válaszfalak, álmennyezet"
  },
  {
    id: "masonry",
    name: "Kőműves munkák",
    icon: Wrench,
    basePrice: 8500,
    unit: "m²",
    description: "Falazás, vakolás"
  },
  {
    id: "tiling",
    name: "Burkolás",
    icon: PaintBucket,
    basePrice: 6500,
    unit: "m²",
    description: "Csempe, járólap"
  }
];

const qualityMultipliers = {
  basic: { label: "Alapszint", multiplier: 1, description: "Egyszerű anyagok" },
  standard: { label: "Standard", multiplier: 1.3, description: "Minőségi anyagok" },
  premium: { label: "Prémium", multiplier: 1.8, description: "Exkluzív anyagok" }
};

const CostCalculator = () => {
  const [selectedService, setSelectedService] = useState<string>("");
  const [area, setArea] = useState<string>("");
  const quality = "standard"; // Fixed to standard quality
  const [showResult, setShowResult] = useState<boolean>(false);

  const calculateCost = () => {
    if (!selectedService || !area) return;
    
    const service = services.find(s => s.id === selectedService);
    if (!service) return;
    
    const qualityData = qualityMultipliers[quality as keyof typeof qualityMultipliers];
    const baseTotal = service.basePrice * parseFloat(area);
    const finalCost = baseTotal * qualityData.multiplier;
    
    setShowResult(true);
    
    // Scroll to result
    setTimeout(() => {
      document.getElementById('calculator-result')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const getEstimatedCost = () => {
    if (!selectedService || !area) return 0;
    
    const service = services.find(s => s.id === selectedService);
    if (!service) return 0;
    
    const qualityData = qualityMultipliers[quality as keyof typeof qualityMultipliers];
    const baseTotal = service.basePrice * parseFloat(area);
    return baseTotal * qualityData.multiplier;
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <section className="py-20 bg-gradient-card scroll-mt-24 md:scroll-mt-28" id="calculator">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6">
            <Calculator className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Költségkalkulátor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kapjon azonnali becslést munkálataink költségeiről. 
            A pontos árajánlatért kérjen ingyenes helyszíni felmérést.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                <Calculator className="h-6 w-6 text-primary" />
                Válassza ki a szolgáltatást
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Service Selection */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Milyen munkálatot szeretne elvégeztetni?</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <Card 
                      key={service.id}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                        selectedService === service.id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <CardContent className="p-4 text-center">
                        <service.icon className={`h-8 w-8 mx-auto mb-3 ${
                          selectedService === service.id ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                        <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                        <p className="text-sm font-medium text-primary">
                          {service.basePrice.toLocaleString()} Ft/{service.unit}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {selectedService && (
                <>
                  <Separator />
                  
                  {/* Area Input */}
                  <div className="space-y-4">
                    <Label htmlFor="area" className="text-lg font-semibold">
                      Terület ({selectedServiceData?.unit})
                    </Label>
                    <Input
                      id="area"
                      type="number"
                      placeholder={`Terület ${selectedServiceData?.unit}-ben`}
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="text-lg h-12"
                    />
                  </div>


                  {/* Calculate Button */}
                  <div className="text-center">
                    <Button 
                      onClick={calculateCost}
                      size="lg"
                      className="text-lg px-8 py-6"
                      disabled={!selectedService || !area}
                    >
                      <Calculator className="h-5 w-5 mr-2" />
                      Költség kalkulálása
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Result Card */}
          {showResult && selectedService && area && (
            <Card 
              id="calculator-result"
              className="mt-8 shadow-xl border-0 bg-gradient-primary text-primary-foreground animate-scale-in"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  Becsült költség
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="text-5xl font-bold">
                  {getEstimatedCost().toLocaleString()} Ft
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-lg font-semibold">Szolgáltatás</div>
                    <div className="text-sm opacity-90">{selectedServiceData?.name}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-lg font-semibold">Terület</div>
                    <div className="text-sm opacity-90">{area} {selectedServiceData?.unit}</div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-6">
                  <p className="text-lg font-semibold mb-2">Fontos tudnivalók:</p>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• Ez egy tájékoztató becslés, a pontos ár a helyszíni felméréstől függ</li>
                    <li>• Az árak tartalmazzák az anyagköltséget és a munkadíjat</li>
                    <li>• Speciális igények esetén az ár eltérhet</li>
                    <li>• Ingyenes helyszíni felmérést biztosítunk</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <Link to={{ pathname: "/", hash: "#contact" }}>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary w-full"
                    >
                      Pontos árajánlat kérése
                    </Button>
                  </Link>
                  <a href="tel:+36306616016">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary w-full"
                    >
                      Azonnali konzultáció
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;