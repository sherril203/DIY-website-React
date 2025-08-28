import React from 'react'
import Products from './Products'
import Contact from './Contact'
import Foot from './Foot'
import Navigate from './Navigate'

const UserHomePage = () => {
  return (
    <div>
     <Navigate/>
     <br /> <br /> <br />
     <Products/>
     <Contact/>
     <Foot/>
    </div>
  )
}

export default UserHomePage