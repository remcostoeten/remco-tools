import SectionDivider from '@/components/divider';
import About from '../components/home/about';
import Intro from '../components/home/intro';
import Projects from '@/components/home/projects';
import { projectsData } from '@/utils/data';
import TrailerComponent from '@/components/Trailer';
export default function Home() {
    return (
        <>
      <TrailerComponent />
            <Intro />
            <SectionDivider />
            <About />
            <SectionDivider />
            {projectsData.map((project, index) => (
                // @ts-ignore
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
