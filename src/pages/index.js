import About from "@/components/About";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Projectsv2 from "@/components/Projectsv2";
import Services from "@/components/Services";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const url = window.location.href;

    if (url.indexOf("#") > -1) {
      const cleanUrl = url.substring(0, url.indexOf("#"));
      window.history.replaceState({}, document.title, cleanUrl);
      router.push(cleanUrl);
    }
  }, []);
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
