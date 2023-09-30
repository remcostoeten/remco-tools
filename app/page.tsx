import SectionDivider from '@/components/ui/divider';
import Experience from '@/components/experience';
import About from '@/components/home/about';
import Contact from '@/components/home/contact';
import Footer from '@/components/home/footer';
import Intro from '@/components/home/intro';
import Skills from '@/components/home/skills';
import SectionSpacer from '@/components/ui/SectionSpacer';
import ArrowDown from '@/components/ArrowDown';
import { HomeBanners } from '@/components/HomeBanners';
import { MouseHoverEffect } from '@/components/core/MouseHoverEffect';
import AnimatedDiv from '@/utils/AnimatedDiv';
import BlurBackground from '@/components/core/BlurBackground';
export default function Home() {
    return (
        <main className="flex flex-col items-center px-4 sm:px-0">
            <MouseHoverEffect />
            <BlurBackground />
            <AnimatedDiv children={<HomeBanners />} />
            <Intro />
            {/* <SectionSpacer variant="large" /> */}
            <About />
            <SectionSpacer variant="small" />
            <Skills />
            <SectionSpacer variant="small" />
            <Experience />
            <SectionSpacer variant="small" />
            {/* <Footer /> */}
        </main>
    );
}
