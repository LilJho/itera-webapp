import About from "@/components/About";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Projectsv2 from "@/components/Projectsv2";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Herosection />
      <About />
      <Services />
      <Projectsv2 />
      <Footer />
    </>
  );
}
