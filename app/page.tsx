import SectionDivider from "@/components/divider";
import Experience from "@/components/experience";
import About from "@/components/home/about";
import Intro from "@/components/home/intro";
import Skills from "@/components/home/skills";
import { Contact } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
