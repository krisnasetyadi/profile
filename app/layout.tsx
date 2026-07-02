import "./globals.css";
import type React from "react";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import ContentWrapper from "../components/wrapper/content";
import NavbarComponent from "@/components/navbar-component";
import ClientWrapper from "@/components/wrapper/client";
import { ThemeProvider } from "@/components/ui/next-theme-provider";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";
import { Suspense } from "react";
import { GrainOverlay } from "@/components/grain-overlay";
import { PageTransition } from "@/components/page-transition";
import { LenisProvider } from "@/components/lenis-provider";
import { CustomCursor } from "@/components/cursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://krisnadwisetyaadi.vercel.app"),
  title: "Krisna Dwi Setyaadi - Software Developer",
  description:
    "Krisna Dwi Setyaadi is an experienced software developer based in Jakarta, Indonesia, specializing in React.js, Next.js, and modern web technologies. Building scalable, user-centered applications since 2022.",
  keywords: [
    "Krisna Dwi Setyaadi",
    "Krisna Setyaadi",
    "Software Developer Jakarta",
    "React Developer Indonesia",
    "Next.js Developer",
    "Frontend Developer Jakarta",
    "Full Stack Developer Indonesia",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer Indonesia",
  ],
  verification: {
    google: "lF3UvljuTHZt_rzUOz5qw4KoCui6NOR5KvPONJzyOaE",
  },
  alternates: {
    canonical: "https://krisnadwisetyaadi.vercel.app",
  },
  openGraph: {
    type: "website",
    url: "https://krisnadwisetyaadi.vercel.app",
    siteName: "Krisna Dwi Setyaadi",
    title: "Krisna Dwi Setyaadi - Software Developer",
    description:
      "Experienced software developer based in Jakarta, Indonesia, specializing in React.js, Next.js, and modern web technologies.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Krisna Dwi Setyaadi - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krisna Dwi Setyaadi - Software Developer",
    description:
      "Experienced software developer based in Jakarta, Indonesia, specializing in React.js, Next.js, and modern web technologies.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Krisna Dwi Setyaadi",
              alternateName: "Krisna Setyaadi",
              url: "https://krisnadwisetyaadi.vercel.app",
              image: "https://krisnadwisetyaadi.vercel.app/images/me2.jpg",
              jobTitle: "Software Developer",
              worksFor: {
                "@type": "Organization",
                name: "Moonlay Technologies",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jakarta",
                addressCountry: "ID",
              },
              sameAs: [
                "https://github.com/krisnasetyadi",
                "https://www.linkedin.com/in/krisnadwisetyaadi/",
                "https://linkedin.com/in/krisnadwisetyaadi",
              ],
              knowsAbout: [
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Web Development",
                "Frontend Development",
                "Full Stack Development",
              ],
              description:
                "Experienced software developer based in Jakarta, Indonesia, specializing in React.js, Next.js, and modern web technologies. Building scalable, user-centered applications since 2022.",
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider />
          <GrainOverlay />
          <PageTransition />
          <CustomCursor />
          <div className="bg-[var(--pnp-bg)]">
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
