import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg" },
  title: "Richard Karanu — Senior Full Stack & Backend Engineer",
  description:
    "Senior Full Stack & Backend Engineer with 6+ years shipping production systems across AI, FinTech, and SaaS. Specializing in backend architecture, API security, and scalable infrastructure.",
  keywords: [
    "Richard Karanu",
    "Full Stack Engineer",
    "Backend Engineer",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "AWS",
    "Django",
    "FastAPI",
    "AI Engineer",
    "Nairobi",
    "Kenya",
  ],
  authors: [{ name: "Richard Karanu" }],
  openGraph: {
    title: "Richard Karanu — Senior Full Stack & Backend Engineer",
    description:
      "Building production-grade systems across AI, FinTech, and SaaS. 6+ years experience owning architecture end-to-end.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard Karanu — Senior Full Stack & Backend Engineer",
    description:
      "Building production-grade systems across AI, FinTech, and SaaS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="flex flex-col">{children}</body>
    </html>
  );
}
