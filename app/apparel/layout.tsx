import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Sports Apparel | Athletic Wear & Caps | FCP",
  description: "High-quality custom sports apparel including t-shirts, hoodies, sweatshirts, shorts, socks and caps. Perfect for teams, brands and businesses.",
  keywords: "custom sports apparel, athletic wear, custom t-shirts, hoodies, sweatshirts, caps, team uniforms, gym apparel, custom clothing",
  openGraph: {
    title: "Custom Sports Apparel | FCP",
    description: "High-quality custom sports apparel for teams, brands and businesses.",
    type: "website",
    locale: "en_US",
    siteName: "Full Custom Packaging",
  },
};

export default function ApparelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
