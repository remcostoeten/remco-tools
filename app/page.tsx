import SectionDivider from '@/components/divider';
import Experience from '@/components/experience';
import AboutTwo from '@/components/home/AboutTwo';
import About from '@/components/home/about';
import Contact from '@/components/home/contact';
import Footer from '@/components/home/footer';
import Intro from '@/components/home/intro';
import Skills from '@/components/home/skills';

export default function Home() {
    return (
        <main className="flex flex-col items-center container">
            <Intro />
            <SectionDivider />
            <AboutTwo />
            <About />
            <SectionDivider />
            <Skills />
            <Experience />
            <Footer />
        </main>
    );
}
