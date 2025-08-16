import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skillset from "@/components/skillset";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skillset />
      <Contact />
    </div>
  );
}
