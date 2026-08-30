import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://weddingalbumindia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Wedding Album Printing & Designing in Delhi | Wedding Album India",
    template: "%s | Wedding Album India",
  },

  description:
    "Wedding Album India offers premium wedding album printing and designing in Delhi. Explore luxury acrylic, wooden, 3D, matte and premium wedding photo albums.",

  keywords: [
    "wedding album printing Delhi",
    "wedding album designing Delhi",
    "wedding photo album Delhi",
    "premium wedding albums Delhi",
    "luxury wedding albums Delhi",
    "wedding album printing",
    "wedding album designing",
    "custom wedding albums",
    "premium photo albums",
    "Wedding Album India",
  ],

  authors: [
    {
      name: "Wedding Album India",
      url: siteUrl,
    },
  ],

  creator: "Wedding Album India",
  publisher: "Wedding Album India",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Wedding Album India",
    title:
      "Wedding Album Printing & Designing in Delhi | Wedding Album India",
    description:
      "Premium handcrafted wedding albums designed and printed for photographers, studios and families in Delhi and across India.",
    images: [
      {
        url: `${siteUrl}/images/hero.jpg.jpg`,
        width: 1200,
        height: 800,
        alt: "Premium Wedding Albums by Wedding Album India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Wedding Album Printing & Designing in Delhi | Wedding Album India",
    description:
      "Premium handcrafted wedding albums designed and printed in Delhi.",
    images: [`${siteUrl}/images/hero.jpg.jpg`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/logo/logo.png.png",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Wedding Album India",
  url: siteUrl,
  image: `${siteUrl}/images/hero.jpg.jpg`,
  telephone: "+91 9818877994",
  email: "infoweddingalbumindia@gmail.com",

  description:
    "Premium wedding album printing and designing for photographers, studios and families in Delhi and across India.",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },

  areaServed: [
    {
      "@type": "City",
      name: "Delhi",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
  ],

  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RLVKPSSBF1"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RLVKPSSBF1');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />
      </head>

      <body className="min-h-full flex flex-col">
        {children}

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}