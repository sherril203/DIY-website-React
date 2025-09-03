import React from 'react';
import Navigate from '../common/Navigate';
import Footer from '../common/Footer';
import Products from './Products';

const ProductsPage = () => {
  return (
    <div className="  bg-rose-50 pt-0.5">
      <Navigate />
      <h2 className="text-center font-bold text-3xl mt-23 text-rose-800 ">
        Products
      </h2>
          <Products/>
          <Footer/>
    </div>
  );
};

export default ProductsPage;
