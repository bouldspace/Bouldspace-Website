import { Hanken_Grotesk, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/animations/SmoothScrollProvider";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bouldspace.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bouldspace | Luxury Construction Management & Architectural Consulting",
    template: "%s | Bouldspace",
  },
  description:
    "Bouldspace delivers ultra-premium architecture, technical planning, project management, and high-end construction solutions from concept to completion.",
  keywords: [
    "Bouldspace",
    "luxury architecture",
    "architectural consulting India",
    "interior curation",
    "turnkey construction",
    "project management consultancy PMC",
    "modular kitchens",
    "luxury renovations",
    "bespoke residential design",
    "high-end commercial architecture",
  ],
  authors: [{ name: "Bouldspace" }],
  creator: "Bouldspace",
  publisher: "Bouldspace",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/logos/favicon.ico", sizes: "any" },
      { url: "/logos/logo-maskable-nobg.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logos/favicon.ico",
    apple: [
      { url: "/logos/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Bouldspace | Luxury Construction Management & Architectural Consulting",
    description:
      "Bouldspace delivers ultra-premium architecture, technical planning, project management, and high-end construction solutions from concept to completion.",
    url: siteUrl,
    siteName: "Bouldspace",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bouldspace - Visionary Design. Precision Execution.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bouldspace | Luxury Construction Management & Architectural Consulting",
    description:
      "Bouldspace delivers ultra-premium architecture, technical planning, project management, and high-end construction solutions from concept to completion.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ArchitecturalFirm",
  name: "Bouldspace",
  url: siteUrl,
  logo: `${siteUrl}/logos/logo-maskable-nobg.svg`,
  image: `${siteUrl}/og-image.png`,
  description:
    "Bouldspace delivers ultra-premium architecture, technical planning, project management, and high-end construction solutions from concept to completion.",
  telephone: "+91-75689-03919",
  email: "bouldspace@gmail.com",
  priceRange: "$$$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: ["https://wa.me/917568903919"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Architectural & Construction Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Architecture Planning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Curation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Modular Kitchens" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Furniture & Decor Curation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renovations & Retrofits" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Project Management (PMC)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Turnkey Solutions" } },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${libreCaslonText.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-surface text-on-surface">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
