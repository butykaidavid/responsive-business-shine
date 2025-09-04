import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import SEO from "@/components/SEO";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        const headerOffset = 100; // Adjust for fixed header
        const elementPosition = (element as HTMLElement).offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  }, [location]);

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Services />
        <Reviews />
        <FAQ />
        <Gallery />
        <Contact />
        <Footer />
        <MobileStickyBar />
      </div>
    </>
  );
};

export default Index;
