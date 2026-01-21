import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Sports Equipment | Yoga Mats, Pickleball & More | FCP",
  description: "Premium custom sports equipment including yoga mats, pickleball paddles, sports towels, gym bags and athletic accessories. Built for performance.",
  keywords: "custom sports equipment, yoga mats, pickleball paddles, sports towels, gym bags, golf balls, athletic accessories, custom gear",
  openGraph: {
    title: "Custom Sports Equipment | FCP",
    description: "Premium custom sports equipment and athletic accessories for athletes and fitness enthusiasts.",
    type: "website",
    locale: "en_US",
    siteName: "Full Custom Packaging",
  },
};

export default function SportsEquipmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
