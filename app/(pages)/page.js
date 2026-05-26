import React from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import AboutPreview from "@/components/sections/AboutPreview";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Process from "@/components/sections/Process";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <AboutPreview />
        <Services />
        <Industries />
        <FeaturedProjects />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
