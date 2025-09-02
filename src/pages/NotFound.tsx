import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEO 
        title="404 - Oldal nem található"
        description="A keresett oldal nem található. Térjen vissza a főoldalra és böngésszen BauHub építési szolgáltatásai között."
      />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-lg mx-auto p-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-8">
            <Home className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Oldal nem található</h2>
          <p className="text-lg text-muted-foreground mb-8">
            A keresett oldal nem található vagy elköltözött. Térjen vissza a főoldalra és böngésszen szolgáltatásaink között.
          </p>
          <div className="space-y-4">
            <a href="/">
              <Button size="lg" className="w-full sm:w-auto">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Vissza a főoldalra
              </Button>
            </a>
            <div className="flex flex-wrap gap-2 justify-center">
              <a href="#services">
                <Button variant="outline" size="sm">Szolgáltatások</Button>
              </a>
              <a href="/projektek">
                <Button variant="outline" size="sm">Projektek</Button>
              </a>
              <a href="/blog">
                <Button variant="outline" size="sm">Blog</Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="sm">Kapcsolat</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
