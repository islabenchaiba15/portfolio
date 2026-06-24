import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AdditionalProjects from "@/components/AdditionalProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Projects />
        <AdditionalProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
