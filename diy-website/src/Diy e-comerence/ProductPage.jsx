import React from 'react'
import Navigate from './Navigate'
import Foot from './Foot'
import Products from './Products'
import { Outlet } from 'react-router'
const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-100 to-pink-50">
      <Navigate />
      <br /> <br />
      <Products />

      <Foot />
    </div>
  )
}

export default ProductPage