import React from 'react'
import Footer from '../../common/Footer'
import UserNav from '../Userpage/UserNav'
import Products from '../../Products/Products'
import UserService from './UserService'
const UserPage = () => {
  return (
    <div className='bg-rose-50 w-full min-h-screen'>
        <UserNav/>
        <UserService/>
        <h2 className="text-center  font-bold text-3xl mt-19 text-rose-800 ">
        Products
      </h2>
        <Products/>
        <Footer/>
    </div>
  )
}

export default UserPage