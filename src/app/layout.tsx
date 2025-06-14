import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ContentWrapper from "../components/wrapper/content";
import NavbarComponent from "@/components/navbar-component";
import ClientWrapper from "@/components/wrapper/client";
import { ThemeProvider } from "@/components/ui/next-theme-provider";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krisna Profile",
  description: "Personal profile of Krisna Dwi Setyaadi",
  authors: { name: "Krisna Dwi Setyaadi" },
  creator: "Krisna Dwi Setyaadi",
  applicationName: "Krisna Personal Profile",
  keywords: [
    "krisna",
    "krisna setyaadi",
    "krisna setyadi",
    "krisna dwi setyaadi",
    "dwi",
    "krisna setyadi",
    "software developer",
    "profile",
    "home",
    "portfolio",
    "front-end developer",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Personal profile of Krisna Dwi Setyaadi"
        />
        <meta
          name="keywords"
          content="krisna, krisna setyaadi, krisna setyadi, krisna dwi setyaadi, dwi, krisna setyadi, software developer, profile, home, portofolio, front-end developer"
        />
        <meta name="author" content="Krisna Dwi Setyaadi" />
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
            <ClientWrapper>
              <NavbarComponent />
            </ClientWrapper>
            <ContentWrapper>{children}</ContentWrapper>
            <ClientWrapper>
              <Footer />
            </ClientWrapper>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
