import SectionDivider from '@/components/ui/divider';
import Experience from '@/components/experience';
import About from '@/components/home/about';
import Contact from '@/components/home/contact';
import Footer from '@/components/home/footer';
import Intro from '@/components/home/intro';
import Skills from '@/components/home/skills';
import SectionDividerBig from '@/components/ui/divider-big';

export default function Home() {
    return (
        <main className="flex flex-col items-center container">
            <Intro />
            <SectionDividerBig />
            <About />
            <SectionDivider />
            <Skills />
            <Experience />
            <Footer />
        </main>
    );
}
