import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ola Farhat Ibrahim — Frontend Developer",
  description:
    "Portfolio of Ola Farhat Ibrahim, a Frontend Developer specializing in React.js and Next.js, based in Cairo, Egypt. Fresh graduate passionate about responsive, high-performance web applications.",
  keywords: [
    "Ola Farhat Ibrahim",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Egypt",
    "Web Developer Portfolio",
    "UI Developer",
  ],
  authors: [{ name: "Ola Farhat Ibrahim" }],
  creator: "Ola Farhat Ibrahim",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ola Farhat Ibrahim — Frontend Developer",
    description:
      "Portfolio of Ola Farhat Ibrahim — React.js & Next.js specialist, Cairo Egypt.",
    siteName: "Ola Farhat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ola Farhat Ibrahim — Frontend Developer",
    description:
      "Portfolio of Ola Farhat Ibrahim — React.js & Next.js specialist, Cairo Egypt.",
  },
  robots: {
    index: true,
    follow: true,
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
        {/* Preconnect for Google Fonts performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-text antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
