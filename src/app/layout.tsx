import type React from "react";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ContentWrapper from "../components/wrapper/content";
import NavbarComponent from "@/components/navbar-component";
import ClientWrapper from "@/components/wrapper/client";
import { ThemeProvider } from "@/components/ui/next-theme-provider";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Krisna Dwi Setyaadi - Software Developer | Jakarta, Indonesia",
    template: "%s | Krisna Dwi Setyaadi - Software Developer",
  },
  description:
    "Krisna Dwi Setyaadi is an experienced software developer based in Jakarta, Indonesia, specializing in React.js, Next.js, and modern web technologies. Building scalable, user-centered applications since 2022.",
  authors: [{ name: "Krisna Dwi Setyaadi", url: "https://krisnasetyaadi.dev" }],
  creator: "Krisna Dwi Setyaadi",
  publisher: "Krisna Dwi Setyaadi",
  applicationName: "Krisna Dwi Setyaadi Portfolio",
  keywords: [
    "Krisna Dwi Setyaadi",
    "Software Developer Jakarta",
    "React Developer Indonesia",
    "Next.js Developer",
    "Frontend Developer Jakarta",
    "Full Stack Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer Indonesia",
    "Moonlay Technologies",
    "Portfolio Website",
    "Software Engineering",
    "Modern Web Technologies",
    "User-Centered Design",
    "Scalable Applications",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krisnasetyaadi.dev",
    siteName: "Krisna Dwi Setyaadi - Software Developer",
    title: "Krisna Dwi Setyaadi - Software Developer | Jakarta, Indonesia",
    description:
      "Experienced software developer specializing in React.js, Next.js, and modern web technologies",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Krisna Dwi Setyaadi - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@krisnasetyaadi",
    creator: "@krisnasetyaadi",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://krisnasetyaadi.dev" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Krisna Dwi Setyaadi",
              jobTitle: "Software Developer",
              description:
                "Experienced software developer specializing in React.js, Next.js, and modern web technologies",
              url: "https://krisnasetyaadi.dev",
              image: "https://krisnasetyaadi.dev/images/me2.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jakarta",
                addressCountry: "Indonesia",
              },
              worksFor: {
                "@type": "Organization",
                name: "Moonlay Technologies",
              },
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React.js",
                "Next.js",
                "Node.js",
                "Web Development",
                "Software Engineering",
              ],
              sameAs: [
                "https://github.com/krisnasetyaadi",
                "https://linkedin.com/in/krisnasetyaadi",
                "https://twitter.com/krisnasetyaadi",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#edf1f5]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background">
            <Analytics />
            <Suspense fallback={<div>Loading...</div>}>
              <ClientWrapper>
                <NavbarComponent />
              </ClientWrapper>
              <main role="main">
                <ContentWrapper>{children}</ContentWrapper>
              </main>
              <ClientWrapper>
                <Footer />
              </ClientWrapper>
            </Suspense>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
