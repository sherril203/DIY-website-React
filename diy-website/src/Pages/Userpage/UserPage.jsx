import React, { useState } from 'react'
import Footer from '../../common/Footer'
import UserNav from '../Userpage/UserNav'
import Products from '../../Products/Products'
import UserService from './UserService'
import Navbar from '../../common/Navbar'
const UserPage = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [cart, setcart] = useState([])
  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ query, category });
  };

  return (
    <div className='bg-stone-100 w-full '>
      <Navbar cart={cart} />
      <UserService />
      <h2 className="text-center  font-bold text-3xl mt-19 text-stone-700 ">
        Products
      </h2>
      <form
        className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 mt-6 px-4 max-w-4xl mx-auto w-full"
        onSubmit={handleSearch}
      >
        {/* Search Input */}
        <div className="relative flex-1">
          <input
            type="search"
            className="bg-white p-3 pr-10 rounded-lg border border-stone-700 shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search products"
          />
        </div>

        {/* Category Select */}
        <div className="w-full sm:w-48 lg:w-56">
          <select
            className="bg-white p-3 rounded-lg border border-stone-700 shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Filter by category"
          >
            <option value="">All</option>
            <option value="Bags">Bags</option>
            <option value="Cups">Cups</option>
            <option value="Phone Case">Phone Case</option>
            <option value="Photo Frames">Photo Frames</option>
            <option value="Clocks">Clocks</option>
            <option value="Geometric Design Wall Decor">Geometric Design Wall Decor</option>
            <option value="for Kids">for Kids</option>
          </select>
        </div>
      </form>

      <Products query={query} category={category} />
      <br />
      <Footer />
    </div>
  )
}

export default UserPage