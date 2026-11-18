import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Talks from "@/components/talks";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skillset from "@/components/skillset";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Talks />
      <Experience />
      <Projects />
      <Skillset />
      <Contact />
      <Footer />
    </div>
  );
}
