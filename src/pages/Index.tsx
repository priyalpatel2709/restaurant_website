import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SocialMediaSection } from "@/components/SocialMedia";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Gallery />
      <Menu />
      <About />
      <Contact />
      <SocialMediaSection />
      <Footer />
    </div>
  );
};

export default Index;
