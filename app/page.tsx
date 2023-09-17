import SectionDivider from '@/components/ui/divider';
import Experience from '@/components/experience';
import About from '@/components/home/about';
import Contact from '@/components/home/contact';
import Footer from '@/components/home/footer';
import Intro from '@/components/home/intro';
import Skills from '@/components/home/skills';
import SectionSpacer from '@/components/ui/SectionSpacer';
import ArrowDown from '@/components/ArrowDown';

export default function Home() {
    return (
        <main className="container flex flex-col items-center">
            <Intro />
            <ArrowDown/>
            <SectionSpacer variant="big" />
            <About />
            <SectionDivider />
            <Skills />
            <Experience />
            <Footer />
        </main>
    );
}
