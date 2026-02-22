import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VerticalEmail from "@/components/layout/VerticalEmail";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <VerticalEmail />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
