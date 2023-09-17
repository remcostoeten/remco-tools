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
        <main className='flex flex-col items-center'>
            <Intro />
            <a href='' className='scroll-down'>
                <span className='scroll-down__animate'></span>
            </a>{' '}
            <ArrowDown target='about' />
            <SectionDivider />
            <SectionSpacer variant='large' />
            <About />
            <SectionDivider />
            <Skills />
            <Experience />
            <Footer />
        </main>
    );
}
