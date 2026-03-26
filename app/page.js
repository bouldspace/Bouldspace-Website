import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Process />
      <Portfolio />
      <Testimonials />
      <Features />
      <About />
      <Contact />
    </>
  );
}
