import { Analytics } from "@vercel/analytics/react"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ContentWrapper from '../components/wrapper/content'
import NavbarComponent from '@/components/navbar-component'
import ClientWrapper from '@/components/wrapper/client'
import RightDrawer from '@/components/right-drawer-component'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Krisna Profile',
  description: 'Personal profile of Krisna Dwi Setyaadi',
  authors: { name: 'Krisna Dwi Setyaadi' },
  creator: 'Krisna Dwi Setyaadi',
  applicationName: 'Krisna Personal Profile',
  keywords: ['krisna', 'krisna setyaadi', 'krisna setyadi', 'krisna dwi setyaadi', 'dwi', 'krisna setyadi', 'software developer', 'profile', 'home', 'portfolio', 'front-end developer'],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false
    }
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Personal profile of Krisna Dwi Setyaadi" />
        <meta name="keywords" content="krisna, krisna setyaadi, krisna setyadi, krisna dwi setyaadi, dwi, krisna setyadi, software developer, profile, home, portofolio, front-end developer" />
        <meta name="author" content="Krisna Dwi Setyaadi" />
      </head>
      <body className={`${inter.className} bg-[#edf1f5]`}>
        <ClientWrapper>
          <RightDrawer />
        </ClientWrapper>
        <ClientWrapper>
          <NavbarComponent />
        </ClientWrapper>
        <ContentWrapper>
          {children}
          <Analytics/>
        </ContentWrapper>
      </body>
    </html>
  )
}
