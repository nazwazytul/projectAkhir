import './globals.css'
import type { Metadata } from 'next'
import { Cormorant } from 'next/font/google'
import "@fontsource/poppins"

const cormorant = Cormorant({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'GlowEvermore',
  description: 'Generated by GlowEvermore',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.className}`}>
        {children}
      </body>
    </html>
  )
}
