import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alvin Yan — Embedded Systems Engineer",
  description:
    "Computer Engineering senior at Boston University. Embedded systems, firmware, and hardware-software integration.",
  openGraph: {
    title: "Alvin Yan",
    description: "Embedded Systems Engineer — BU '27",
    url: "https://alvinyan.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
