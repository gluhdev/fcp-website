import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Neon Signs | LED Signage & Illuminated Displays | FCP",
  description: "Eye-catching custom neon signs and LED signage for businesses, events, and home decor. Professional illuminated displays that make your brand shine.",
  keywords: "custom neon signs, LED neon, business signs, illuminated signage, neon lights, custom LED signs, event signage, restaurant signs",
  openGraph: {
    title: "Custom Neon Signs | FCP",
    description: "Eye-catching custom neon signs and LED signage for businesses and events.",
    type: "website",
    locale: "en_US",
    siteName: "Full Custom Packaging",
  },
};

export default function SignageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
