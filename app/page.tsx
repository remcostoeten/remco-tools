

import Experience from '@/components/home/experience';
import IntroBlock from '@/components/home/IntroBlock';
import Intro from '@/components/home/intro';
import Skills from '@/components/home/skills';
import SectionSpacer from '@/components/ui/SectionSpacer';
import NavBar from '@/components/core/NavBar';
import { headerSpacing } from '@/lib/utils';
export default function Home() {
    return (
        <><NavBar /><main className={`flex flex-col items-center px-4 sm:px-0 ${headerSpacing}`}>
            <IntroBlock />
            {/* <Intro /> */}
            {/* <SectionSpacer variant="small" /> */}
            {/* /            <Skills /> */}
            {/* <SectionSpacer variant="small" /> */}
            {/* <Experience /> */}
        </main></>
    );
}
