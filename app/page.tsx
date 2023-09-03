import SectionDivider from "@/components/divider";
import About from "../components/home/about";
import Intro from "../components/home/intro";
import Cards from "@c/Cards"

export default function Home() {
  return (
    <>
        <Intro />
        <SectionDivider/>
        <About/>
        <SectionDivider/>
        <Cards/>
    </>
  );
}
