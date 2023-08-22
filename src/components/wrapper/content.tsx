import { ReactNode } from 'react'

export default function ContentWrapper({ children} : {children: ReactNode}) {
  return (
    <main className="flex h-screen flex-col items-center justify-between px-24 bg-green-400">
      {children}
    </main>
  )
}
