"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  showArrow = true,
  href,
  target,
  rel,
}) {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-[14px] font-medium tracking-wide uppercase transition-all duration-300 font-sans cursor-pointer focus:outline-none";

  const variants = {
    primary:
      "bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container shadow-elevated",
    secondary:
      "border border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-on-secondary",
    tertiary:
      "text-primary hover:text-primary-container px-0 py-1 rounded-none border-b border-primary hover:border-primary-container uppercase tracking-widest text-[12px] font-semibold",
  };

  const combinedClassName = `${baseStyle} ${variants[variant]} ${className} group`;

  const content = (
    <>
      {children}
      {showArrow && variant !== "tertiary" && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//");
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
    >
      {content}
    </button>
  );
}
