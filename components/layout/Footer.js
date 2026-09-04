import React from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import Button from "../ui/Button";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Development Process", href: "/process" },
    { name: "Featured Projects", href: "/projects" },
    { name: "Design Idea Gallery", href: "/gallery" },
    { name: "Pricing Models", href: "/pricing" },
    { name: "Knowledge FAQ", href: "/faq" },
    { name: "Contact Studio", href: "/contact" },
  ];

  const services = [
    { name: "Architecture Planning", href: "/services/architecture" },
    { name: "Renovations & Retrofits", href: "/services/renovations" },
    { name: "Interior Curation", href: "/services/interior-design" },
    { name: "Modular Kitchens", href: "/services/modular-kitchen" },
    { name: "Furniture & Decor Curation", href: "/services/furniture-decor" },
    { name: "Home Decor & Dressing", href: "/services/home-decor" },
    { name: "Project Management (PMC)", href: "/services/pmc" },
    { name: "Turnkey Solutions", href: "/services/turnkey" },
  ];

  const industries = [
    { name: "Luxury Residential", href: "/sectors#luxury-residential" },
    { name: "Commercial & Corporate", href: "/sectors#commercial" },
    { name: "Institutional Masterplans", href: "/sectors#institutional" },
    { name: "Industrial & Precision", href: "/sectors#industrial" },
  ];

  return (
    <footer className="bg-[#1e1b18] text-[#fbefe5] pt-12 pb-12 relative overflow-hidden">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Mid Section - Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pt-8 pb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3.5 focus:outline-none py-1 group" aria-label="Bouldspace Home">
              <img
                src="/logos/logo-maskable-nobg.svg"
                alt="Bouldspace Emblem"
                className="h-10 sm:h-12 md:h-13 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
              />
              <img
                src="/logos/logo-wordmark-nobg.svg"
                alt="Bouldspace"
                className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
              />
            </Link>
            <p className="font-sans text-[15px] leading-relaxed text-[#cdc5c0] max-w-sm">
              We balance aesthetic intelligence with structural rigor to manage, consult, and build high-end residential, commercial, and exploratory space architecture.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="h-10 w-10 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-on-primary transition-all duration-300">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-on-primary transition-all duration-300">
                <svg className="h-4 w-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="h-10 w-10 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-on-primary transition-all duration-300">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-[12px] font-semibold uppercase tracking-wider text-primary mb-6">
              Studio
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-sans text-[14px] text-[#cdc5c0] hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-[12px] font-semibold uppercase tracking-wider text-primary mb-6">
              Expertise
            </h4>
            <ul className="space-y-4">
              {services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-sans text-[14px] text-[#cdc5c0] hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-sans text-[12px] font-semibold uppercase tracking-wider text-primary mb-6">
              Contact
            </h4>
            <ul className="space-y-4 font-sans text-[14px] text-[#cdc5c0]">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+917568903919" className="hover:text-primary transition-colors">+91 75689 03919</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:bouldspace@gmail.com" className="hover:text-primary transition-colors">bouldspace@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright & Disclaimers */}
        <div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 font-sans text-[12px] text-[#cdc5c0]">
            <img
              src="/logos/logo-maskable-nobg.svg"
              alt="Bouldspace"
              className="h-5 w-auto object-contain shrink-0"
            />
            <span>
              © {new Date().getFullYear()} Bouldspace. Crafted with precision & purpose. All rights reserved.
            </span>
          </div>
          <div className="flex gap-8 font-sans text-[12px]">
            <a href="#" className="text-[#cdc5c0] hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#cdc5c0] hover:text-primary transition-colors">Terms of Operations</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
