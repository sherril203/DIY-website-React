import React from 'react'
import Navigate from '../../common/Navigate'
import ProductHome from '../../Products/ProductHome'
import Services from '../Services/Services'
import Footer from '../../common/Footer'
import Carousel from '../carousel/Carousel'

const HomePage = () => {
  return (
    <div className=''>
      <Navigate/>
      <Carousel/>
      <ProductHome/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default HomePage