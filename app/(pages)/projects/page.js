import React from "react";
import Header from "@/components/layout/Header";
import ProjectsHero from "@/components/sections/ProjectsHero";
import ProjectsFeatured from "@/components/sections/ProjectsFeatured";
import ProjectsFilterGrid from "@/components/sections/ProjectsFilterGrid";
import ProjectsInterlude from "@/components/sections/ProjectsInterlude";
import ProjectsStats from "@/components/sections/ProjectsStats";
import ProjectsCTA from "@/components/sections/ProjectsCTA";
import Footer from "@/components/layout/Footer";

export default function Projects() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <ProjectsHero />
        <ProjectsFeatured />
        <ProjectsFilterGrid />
        <ProjectsInterlude />
        <ProjectsStats />
        <ProjectsCTA />
      </main>
      <Footer />
    </>
  );
}
