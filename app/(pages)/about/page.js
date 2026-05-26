import React from "react";
import Header from "@/components/layout/Header";
import AboutHero from "@/components/sections/AboutHero";
import CompanyStory from "@/components/sections/CompanyStory";
import MissionVision from "@/components/sections/MissionVision";
import AboutValues from "@/components/sections/AboutValues";
import AboutStats from "@/components/sections/AboutStats";
import Leadership from "@/components/sections/Leadership";
import Philosophy from "@/components/sections/Philosophy";
import Workflow from "@/components/sections/Workflow";
import AboutCTA from "@/components/sections/AboutCTA";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <AboutHero />
        <CompanyStory />
        <MissionVision />
        <AboutValues />
        <AboutStats />
        <Leadership />
        <Philosophy />
        <Workflow />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
