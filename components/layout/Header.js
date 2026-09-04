"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedGroup, setExpandedGroup] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleGroup = (groupName) => {
    if (expandedGroup === groupName) {
      setExpandedGroup(null);
    } else {
      setExpandedGroup(groupName);
    }
  };

  const navGroups = [
    {
      name: "Studio",
      links: [
        { name: "About Bouldspace", href: "/about", desc: "Our origin, values, and architectural philosophy" },
        { name: "Knowledge FAQ", href: "/faq", desc: "Answers to our design and construction protocols" },
      ],
    },
    {
      name: "Expertise",
      links: [
        { name: "Services Overview", href: "/services", desc: "Our 8 core spatial & engineering capabilities", category: "Execution" },
        { name: "Architecture Planning", href: "/services/architecture", desc: "Visionary design and spatial planning systems", category: "Design" },
        { name: "Interior Curation", href: "/services/interior-design", desc: "Timeless curations and custom-tailored spaces", category: "Design" },
        { name: "Modular Kitchens", href: "/services/modular-kitchen", desc: "Precision casework and luxury culinary spaces", category: "Design" },
        { name: "Furniture Curation", href: "/services/furniture-decor", desc: "Bespoke furniture and spatial styling curations", category: "Design" },
        { name: "Home Dressing", href: "/services/home-decor", desc: "Timeless home decor and spatial styling curations", category: "Design" },
        { name: "Renovations & Retrofits", href: "/services/renovations", desc: "Thoughtful structural modernizations and retrofits", category: "Execution" },
        { name: "Project Management (PMC)", href: "/services/pmc", desc: "Integrated execution management and control systems", category: "Execution" },
        { name: "Turnkey Solutions", href: "/services/turnkey", desc: "End-to-end luxury design, construction, and delivery", category: "Execution" },
      ],
    },
    {
      name: "Work",
      links: [
        { name: "Development Process", href: "/process", desc: "Our 6-chapter design-to-handover protocol" },
        { name: "Featured Projects", href: "/projects", desc: "A curated monograph of landmark executions" },
        { name: "Design Idea Gallery", href: "/gallery", desc: "Visual catalogue of category and material inspirations" },
        { name: "Operating Sectors", href: "/sectors", desc: "High-end residential, corporate, and space habitats" },
      ],
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav-scrolled border-b border-outline-variant/20"
            : "glass-nav border-b border-outline-variant/10 py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo & Wordmark Brand Lockup */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none py-1" aria-label="Bouldspace Home">
            <img
              src="/logos/logo-maskable-nobg.svg"
              alt="Bouldspace Emblem"
              className="h-9 sm:h-10 md:h-11 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <img
              src="/logos/logo-wordmark-nobg.svg"
              alt="Bouldspace"
              className="h-4.5 sm:h-5 md:h-5.5 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 z-50">
            {navGroups.map((group) => {
              const isGroupActive = group.links.some(link => pathname === link.href || pathname.startsWith(link.href + "/"));
              return (
                <div
                  key={group.name}
                  className="relative py-2"
                  onMouseEnter={() => setActiveDropdown(group.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`font-sans text-[11px] font-semibold uppercase tracking-widest transition-colors duration-300 focus:outline-none flex items-center gap-1 cursor-pointer py-1 ${
                      isGroupActive || activeDropdown === group.name
                        ? "text-primary"
                        : "text-secondary hover:text-primary"
                    }`}
                  >
                    {group.name}
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-300 ${
                        activeDropdown === group.name ? "rotate-180 text-primary" : "text-secondary"
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === group.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 rounded border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-elevated z-50 transition-all ${
                          group.name === "Expertise" ? "w-[560px] md:w-[620px]" : "w-72"
                        }`}
                      >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2.5 h-2.5 rotate-45 bg-surface-container-lowest border-t border-l border-outline-variant/30" />
                        
                        {group.name === "Expertise" ? (
                          <div className="grid grid-cols-2 gap-8 relative z-10">
                            {/* Column 1: Spatial Design & Styling */}
                            <div className="flex flex-col gap-4">
                              <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-primary border-b border-outline-variant/20 pb-2 mb-1">
                                Spatial Design & Styling
                              </span>
                              {group.links.filter(l => l.category === "Design").map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                  <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="group flex flex-col gap-0.5 text-left focus:outline-none"
                                  >
                                    <span className={`font-serif text-[14px] font-normal transition-colors duration-300 ${
                                      isActive ? "text-primary font-semibold" : "text-on-surface group-hover:text-primary"
                                    }`}>
                                      {link.name}
                                    </span>
                                    <span className="font-sans text-[9.5px] text-secondary/70 leading-normal">
                                      {link.desc}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                            
                            {/* Column 2: Coordination & Execution */}
                            <div className="flex flex-col gap-4">
                              <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-primary border-b border-outline-variant/20 pb-2 mb-1">
                                Coordination & Execution
                              </span>
                              {group.links.filter(l => l.category === "Execution").map((link) => {
                                const isActive = pathname === link.href;
                                const isOverview = link.href === "/services";
                                return (
                                  <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className={`group flex flex-col gap-0.5 text-left focus:outline-none transition-all duration-300 ${
                                      isOverview 
                                        ? "bg-primary/5 border border-primary/20 p-3 rounded hover:bg-primary/10 my-1" 
                                        : ""
                                    }`}
                                  >
                                    <div className="flex justify-between items-center w-full">
                                      <span className={`font-serif text-[14px] font-normal transition-colors duration-300 ${
                                        isActive ? "text-primary font-semibold" : "text-on-surface group-hover:text-primary"
                                      } ${isOverview ? "text-primary font-semibold" : ""}`}>
                                        {link.name}
                                      </span>
                                      {isOverview && (
                                        <span className="font-sans text-[8px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded shrink-0">
                                          Main Hub
                                        </span>
                                      )}
                                    </div>
                                    <span className="font-sans text-[9.5px] text-secondary/70 leading-normal">
                                      {link.desc}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col gap-4 relative z-10">
                            {group.links.map((link) => {
                              const isActive = pathname === link.href;
                              return (
                                <Link
                                  key={link.name}
                                  href={link.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="group flex flex-col gap-0.5 text-left focus:outline-none"
                                >
                                  <span className={`font-serif text-[15px] font-normal transition-colors duration-300 ${
                                    isActive ? "text-primary font-semibold" : "text-on-surface group-hover:text-primary"
                                  }`}>
                                    {link.name}
                                  </span>
                                  <span className="font-sans text-[10px] text-secondary/70 leading-normal">
                                    {link.desc}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            <Link
              href="/pricing"
              className={`font-sans text-[11px] font-semibold uppercase tracking-widest transition-colors duration-300 focus:outline-none py-1 ${
                pathname === "/pricing" ? "text-primary border-b border-primary pb-0.5" : "text-secondary hover:text-primary"
              }`}
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop Action */}
          <div className="hidden lg:block">
            <Button variant="primary" showArrow={true} href="/contact">
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-on-surface focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[73px] bg-surface z-40 lg:hidden flex flex-col p-8 border-t border-outline-variant/30 overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-outline-variant/15 pb-4 mb-2">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5">
                <img
                  src="/logos/logo-maskable-nobg.svg"
                  alt="Bouldspace Emblem"
                  className="h-8 w-auto object-contain shrink-0"
                />
                <img
                  src="/logos/logo-wordmark-nobg.svg"
                  alt="Bouldspace"
                  className="h-4.5 w-auto object-contain"
                />
              </Link>
            </div>
            <nav className="flex flex-col gap-4 my-auto overflow-y-auto py-4">
              {navGroups.map((group, idx) => {
                const isGroupExpanded = expandedGroup === group.name;
                return (
                  <motion.div
                    key={group.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className="flex flex-col gap-1 border-b border-outline-variant/10 pb-3"
                  >
                    <button
                      onClick={() => toggleGroup(group.name)}
                      className="flex justify-between items-center w-full text-left py-2 focus:outline-none cursor-pointer"
                    >
                      <span className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
                        {group.name}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-secondary transition-transform duration-300 ${
                          isGroupExpanded ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isGroupExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-2.5 pl-3 border-l border-outline-variant/30 mt-2 py-1">
                            {group.links.map((link) => {
                              const isActive = pathname === link.href;
                              const isOverview = link.href === "/services";
                              return (
                                <Link
                                  key={link.name}
                                  onClick={() => setIsOpen(false)}
                                  href={link.href}
                                  className={`font-serif text-[18px] tracking-tight flex items-center justify-between focus:outline-none w-full ${
                                    isOverview
                                      ? "border-l-2 border-primary pl-2.5 my-1 text-primary font-medium"
                                      : isActive ? "text-primary" : "text-on-surface hover:text-primary"
                                  }`}
                                >
                                  <span>{link.name}</span>
                                  {isOverview && (
                                    <span className="font-sans text-[8px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded shrink-0">
                                      Overview
                                    </span>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="pt-2 border-b border-outline-variant/10 pb-4"
              >
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/pricing"
                  className={`font-sans text-[11px] font-bold uppercase tracking-[0.25em] block focus:outline-none ${
                    pathname === "/pricing" ? "text-primary" : "text-secondary hover:text-primary"
                  }`}
                >
                  Pricing Models
                </Link>
              </motion.div>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-auto flex flex-col gap-4 pt-4"
            >
              <div className="h-px bg-outline-variant/30" />
              <div className="flex flex-col gap-1.5">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-secondary">
                  General Inquiries
                </span>
                <a
                  href="mailto:bouldspace@gmail.com"
                  className="font-serif text-[16px] text-on-surface hover:text-primary"
                >
                  bouldspace@gmail.com
                </a>
              </div>
              <Button
                variant="primary"
                onClick={() => setIsOpen(false)}
                className="w-full justify-center"
                href="/contact"
              >
                Get Free Quote
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
