import React from 'react'
import Navigate from '../../common/Navigate'
import ProductHome from '../../Products/ProductHome'
import Services from '../Services/Services'
import Footer from '../../common/Footer'
import Carousel from '../carousel/Carousel'
import Navbar from '../../common/Navbar'

const HomePage = () => {
  return (
    <>
        <Navbar/>
      <Carousel/>
      <ProductHome/>
      <Services/>
      <Footer/>
    </>
  
   
  )
}

export default HomePage