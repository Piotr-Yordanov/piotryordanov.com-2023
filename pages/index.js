import { useEffect, useState } from 'react'
import Header from '../components/layout.header'
import Content from '../components/layout.content'
import Footer from '../components/layout.footer'


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