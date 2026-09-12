import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WorkWithUsHero from "@/components/sections/WorkWithUsHero";
import WorkWithUsTracks from "@/components/sections/WorkWithUsTracks";
import WorkWithUsStandards from "@/components/sections/WorkWithUsStandards";
import WorkWithUsForm from "@/components/sections/WorkWithUsForm";

export const metadata = {
  title: "Work With Us | Bouldspace Architecture & Construction",
  description:
    "Collaborate with Bouldspace. We partner with elite architects, artisanal master craftsmen, general contractors, and PMCs to build architectural landmarks.",
  openGraph: {
    title: "Work With Us | Bouldspace Architecture & Construction",
    description:
      "Join Bouldspace's master builder network. Explore collaboration tracks for architects, specialized craftsmen, MEP engineers, and contractors.",
  },
};

export default function WorkWithUsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <WorkWithUsHero />
        <WorkWithUsTracks />
        <WorkWithUsStandards />
        <WorkWithUsForm />
      </main>
      <Footer />
    </>
  );
}
