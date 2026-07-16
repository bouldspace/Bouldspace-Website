"use client";

import React, { useState } from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Card from "../ui/Card";
import FadeIn from "../animations/FadeIn";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [timeline, setTimeline] = useState("");
  const [requirements, setRequirements] = useState("");
  
  // Custom Checkboxes
  const [services, setServices] = useState({
    architecture: false,
    interior: false,
    renovation: false,
    landscape: false,
    management: false,
    consulting: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [successName, setSuccessName] = useState("");

  const handleCheckboxChange = (key) => {
    setServices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    const activeServices = Object.keys(services).filter((key) => services[key]);

    try {
      const response = await fetch("https://formspree.io/f/xreogjwb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone: "+91 " + phone,
          city,
          propertyType,
          timeline,
          services: activeServices.join(", "),
          requirements,
        }),
      });

      if (response.ok) {
        setSuccessName(fullName);
        setIsSuccess(true);
        // Reset Form
        setFullName("");
        setEmail("");
        setPhone("");
        setCity("");
        setPropertyType("");
        setTimeline("");
        setRequirements("");
        setServices({
          architecture: false,
          interior: false,
          renovation: false,
          landscape: false,
          management: false,
          consulting: false,
        });
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none blueprint-grid" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Hero Area */}
        <div className="mb-20 text-center md:text-left">
          <FadeIn direction="up" duration={0.8}>
            <h1 className="font-serif text-[48px] sm:text-[64px] leading-tight text-on-surface mb-6 max-w-3xl">
              Let's Build Your <span className="text-primary">Vision.</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.1} duration={0.8}>
            <p className="font-sans text-[16px] sm:text-[18px] leading-relaxed text-secondary max-w-2xl">
              Every great space begins with a conversation. Share your aspirations with us, and together we’ll craft an architectural journey that transforms your vision into enduring reality.
            </p>
          </FadeIn>
        </div>

        {/* Grid Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDEBAR - Contact Details (4 Columns) */}
          <aside className="lg:col-span-4 space-y-12">
            <FadeIn direction="right" delay={0.1} duration={0.8}>
              <Card variant="elevated" className="bg-surface-container-lowest p-8 border border-outline-variant/15 shadow-elevated">
                <h3 className="font-serif text-[24px] text-on-surface mb-8 border-b border-outline-variant/30 pb-4">
                  Our Studio
                </h3>
                <div className="space-y-6">

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-secondary mb-1">
                        Call Us
                      </p>
                      <a href="tel:+917568903919" className="font-sans text-[14px] text-on-surface hover:text-primary transition-colors block">
                        +91 75689 03919
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-secondary mb-1">
                        Email Us
                      </p>
                      <a href="mailto:bouldspace@gmail.com" className="font-sans text-[14px] text-on-surface hover:text-primary transition-colors block">
                        bouldspace@gmail.com
                      </a>
                    </div>
                  </div>

                </div>

                {/* WhatsApp Chat */}
                <div className="mt-10 pt-6 border-t border-outline-variant/30">
                  <a
                    href="https://wa.me/917568903919"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-3.5 px-4 rounded bg-[#128C7E] border border-transparent text-white hover:bg-[#075E54] active:bg-[#054c43] transition-all duration-300 font-sans text-[12px] font-bold uppercase tracking-widest gap-2 shadow-[0_4px_14px_rgba(18,140,126,0.25)] hover:shadow-[0_6px_20px_rgba(18,140,126,0.4)] hover:-translate-y-0.5 shrink-0"
                  >
                    <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </Card>
            </FadeIn>

            {/* Highly Useful Consultation Protocol Card */}
            <FadeIn direction="right" delay={0.2} duration={0.8} className="hidden lg:block">
              <Card variant="flat" className="bg-surface-container border border-outline-variant/20 p-6 space-y-4">
                <h4 className="font-serif text-[18px] text-on-surface border-b border-outline-variant/30 pb-2">
                  Advisory Protocol
                </h4>
                <ul className="space-y-3 font-sans text-[13px] text-secondary">
                  <li className="flex gap-2 items-start">
                    <span className="text-primary font-semibold">1.</span>
                    <span>A senior project director will contact you within 24 business hours to review your conceptual vision.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-primary font-semibold">2.</span>
                    <span>We will coordinate a 45-minute structured design briefing to map spatial layouts, paths, and budget limits.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-primary font-semibold">3.</span>
                    <span>All submitted blueprint briefs and structural coordinates are strictly protected by our security protocols.</span>
                  </li>
                </ul>
              </Card>
            </FadeIn>
          </aside>

          {/* RIGHT COL - Consultation Booking Form (8 Columns) */}
          <div className="lg:col-span-8">
            <FadeIn direction="left" delay={0.2} duration={0.8}>
              <Card variant="elevated" className="bg-surface-container-lowest p-8 md:p-12 shadow-elevated border border-outline-variant/15">
                {isSuccess ? (
                  <div className="space-y-6 py-6 text-center md:text-left">
                    <div className="h-16 w-16 bg-[#128C7E]/10 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                      <svg className="h-8 w-8 text-[#128C7E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="font-serif text-[32px] md:text-[40px] text-on-surface leading-tight">
                      Briefing Transmitted
                    </h2>
                    <h3 className="font-serif text-[22px] text-on-surface font-normal">
                      Thank you, {successName || "Guest"}.
                    </h3>
                    <p className="font-sans text-[15px] text-secondary leading-relaxed max-w-xl mx-auto md:mx-0">
                      Your developmental coordinates and design briefs have been securely transmitted to our studio. Our senior project director will coordinate with our advisory team and contact you via email or phone within 24 business hours to align on your conceptual blueprint.
                    </p>
                    <div className="pt-6 border-t border-outline-variant/30 flex justify-center md:justify-start">
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="font-sans text-[12px] font-bold uppercase tracking-widest text-primary hover:text-primary-hover border-b border-primary hover:border-primary-hover transition-colors duration-300 pb-0.5 cursor-pointer focus:outline-none"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-[32px] md:text-[40px] text-on-surface mb-8">
                      Start Your Project
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-8">
                      
                      {/* Grid for Personal Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Input
                          label="Full Name *"
                          id="stitch-fullname"
                          placeholder="John Doe"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))}
                          required
                        />
                        <Input
                          label="Email Address *"
                          id="stitch-email"
                          type="email"
                          placeholder="john@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value.replace(/[^a-zA-Z0-9@._+-]/g, ""))}
                          required
                        />
                        <div className="flex flex-col gap-2 relative">
                          <label htmlFor="stitch-phone" className="font-sans text-[11px] font-semibold uppercase tracking-wider text-primary">
                            Phone Number *
                          </label>
                          <div className="relative flex items-center">
                            <span className="absolute left-0 text-on-surface-variant text-[16px] font-sans">+91</span>
                            <input
                              id="stitch-phone"
                              type="tel"
                              placeholder="75689 03919"
                              value={phone}
                              onChange={(e) => {
                                const val = e.target.value.replace(/\D/g, "");
                                if (val.length <= 10) {
                                  setPhone(val);
                                }
                              }}
                              className="w-full pl-10 pr-0 py-2 bg-transparent border-b border-outline text-on-surface placeholder:text-outline-variant/60 focus:outline-none focus:border-primary transition-colors duration-300 font-sans"
                              required
                            />
                          </div>
                        </div>
                        <Input
                          label="City"
                          id="stitch-city"
                          placeholder="Bengaluru"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>

                      {/* Project Specifics Grid */}
                      <div className="pt-6 border-t border-outline-variant/30">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          {/* Property Type */}
                          <div className="flex flex-col gap-2">
                            <label htmlFor="stitch-property" className="font-sans text-[11px] font-semibold uppercase tracking-wider text-primary">
                              Property Type
                            </label>
                            <select
                              id="stitch-property"
                              value={propertyType}
                              onChange={(e) => setPropertyType(e.target.value)}
                              className="w-full bg-transparent border-b border-outline py-2 text-on-surface focus:outline-none focus:border-primary transition-colors duration-300 font-sans cursor-pointer"
                            >
                              <option value="">Select Property Type</option>
                              <option value="apartment">Apartment / Flat</option>
                              <option value="villa">Villa / Independent House</option>
                              <option value="office">Commercial Office Space</option>
                              <option value="retail">Retail Space</option>
                              <option value="other">Other</option>
                            </select>
                          </div>

                          {/* Project Timeline */}
                          <div className="flex flex-col gap-2">
                            <label htmlFor="stitch-timeline" className="font-sans text-[11px] font-semibold uppercase tracking-wider text-primary">
                              Project Timeline
                            </label>
                            <select
                              id="stitch-timeline"
                              value={timeline}
                              onChange={(e) => setTimeline(e.target.value)}
                              className="w-full bg-transparent border-b border-outline py-2 text-on-surface focus:outline-none focus:border-primary transition-colors duration-300 font-sans cursor-pointer"
                            >
                              <option value="">When do you want to start?</option>
                              <option value="immediate">Immediately</option>
                              <option value="1-3months">Within 1-3 Months</option>
                              <option value="3-6months">3-6 Months</option>
                              <option value="planning">Just Planning Phase</option>
                            </select>
                          </div>
                        </div>

                        {/* Services Needed Checks */}
                        <div className="mb-8">
                          <label className="block font-sans text-[11px] font-semibold uppercase tracking-wider text-primary mb-4">
                            Services Needed (Select all that apply)
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                              { key: "architecture", label: "Architecture" },
                              { key: "interior", label: "Interior Design" },
                              { key: "renovation", label: "Renovation" },
                              { key: "landscape", label: "Landscape" },
                              { key: "management", label: "Project Mgmt" },
                              { key: "consulting", label: "Consulting" },
                            ].map((srv) => {
                              const isChecked = services[srv.key];
                              return (
                                <button
                                  key={srv.key}
                                  type="button"
                                  onClick={() => handleCheckboxChange(srv.key)}
                                  className={`px-4 py-2 border rounded font-sans text-[14px] transition-all duration-200 cursor-pointer ${
                                    isChecked
                                      ? "bg-primary border-primary text-on-primary"
                                      : "border-secondary text-secondary hover:border-primary hover:text-primary"
                                  }`}
                                >
                                  {srv.label}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Requirements Message */}
                        <Input
                          label="Project Requirements & Vision"
                          id="stitch-requirements"
                          placeholder="Tell us about your space, aesthetic preferences, and what you hope to achieve..."
                          value={requirements}
                          onChange={(e) => setRequirements(e.target.value)}
                          textarea
                          rows={5}
                        />
                      </div>

                      {/* Submit Call */}
                      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                        {isError && (
                          <span className="font-sans text-[13px] text-red-500 font-medium">
                            Transmission failed. Please retry or chat on WhatsApp.
                          </span>
                        )}
                        <div className="sm:ml-auto">
                          <Button 
                            type="submit" 
                            variant="primary"
                            className={isSubmitting ? "opacity-50 pointer-events-none" : ""}
                          >
                            {isSubmitting ? "Transmitting..." : "Submit Request"}
                          </Button>
                        </div>
                      </div>

                    </form>
                  </>
                )}
              </Card>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
