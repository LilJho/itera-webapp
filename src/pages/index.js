import Herosection from "@/components/Herosection";
import Background from "@/components/layout/background";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Background /> */}
      <Herosection />
      <Services />
    </>
  );
}
