"use client";

import React, { useState } from "react";
import { Phone, Mail, CheckCircle2, AlertCircle, Briefcase, Link as LinkIcon, MessageSquare } from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Card from "../ui/Card";
import FadeIn from "../animations/FadeIn";

export default function WorkWithUsForm() {
  const [fullName, setFullName] = useState("");
  const [entityName, setEntityName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [track, setTrack] = useState("Architecture & Spatial Design");
  const [experience, setExperience] = useState("3-7 Years");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [proposal, setProposal] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [successName, setSuccessName] = useState("");

  const tracksList = [
    "Architecture & Spatial Design",
    "Artisanship & Custom Millwork",
    "General Contracting & Civil",
    "MEP & Smart Automation",
    "Project Direction & PMC",
  ];

  const experienceList = [
    "1-3 Years",
    "3-7 Years",
    "7-15 Years",
    "15+ Years (Established Practice)",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      const response = await fetch("https://formspree.io/f/xreogjwb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          inquiryType: "Work With Us / Collaboration Proposal",
          fullName,
          entityOrStudioName: entityName || "Independent Practitioner",
          email,
          phone: "+91 " + phone,
          city,
          collaborationTrack: track,
          yearsOfExperience: experience,
          portfolioOrWebsite: portfolioUrl,
          capabilitiesProposal: proposal,
        }),
      });

      if (response.ok) {
        setSuccessName(fullName);
        setIsSuccess(true);
        // Reset form
        setFullName("");
        setEntityName("");
        setEmail("");
        setPhone("");
        setCity("");
        setPortfolioUrl("");
        setProposal("");
      } else {
        setIsError(true);
      }
    } catch (err) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="collaboration-form" className="py-24 bg-surface relative overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none blueprint-grid" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 max-w-3xl">
          <FadeIn direction="up" duration={0.8}>
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
              Direct Protocol Intake
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1} duration={0.8}>
            <h2 className="font-serif text-[36px] sm:text-[48px] leading-tight text-on-surface font-normal mt-2">
              Submit Your Capabilities Monograph.
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} duration={0.8}>
            <p className="font-sans text-[16px] leading-relaxed text-secondary font-normal mt-3">
              Share your credentials, portfolio, and capacity. Our technical directors review
              every submission to evaluate potential alignment on active and upcoming luxury commissions.
            </p>
          </FadeIn>
        </div>

        {/* Form and Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Application Form (8 cols) */}
          <div className="lg:col-span-8">
            <FadeIn direction="up" delay={0.1} duration={0.8}>
              <Card variant="elevated" className="bg-surface-container-lowest p-8 sm:p-12 border border-outline-variant/15 shadow-elevated">
                
                {isSuccess ? (
                  <div className="py-12 flex flex-col items-center text-center space-y-6">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <div className="space-y-2 max-w-md">
                      <h3 className="font-serif text-[28px] text-on-surface">
                        Proposal Received, {successName}.
                      </h3>
                      <p className="font-sans text-[15px] leading-relaxed text-secondary">
                        Your collaboration monograph has been logged into our technical partner database.
                        Our project directors will review your portfolio and reach out for technical alignment.
                      </p>
                    </div>
                    <Button
                      variant="secondary"
                      onClick={() => setIsSuccess(false)}
                      className="mt-4"
                    >
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Error Banner */}
                    {isError && (
                      <div className="p-4 rounded bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-700">
                        <AlertCircle className="h-5 w-5 shrink-0" />
                        <p className="font-sans text-[13px]">
                          Submission was interrupted. Please verify your connection or email us directly at{" "}
                          <a href="mailto:bouldspace@gmail.com" className="underline font-bold">
                            bouldspace@gmail.com
                          </a>.
                        </p>
                      </div>
                    )}

                    {/* Collaboration Track Selector */}
                    <div className="space-y-3">
                      <label className="font-sans text-[11px] font-bold uppercase tracking-wider text-primary block">
                        Select Primary Discipline / Track *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {tracksList.map((t) => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setTrack(t)}
                            className={`py-3 px-4 rounded text-left font-sans text-[13px] border transition-all duration-200 cursor-pointer ${
                              track === t
                                ? "bg-primary text-on-primary border-primary font-medium shadow-sm"
                                : "bg-surface-container border-outline-variant/30 text-on-surface hover:border-primary/50"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Personal & Entity Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      <Input
                        label="Full Name / Principal Lead *"
                        id="fullName"
                        placeholder="Ar. Vikramaditya Sharma"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                      <Input
                        label="Studio / Enterprise Name (Optional)"
                        id="entityName"
                        placeholder="Sharma & Associates Architects"
                        value={entityName}
                        onChange={(e) => setEntityName(e.target.value)}
                      />
                    </div>

                    {/* Contact Channels Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        label="Email Address *"
                        id="email"
                        type="email"
                        placeholder="principal@sharma-arch.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="phone"
                          className="font-sans text-[11px] font-semibold uppercase tracking-wider text-primary"
                        >
                          Phone Number (with +91) *
                        </label>
                        <div className="flex items-center border-b border-outline focus-within:border-primary transition-colors">
                          <span className="font-sans text-[14px] text-secondary pr-2 select-none">
                            +91
                          </span>
                          <input
                            id="phone"
                            type="tel"
                            placeholder="75689 03919"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="w-full bg-transparent py-2 text-on-surface placeholder:text-outline-variant/60 focus:outline-none font-sans"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Location & Experience Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        label="City / Operating Base *"
                        id="city"
                        placeholder="Delhi NCR / Mumbai / Bengaluru"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="experience"
                          className="font-sans text-[11px] font-semibold uppercase tracking-wider text-primary"
                        >
                          Years of Practice / Execution *
                        </label>
                        <select
                          id="experience"
                          value={experience}
                          onChange={(e) => setExperience(e.target.value)}
                          className="w-full bg-transparent border-b border-outline py-2 text-on-surface focus:outline-none focus:border-primary transition-colors font-sans text-[14px]"
                        >
                          {experienceList.map((exp) => (
                            <option key={exp} value={exp} className="bg-surface text-on-surface">
                              {exp}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Portfolio / Website URL */}
                    <Input
                      label="Portfolio / Website / Drive Link *"
                      id="portfolioUrl"
                      type="url"
                      placeholder="https://drive.google.com/... or https://yourstudio.com"
                      value={portfolioUrl}
                      onChange={(e) => setPortfolioUrl(e.target.value)}
                      required
                    />

                    {/* Capabilities & Proposal Brief */}
                    <Input
                      label="Capabilities Monograph & Collaboration Proposal *"
                      id="proposal"
                      textarea
                      rows={4}
                      placeholder="Summarize your key capabilities, machinery/crafts in-house, past benchmark projects executed, and how you envision partnering with Bouldspace..."
                      value={proposal}
                      onChange={(e) => setProposal(e.target.value)}
                      required
                    />

                    {/* Form Submission Button */}
                    <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-outline-variant/20">
                      <p className="font-sans text-[12px] text-secondary">
                        By submitting, you agree to technical credential verification and our professional standards of rigor.
                      </p>
                      <Button
                        type="submit"
                        variant="primary"
                        showArrow={true}
                        disabled={isSubmitting}
                        className="shrink-0"
                      >
                        {isSubmitting ? "Transmitting Proposal..." : "Submit Monograph"}
                      </Button>
                    </div>

                  </form>
                )}

              </Card>
            </FadeIn>
          </div>

          {/* Right Sidebar: Direct Studio Contacts (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <FadeIn direction="up" delay={0.2} duration={0.8}>
              <Card variant="elevated" className="bg-surface-container-lowest p-8 border border-outline-variant/15 shadow-elevated space-y-6">
                
                {/* Brand Lockup Header */}
                <div className="border-b border-outline-variant/20 pb-5">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src="/logos/logo-maskable-nobg.svg"
                      alt="Bouldspace Emblem"
                      className="h-9 w-auto object-contain shrink-0"
                    />
                    <img
                      src="/logos/logo-wordmark-nobg.svg"
                      alt="Bouldspace"
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-primary font-bold block">
                    Talent & Vendor Acquisition Desk
                  </span>
                </div>

                <p className="font-sans text-[14px] leading-relaxed text-secondary">
                  Have an immediate master build to discuss or represent an established tier-1 firm? Connect directly with our partnership directors:
                </p>

                {/* Direct Contact Channels */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-secondary mb-0.5">
                        Direct Desk
                      </p>
                      <a
                        href="tel:+917568903919"
                        className="font-sans text-[14px] text-on-surface hover:text-primary transition-colors font-medium block"
                      >
                        +91 75689 03919
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-secondary mb-0.5">
                        Portfolio Inquiries
                      </p>
                      <a
                        href="mailto:bouldspace@gmail.com"
                        className="font-sans text-[14px] text-on-surface hover:text-primary transition-colors font-medium block"
                      >
                        bouldspace@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Chat Trigger */}
                <div className="pt-4 border-t border-outline-variant/20">
                  <a
                    href="https://wa.me/917568903919"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-3.5 px-4 rounded bg-[#128C7E] border border-transparent text-white hover:bg-[#075E54] active:bg-[#054c43] transition-all duration-300 font-sans text-[12px] font-bold uppercase tracking-widest gap-2 shadow-[0_4px_14px_rgba(18,140,126,0.25)] hover:shadow-[0_6px_20px_rgba(18,140,126,0.4)] hover:-translate-y-0.5"
                  >
                    <MessageSquare className="h-4 w-4 fill-current" />
                    Direct WhatsApp Chat
                  </a>
                </div>

              </Card>
            </FadeIn>

            {/* Confidentiality & Integrity Assurance */}
            <FadeIn direction="up" delay={0.3} duration={0.8}>
              <div className="p-6 rounded bg-surface-container border border-outline-variant/15 space-y-2">
                <div className="flex items-center gap-2 font-serif text-[16px] text-on-surface">
                  <Briefcase className="h-4 w-4 text-primary shrink-0" />
                  <span>NDA & IP Protection</span>
                </div>
                <p className="font-sans text-[13px] leading-relaxed text-secondary">
                  All shared portfolios, proprietary manufacturing details, and architectural drawings are treated with strict confidentiality under standard mutual non-disclosure protocols.
                </p>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
