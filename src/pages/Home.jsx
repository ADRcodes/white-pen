import React from 'react'
import Hero from '../components/Hero'
import ProductFeatures from '../components/ProductFeatures'
import Testimonials from '../components/Testimonials'
import AboutCompany from '../components/AboutCompany'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <ProductFeatures />
      <AboutCompany />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home