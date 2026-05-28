import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://bankzdesign.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BankZ Design™ — Sales, Marketing & Advertising Agency",
    template: "%s | BankZ Design™",
  },
  description:
    "BankZ Design is your go-to sales agent. We sell, market, and advertise your brand with a money-back guarantee. Call 0659521497 for a free quote.",
  keywords: [
    "sales agency South Africa",
    "marketing agency",
    "advertising agency",
    "BankZ Design",
    "brand marketing",
    "sales agent",
    "money-back guarantee marketing",
    "digital advertising",
    "lead generation",
  ],
  authors: [{ name: "BankZ Design™" }],
  creator: "BankZ Design™",
  publisher: "BankZ Design™",
  formatDetection: { telephone: true, email: true },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "BankZ Design™",
    title: "BankZ Design™ — If You Need Something Sold, Marketed & Advertised",
    description:
      "Results-driven sales, marketing & advertising agency. Money-back guarantee. Call 0659521497.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BankZ Design™ — Perfection in Sales, Marketing & Advertising",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BankZ Design™ — Sales, Marketing & Advertising Agency",
    description:
      "Your go-to sales agent. Money-back guarantee. Call 0659521497 for a free quote.",
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
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "BankZ Design™",
    description:
      "Results-driven sales, marketing, and advertising agency with a money-back guarantee.",
    url: siteUrl,
    telephone: "+27659521497",
    email: "info@bankzdesign.co.za",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ZA",
    },
    sameAs: [],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
    priceRange: "$$",
    image: `${siteUrl}/og-image.png`,
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sales",
          description:
            "Strategic outreach connecting your product to the right buyers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Marketing",
          description:
            "Data-driven campaigns that amplify your brand presence.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Advertising",
          description:
            "Bold, attention-grabbing ads that put your brand in the spotlight.",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
