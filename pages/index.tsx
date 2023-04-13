import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/Components/Header'
import Banner from '@/Components/Banner'
import About from '@/Components/About'
import Services from '@/Components/Services'
import Use from '@/Components/Use'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen">
        <Header />
        <Banner />
        <About />
        <Services />
        <Use />
        <Footer />
    </main>
  )
}
