import React from "react";

export default function Card({
  children,
  className = "",
  variant = "elevated",
  onClick,
}) {
  const baseStyle =
    "p-8 md:p-10 rounded transition-all duration-400 font-sans";

  const variants = {
    elevated: "bg-surface-container-lowest shadow-elevated border border-outline-variant/15 shadow-premium-hover",
    flat: "bg-surface-container border border-outline-variant/20",
    outline: "border border-outline bg-transparent",
    dark: "bg-inverse-surface text-inverse-on-surface shadow-elevated",
  };

  return (
    <div
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className} ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      {children}
    </div>
  );
}
