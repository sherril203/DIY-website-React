import React from 'react';
import Navigate from '../Navigate';
import Bags from './Bags';
import Cups from './Cups';
import Clock from './Clock';
import PhoneCase from './PhoneCase';
import Kits from './Kits';
import Footer from '../Footer';
import Geometric from './geometric';

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navigate />
      <h2 className="text-center font-bold text-3xl mt-8 text-teal-600">
        Products
      </h2>
          <Bags />
          <Cups />
          <PhoneCase />
          <Clock />
          <Geometric/>
          <Kits/>
          <Footer/>
    </div>
  );
};

export default ProductsPage;
