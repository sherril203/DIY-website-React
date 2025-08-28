import React from 'react'
import Navigate from './Navigate'
import Contact from './Contact'
import Foot from './Foot'
import Products from './Products'

const HomePage = () => {
  return (
    <div className='w-full bg-teal-400'>
        <Navigate/>
        <br /><br />
           <div className=' h-screen flex items-center justify-center'
      style={{ backgroundImage: "url('/diy.jpg')", backgroundSize: "cover" ,height:"500px"}}
 >
      <div className='opacity-85 bg-transparent  ' >
        <div className='bg-white rounded-2xl shadow-2xl p-4'>
        <h2 className='text-center text-3xl font-bold'>welcome to  DIY Arts</h2>
        <p className='text-2xl'>We will provide eco-friendly products without harmful to health. </p>
        <p className='text-2xl'>And customize as customer need to match </p>
        <p className='text-2xl'>kids products like jewellery and bracelets kit are available</p>
          </div>
      </div>
    </div>
        <Products/>
        <Contact/>
        <Foot/>

    </div>
  )
}

export default HomePage