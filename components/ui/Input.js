import React from "react";

export default function Input({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
  textarea = false,
  rows = 4,
}) {
  const inputStyle =
    "w-full bg-transparent border-b border-outline py-2 text-on-surface placeholder:text-outline-variant/60 focus:outline-none focus:border-primary transition-colors duration-300 font-sans";

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="font-sans text-[11px] font-semibold uppercase tracking-wider text-primary"
        >
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={inputStyle}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={inputStyle}
        />
      )}
    </div>
  );
}
