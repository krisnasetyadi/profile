
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
  description: 'krisna dwi setyaadi personal profile',
  authors: { name: 'Krisna Dwi Setyaadi' },
  creator: 'Krisna Dwi Setyaadi',
  applicationName: 'Krisna Personal Profile',
  keywords: ['krisna', 'krisna setyaadi', 'krisna dwi setyaadi', 'dwi', 'krisna setyadi'],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#edf1f5]`}>
        <ClientWrapper>
          <RightDrawer />
        </ClientWrapper>
        <ClientWrapper>
          <NavbarComponent />
        </ClientWrapper>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </body>
    </html>
  )
}
