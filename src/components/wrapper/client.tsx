import NavbarComponent from '@/components/navbar-component'
import Image from 'next/image'
import { ReactNode } from 'react'

export default function Home({ children} : {children: ReactNode}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      {children}
    </main>
  )
}
