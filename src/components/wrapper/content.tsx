import { ReactNode } from 'react'

export default function ContentWrapper({ children} : {children: ReactNode}) {
  return (
    <main className="pt-12 items-center justify-between px-12 md:px-24  h-screen md:h-full">
      {/* bg-[#edf1f5] */}
      {children}
    </main>
  )
}
