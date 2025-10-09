import React from 'react'
import UserNav from '../Userpage/UserNav'
import Footer from '../../common/Footer'
import Purchase from '../../Pages/Buy products/Purchase'
import Navbar from '../../common/Navbar'

const PurchasePage = () => {
  return (
    <div >
        <Navbar/>
        <Purchase/>
        <Footer/>
    </div>
  )
}

export default PurchasePage