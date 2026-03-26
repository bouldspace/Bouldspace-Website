"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xreogjwb", {
        method: "POST",
        body: new FormData(e.target),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        e.target.reset(); // Reset form fields
        setTimeout(() => setSubmitted(false), 8000);
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-background relative z-10">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4 md:mb-6 text-foreground">
              Ready to Upgrade Your Space?
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Book a free consultation with our design experts today. No commitments, just pure inspiration.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-surface rounded-3xl p-6 md:p-12 shadow-xl border border-border"
          >
            {submitted ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send size={32} />
                </div>
                <h4 className="text-2xl font-heading font-bold mb-3 text-foreground">Request Received!</h4>
                <p className="text-muted-foreground text-lg">
                  Thank you for reaching out. One of our design consultants will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
                    <input name="name" suppressHydrationWarning type="text" id="name" required className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="XYZ" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number *</label>
                    <input name="phone" suppressHydrationWarning type="tel" id="phone" required className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                  <input name="email" suppressHydrationWarning type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="xyz@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="requirements" className="text-sm font-medium text-foreground">Project Requirements *</label>
                  <textarea name="requirements" suppressHydrationWarning id="requirements" required rows={4} className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none" placeholder="Tell us about your space and what you're looking for..."></textarea>
                </div>

                <button 
                  suppressHydrationWarning
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-foreground text-background font-bold rounded-xl hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Book Free Consultation"}
                  {!isSubmitting && <Send size={18} />}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 md:space-y-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center text-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-heading font-bold text-lg mb-2 text-foreground">Visit Studio</h5>
                  <p className="text-muted-foreground leading-relaxed">123 Design Avenue, XYZ, India XXXXX</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center text-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-heading font-bold text-lg mb-2 text-foreground">Call Us</h5>
                  <p className="text-muted-foreground leading-relaxed">+91 75689 03919<br/>Mon-Sat, 10am - 7pm</p>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl overflow-hidden border border-border h-48 md:h-64 relative shadow-sm">
              {/* Map Placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.0858102755255!3d28.462804391621245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18cca5c55555%3A0xc3f1402283a000d0!2sDLF%20Phase%204%2C%20Sector%2028%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>

            <div className="p-6 bg-green-50 dark:bg-green-950/30 rounded-2xl border border-green-100 dark:border-green-900/50 flex items-center justify-between">
              <div>
                <h5 className="font-heading font-bold text-green-900 dark:text-green-400 mb-1">Prefer WhatsApp?</h5>
                <p className="text-green-700 dark:text-green-500/80 text-sm">Get instant replies from our team.</p>
              </div>
              <a 
                href="https://wa.me/+917568903919" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-colors flex items-center gap-2 shadow-lg shadow-green-500/20"
              >
                <MessageCircle size={20} />
                Chat Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
