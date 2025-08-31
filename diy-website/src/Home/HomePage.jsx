import React from 'react'
import Navigate from '../Navigate'
import ProductHome from '../Products/ProductHome'
import Services from '../Services/Services'
import Footer from '../Footer'

const HomePage = () => {
  return (
    <div className=''>
      <Navigate/>
      <ProductHome/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default HomePage