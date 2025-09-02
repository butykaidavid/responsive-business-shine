import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const Index = () => {
  return (
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
  );
};

export default Index;
