import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  },
  twitter: {
    card: "summary_large_image",
    title: "FCP - Full Custom Packaging",
    description: "Complete customization solutions for your business",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="antialiased" style={{
        backgroundColor: "#020617",
        overflowX: "hidden",
        maxWidth: "100vw",
        position: "relative"
      }}>
        {children}
      </body>
    </html>
  );
}
