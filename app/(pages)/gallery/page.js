import fs from "fs";
import path from "path";
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GalleryView from "@/components/sections/GalleryView";

export default async function GalleryPage() {
  const galleryDir = path.join(process.cwd(), "public", "design idea gallery");
  let images = [];
  let categories = [];

  if (fs.existsSync(galleryDir)) {
    const subdirs = fs.readdirSync(galleryDir);
    
    subdirs.forEach((subdir) => {
      const subdirPath = path.join(galleryDir, subdir);
      const stat = fs.statSync(subdirPath);
      
      if (stat.isDirectory()) {
        const categoryName = subdir
          .toLowerCase()
          .replace(/_/g, " ")
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        categories.push(categoryName);
        
        const files = fs.readdirSync(subdirPath);
        files.forEach((file) => {
          if (/\.(jpg|jpeg|png|webp|svg)$/i.test(file)) {
            images.push({
              src: `/design idea gallery/${subdir}/${file}`,
              category: categoryName,
              name: `${categoryName} Inspiration`
            });
          }
        });
      }
    });
  }

  // Sort categories alphabetically
  categories.sort();

  // Shuffle images to show a dynamic mixed view initially on "All"
  // Keep shuffling consistent during build by using a simple seed or sorting algorithm
  images.sort(() => 0.5 - Math.random());

  return (
    <>
      <Header />
      <main className="flex-grow bg-surface">
        <GalleryView initialImages={images} categories={categories} />
      </main>
      <Footer />
    </>
  );
}
