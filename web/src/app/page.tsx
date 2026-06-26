import Nav from "@/components/layout/Nav";
import Loader from "@/components/layout/Loader";
import CustomCursor from "@/components/layout/CustomCursor";
import FloatingChat from "@/components/layout/FloatingChat";
import Effects from "@/components/layout/Effects";
import Hero from "@/components/sections/Hero";
import Chapters from "@/components/sections/Chapters";
import Story from "@/components/sections/Story";
import Chaos from "@/components/sections/Chaos";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Why from "@/components/sections/Why";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg-0 text-ivory selection:bg-gold selection:text-ink">
      <Loader />
      <CustomCursor />
      <FloatingChat />
      <Effects />
      <Nav />
      
      <Hero />
      <Chapters />
      
      <Chaos />
      
      <Story />
      <Why />
      
      <Services />
      
      <Process />
      
      <Testimonials />
      
      <Portfolio />
      
      <Contact />
      
      <Footer />
    </main>
  );
}
