import Footer from '@/componets/Footer'
import './globals.css'
import type { Metadata } from 'next'
import NavBar from '@/componets/NavBar'




export const metadata: Metadata = {
  title: "Sam's Car Hub",
  description: 'Discover the best cars in for you!!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
