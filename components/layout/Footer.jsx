import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-brand-100 pt-12 md:pt-20 pb-10 border-t border-white/10 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-100 text-brand-950 flex items-center justify-center rounded-sm font-heading font-bold text-xl leading-none">
                B
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                Bouldspace.
              </span>
            </Link>
            <p className="text-brand-300 text-sm leading-relaxed pr-4">
              End-to-end premium interior design solutions. We transform spaces into breathtaking homes with unmatched perfection and transparency.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "#" },
                { name: "How It Works", href: "#process" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "About Us", href: "#about" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-brand-300 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-brand-300">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span>123 Design Avenue, XYZ, India XXXXX</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-300">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+91 75689 03919</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-300">
                <Mail size={18} className="text-accent shrink-0" />
                <span>alirazactae@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-400">
          <p>© {currentYear} Bouldspace Design Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
