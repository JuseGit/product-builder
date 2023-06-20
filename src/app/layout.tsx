import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin', 'latin-ext'], weight: ['400', '700'] })

export const metadata = {
  title: 'Product Builder',
  description: 'Product Builder app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
