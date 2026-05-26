import { Hanken_Grotesk, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const libreCaslonText = Libre_Caslon_Text({
  variable: "--font-libre-caslon-text",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

export const metadata = {
  title: "Bouldspace | Luxury Construction Management & Architectural Consulting",
  description: "Bouldspace delivers ultra-premium architecture, technical planning, project management, and high-end construction solutions from concept to completion.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${libreCaslonText.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-surface text-on-surface">
        {children}
      </body>
    </html>
  );
}
