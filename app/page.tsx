import SectionDivider from "@/components/divider";
import About from "../components/home/about";
import Intro from "../components/home/intro";
import Projects from "@/components/home/projects";
import { projectsData } from "@/utils/data";

export default function Home() {
  return (
    <>
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      {projectsData.map((project, index) => (
        <Projects
          key={index}
          title={project.title}
          description={project.description}
          tags={project.tags}
          imageUrl={project.imageUrl}
        />
      ))}
    </>
  );
}
