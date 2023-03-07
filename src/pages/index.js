import Herosection from "@/components/Herosection";

import Projects from "@/components/Projects";
import Projectsv2 from "@/components/Projectsv2";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Herosection />
      <Services />
      {/* <Projects /> */}
      <Projectsv2 />
    </>
  );
}
