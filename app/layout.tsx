import type { Metadata } from 'next'
import { Chakra_Petch } from 'next/font/google'
import './globals.css'

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-chakra-petch',
})

export const metadata: Metadata = {
  title: 'CONVEX — Compact. Uncompromised.',
  description: 'A different kind of compact PC case. Micro-ATX. Latvian design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${chakraPetch.variable} font-sans bg-background text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
