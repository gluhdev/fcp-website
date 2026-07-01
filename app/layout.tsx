import type { Metadata } from "next";
import "./globals.css";
import { CMSWrapper } from "@/components/cms/CMSWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://fullcustompackaging.com"),
  title: "FCP - Full Custom Packaging | We Customize Everything",
  description: "Full Custom Packaging provides complete customization solutions for packaging, apparel, and industrial machinery. From concept to delivery, we bring your vision to life.",
  keywords: "custom packaging, printing services, apparel manufacturing, tactical gear, industrial machinery, custom boxes, labels, bottles",
  authors: [{ name: "Full Custom Packaging" }],
  openGraph: {
    title: "FCP - Full Custom Packaging | We Customize Everything",
    description: "Complete customization solutions for packaging, apparel, and industrial machinery.",
    type: "website",
    locale: "en_US",
    siteName: "Full Custom Packaging",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "FCP — Custom Packaging Solutions" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FCP - Full Custom Packaging",
    description: "Complete customization solutions for your business",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical fonts */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600;700&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600;700&display=swap" />
        {/* Preload critical hero image */}
        <link rel="preload" href="/hero-packaging.jpg" as="image" />
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="antialiased" style={{
        backgroundColor: "#020617"
      }}>
        <CMSWrapper>
          {children}
        </CMSWrapper>
      </body>
    </html>
  );
}
