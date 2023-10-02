import BlurBackground from '@/components/core/BlurBackground';
import { MouseHoverEffect } from '@/components/core/MouseHoverEffect';
import Experience from '@/components/home/experience';
import About from '@/components/home/about';
import Intro from '@/components/home/intro';
import Skills from '@/components/home/skills';
import { HomeBanners } from '@/components/HomeBanners';
import SectionSpacer from '@/components/ui/SectionSpacer';
import AnimatedDiv from '@/utils/AnimatedDiv';
import Footer from '@/components/landing/Footer';
export default function Home() {
    return (
        <main className="flex flex-col items-center px-4 sm:px-0">
            <MouseHoverEffect />
            <Intro />
            {/* <SectionSpacer variant="large" /> */}
            <Skills />
            <SectionSpacer variant="small" />
            <Experience />
            <SectionSpacer variant="small" />
        </main>
    );
}
