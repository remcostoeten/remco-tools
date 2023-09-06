import SectionDivider from '@/components/divider';
import About from '../components/home/about';
import Intro from '../components/home/intro';
import Projects from '@/components/home/projects';
import { projectsData } from '@/utils/data';
import TrailerComponent from '@/components/Trailer';
import Experience from '@/components/experience';
export default function Home() {
    return (
        <>
      <TrailerComponent />
            <Intro />
            <SectionDivider />
            <About />
            <SectionDivider />            
            <Experience />
         </>
    );
}
