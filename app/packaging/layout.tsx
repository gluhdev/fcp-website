import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Packaging Solutions | Boxes, Bags, Bottles & Labels | FCP",
  description: "Premium custom packaging solutions including custom boxes, bags, bottles, jars, stickers and labels. Complete end-to-end packaging services for your business.",
  keywords: "custom packaging, custom boxes, packaging bags, bottles, jars, labels, stickers, mylar bags, shipping boxes, retail packaging",
  openGraph: {
    title: "Custom Packaging Solutions | FCP",
    description: "Premium custom packaging solutions including boxes, bags, bottles, and labels for your business.",
    type: "website",
    locale: "en_US",
    siteName: "Full Custom Packaging",
  },
};

export default function PackagingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
