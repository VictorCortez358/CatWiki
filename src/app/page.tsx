import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MostSearched from '@/components/MostSearched'
import WhyCat from '@/components/WhyCat'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <MostSearched />
      <WhyCat />
      <Footer />
    </div>
  )
}
