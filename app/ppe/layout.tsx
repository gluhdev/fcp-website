import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Protective Equipment | Custom Branded PPE | FCP",
  description: "Complete custom branded PPE solutions for workplace safety. Hard hats, safety glasses, gloves, vests and more with your company branding.",
  keywords: "PPE, personal protective equipment, safety gear, hard hats, safety glasses, protective gloves, hi-vis vests, workplace safety, custom PPE",
  openGraph: {
    title: "Personal Protective Equipment | FCP",
    description: "Complete custom branded PPE solutions for workplace safety.",
    type: "website",
    locale: "en_US",
    siteName: "Full Custom Packaging",
  },
};

export default function PPELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
