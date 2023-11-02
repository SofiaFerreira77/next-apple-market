import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/shared/Header";
import Footer from '@/components/shared/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apple Market',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const developer = {
    label: 'Developed by:',
    name: 'Sofia Ferreira',
    link: 'https://github.com/SofiaFerreira77/beer-collection-case'
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer developer={developer} />
      </body>
    </html>
  )
}
