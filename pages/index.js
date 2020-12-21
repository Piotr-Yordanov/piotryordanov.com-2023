import { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '../components/layout.header'
import Content from '../components/layout.Content'
import Footer from '../components/layout.Footer'


const Home = () => {
  return (
    <div className="bg-primary">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Home