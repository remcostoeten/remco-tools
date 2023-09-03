import SectionDivider from "@/components/divider";
import About from "./python/components/home/about";
import Intro from "./python/components/home/intro";

export default function Home() {
  return (
    <>
        <Intro />
        <SectionDivider/>
        <About/>
    </>
  );
}
