import React from 'react'
import Footer from '../../common/Footer'
import UserNav from '../Userpage/UserNav'
const Orders = () => {
  return (
    <div className='bg-rose-100 mt-17 '>
        <UserNav/>
        <h2 className='text-center font-bold text-3xl text-red-600 p-5'>Orders</h2>
        <Footer/>
    </div>
  )
}

export default Orders