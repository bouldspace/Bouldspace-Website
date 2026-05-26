import React from "react";
import Header from "@/components/layout/Header";
import ContactComponent from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-24">
        <ContactComponent />
      </main>
      <Footer />
    </>
  );
}
