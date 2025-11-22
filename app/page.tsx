import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main dir="rtl">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
