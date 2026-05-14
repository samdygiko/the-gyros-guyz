import type { Metadata } from "next";
import { Bagel_Fat_One, Familjen_Grotesk } from "next/font/google";
import "./globals.css";

const bagel = Bagel_Fat_One({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const familjen = Familjen_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TheGyrosGuyz — Greek Street Food · Bedford Place, Southampton",
  description:
    "Greek street food kiosk inside Hooch & Candy in Bedford Place, Southampton — gyros, souvlaki, halloumi wraps. Walk-up only, no reservations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${bagel.variable} ${familjen.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        {children}
      </body>
    </html>
  );
}
