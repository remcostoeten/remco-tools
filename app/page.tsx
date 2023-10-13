

import Experience from '@/components/home/experience';
import Intro from '@/components/home/intro';
import Skills from '@/components/home/skills';
import SectionSpacer from '@/components/ui/SectionSpacer';
import { headerSpacing } from '@/lib/utils';

export default function Home() {
    return (
        <main className={`flex clear-header flex-col items-center px-4 sm:px-0 ${headerSpacing}`}>
            <Intro />
            <SectionSpacer variant="small" />
            <Skills />
            <SectionSpacer variant="small" />
            <Experience />
        </main>
    );
}
