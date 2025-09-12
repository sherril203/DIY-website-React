import React,{useState} from 'react'
import Footer from '../../common/Footer'
import UserNav from '../Userpage/UserNav'
import Products from '../../Products/Products'
import UserService from './UserService'
const UserPage = () => {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');
  
    const handleSearch = (e) => {
      e.preventDefault();
      console.log({ query, category });
    };
  
  return (
    <div className='bg-rose-50 w-full min-h-screen'>
        <UserNav/>
        <UserService/>
        <h2 className="text-center  font-bold text-3xl mt-19 text-rose-800 ">
        Products
      </h2>
           <form
  className="flex flex-wrap justify-center items-center gap-2 mt-3 px-4"
  onSubmit={handleSearch}
>
  {/* Search Input + Clear */}
  <div className="relative">
    <input
      type="search"
      className="bg-white p-3 pr-10 rounded border border-rose-200 shadow-sm w-64 sm:w-80"
      placeholder="Search by product name..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      aria-label="Search products"
    />
    {/* {query && (
      <button
        type="button"
        onClick={() => setQuery('')}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-400 hover:text-rose-600 text-xl font-bold"
        aria-label="Clear search"
      >
        
      </button>
    )} */}
  </div>

  <select
    className="bg-white p-3 rounded border border-rose-200 shadow-sm"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    aria-label="Filter by category"
  >
    <option value="">All</option>
    <option value="Bags">Bags</option>
    <option value="Cups">Cups</option>
    <option value="Phone Case">Phone Case</option>
    <option value="Clocks">Clocks</option>
    <option value="Geometric Design Wall Decor">Geometric Design Wall Decor</option>
    <option value="Kits for kids">Kits for kids</option>
  </select>

  <button
    type="submit"
    className="bg-gradient-to-l from-fuchsia-300 to-pink-400 p-3 rounded text-white shadow hover:opacity-90 transition"
  >
    Search
  </button>
</form>

      <Products query={query} category={category} />
        <Products/>
        <Footer/>
    </div>
  )
}

export default UserPage