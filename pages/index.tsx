import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/Components/Header'
import Banner from '@/Components/Banner'
import About from '@/Components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen">
        <Header />
        <Banner />
        <About />
    </main>
  )
}
