// import React, { useState } from 'react';
// import Navigate from '../common/Navigate';
// import Footer from '../common/Footer';
// import Products from './Products';

// const ProductsPage = () => {
//   const [query, setQuery] = useState('');
//   const [category, setCategory] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log({ query, category });
//   };

//   return (
//     <div className="bg-rose-50 pt-0.5">
//       <Navigate />
//       <h2 className="text-center font-bold text-3xl mt-24 text-rose-800">
//         Products
//       </h2>
//      <form
//   className="flex flex-wrap justify-center items-center gap-2 mt-3 px-4"
//   onSubmit={handleSearch}
// >
//   {/* Search Input + Clear */}
//   <div className="relative">
//     <input
//       type="search"
//       className="bg-white p-3 pr-10 rounded border border-rose-200 shadow-sm w-64 sm:w-80"
//       placeholder="Search "
//       value={query}
//       onChange={(e) => setQuery(e.target.value)}
//       aria-label="Search products"
//     />
//     {/* {query && (
//       <button
//         type="button"
//         onClick={() => setQuery('')}
//         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-400 hover:text-rose-600 text-xl font-bold"
//         aria-label="Clear search"
//       >
        
//       </button>
//     )} */}
//   </div>

//   <select
//     className="bg-white p-3 rounded border border-rose-200 shadow-sm"
//     value={category}
//     onChange={(e) => setCategory(e.target.value)}
//     aria-label="Filter by category"
//   >
//     <option value="">All</option>
//     <option value="Bags">Bags</option>
//     <option value="Cups">Cups</option>
//     <option value="Phone Case">Phone Case</option>
//     <option value="Photo Frames">Photo Frames</option>
//     <option value="Clocks">Clocks</option>
//     <option value="Geometric Design Wall Decor">Geometric Design Wall Decor</option>
//     <option value="Kits for kids">Kits for kids</option>
//   </select>

//   {/* <button
//     type="submit"
//     className="bg-gradient-to-l from-fuchsia-300
//      to-pink-400 p-3 rounded text-white shadow hover:opacity-90 transition"
//   >
//     Search
//   </button> */}
// </form>

//       <Products query={query} category={category} />

//       <Footer />
//     </div>
//   );
// };

// export default ProductsPage;

import React, { useState } from 'react';
import Navigate from '../common/Navigate';
import Footer from '../common/Footer';
import Products from './Products';

const ProductsPage = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ query, category });
  };

  return (
    <div className=" bg-stone-100 flex flex-col w-full ">
      <Navigate />

      {/* Page Title */}
      <h2 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl mt-12 sm:mt-20 lg:mt-24 text-stone-700 px-4">
        Products
      </h2>

      {/* Search + Filter */}
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

      {/* Product Grid */}
      <div className="flex-grow px-4 sm:px-6 lg:px-8 mt-6">
        <Products query={query} category={category} />
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default ProductsPage;
