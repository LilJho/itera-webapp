import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Services />
      <Projects />
    </>
  );
}
