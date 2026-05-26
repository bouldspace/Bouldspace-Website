import React from "react";
import Header from "@/components/layout/Header";
import ProcessHero from "@/components/sections/ProcessHero";
import ProcessJourney from "@/components/sections/ProcessJourney";
import ProcessStats from "@/components/sections/ProcessStats";
import ProcessCTA from "@/components/sections/ProcessCTA";
import Footer from "@/components/layout/Footer";

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <ProcessHero />
        <ProcessJourney />
        <ProcessStats />
        <ProcessCTA />
      </main>
      <Footer />
    </>
  );
}
