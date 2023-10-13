

import Experience from '@/components/home/experience';
import Intro from '@/components/home/intro';
import Skills from '@/components/home/skills';
import SectionSpacer from '@/components/ui/SectionSpacer';
export default function Home() {
    return (
        <main className="flex flex-col items-center px-4 sm:px-0 mt-[132px]">
            <Intro />
            <SectionSpacer variant="small" />
            <Skills />
            <SectionSpacer variant="small" />
            <Experience />
        </main>
    );
}
