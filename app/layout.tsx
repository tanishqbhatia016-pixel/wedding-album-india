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

export const metadata: Metadata = {
  metadataBase: new URL("https://weddingalbumindia.com"),

  title: {
    default:
      "Wedding Album India | Premium Wedding Album Printing & Designing",
    template: "%s | Wedding Album India",
  },

  description:
    "Wedding Album India offers premium wedding album printing and designing in Delhi. Explore luxury acrylic, wooden, 3D, sparkle and matt cover wedding albums.",

  keywords: [
    "wedding album India",
    "wedding album Delhi",
    "wedding album printing",
    "wedding album designing",
    "premium wedding album",
    "luxury wedding album",
    "wedding photo album",
    "custom wedding album",
    "wedding album manufacturer",
  ],

  alternates: {
    canonical: "https://weddingalbumindia.com",
  },

  openGraph: {
    title:
      "Wedding Album India | Premium Wedding Album Printing & Designing",
    description:
      "Premium handcrafted wedding albums designed and printed for photographers, studios and families.",
    url: "https://weddingalbumindia.com",
    siteName: "Wedding Album India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg.jpg",
        width: 1200,
        height: 800,
        alt: "Premium Wedding Album India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Wedding Album India | Premium Wedding Album Printing & Designing",
    description:
      "Premium handcrafted wedding albums for photographers, studios and families.",
    images: ["/images/hero.jpg.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Analytics */}
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
      </head>

      <body className="min-h-full flex flex-col">
        {children}

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}