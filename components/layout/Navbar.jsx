"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "How It Works", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 glass" : "py-4 md:py-6 bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center rounded-sm font-heading font-bold text-xl leading-none">
            B
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-foreground">
            Bouldspace.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="px-6 py-2.5 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            Get Free Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden h-screen"
          >
            {navLinks.map((link, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={link.name}
              >
                <Link
                  href={link.href}
                  className="text-2xl font-heading font-medium text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="mt-4"
            >
              <Link
                href="#contact"
                className="px-8 py-4 bg-foreground text-background text-lg font-medium rounded-full hover:bg-foreground/90 transition-all inline-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Free Consultation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
