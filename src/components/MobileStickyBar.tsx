import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageSquare, X } from "lucide-react";
import { Link } from "react-router-dom";

const MobileStickyBar = () => {
  const [showCallback, setShowCallback] = useState(false);

  return (
    <>
      {/* Mobile Sticky Contact Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 shadow-2xl">
        <div className="grid grid-cols-3 gap-2 p-3">
          <a href="tel:+36306616016" className="flex-1">
            <Button 
              variant="cta" 
              size="sm" 
              className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">Hívás</span>
            </Button>
          </a>
          
          <Link to={{ pathname: "/", hash: "#contact" }} className="flex-1">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full flex items-center justify-center space-x-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm font-medium">Email</span>
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowCallback(true)}
            className="w-full flex items-center justify-center space-x-2 border-secondary text-foreground hover:bg-secondary"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">Visszahívás</span>
          </Button>
        </div>
      </div>

      {/* Callback Request Modal */}
      {showCallback && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <Card className="w-full max-w-md bg-background shadow-2xl border-0 rounded-2xl animate-scale-in">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground">Visszahívás kérése</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCallback(false)}
                  className="h-8 w-8 p-0 hover:bg-secondary"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Adja meg telefonszámát, és mi visszahívjuk 24 órán belül!
                </p>
                
                <div className="space-y-3">
                  <input
                    type="tel"
                    placeholder="Telefonszám (06 XX XXX XXXX)"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary bg-background text-foreground"
                  />
                  
                  <textarea
                    placeholder="Miben segíthetünk? (opcionális)"
                    rows={3}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary bg-background text-foreground resize-none"
                  />
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    onClick={() => setShowCallback(false)}
                    className="flex-1"
                  >
                    Mégse
                  </Button>
                  <Button
                    variant="cta"
                    onClick={() => {
                      // Here you would handle the form submission
                      setShowCallback(false);
                      // Show success message or redirect
                    }}
                    className="flex-1"
                  >
                    Visszahívást kérek
                  </Button>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Azonnali kapcsolat:</p>
                    <a href="tel:+36306616016" className="text-primary hover:underline">
                      06 30/661 6016
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default MobileStickyBar;