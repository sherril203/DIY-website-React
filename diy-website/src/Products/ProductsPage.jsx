import React from 'react';
import Navigate from '../Navigate';
import Bags from './Categories/Bags';
import Cups from './Categories/Cups';
import Clock from './Categories/Clock';
import PhoneCase from './Categories/PhoneCase';
import Kits from './Categories/Kits';
import Footer from '../Footer';
import Geometric from './Categories/Geometric';

const ProductsPage = () => {
  return (
    <div className="  bg-rose-50 pt-0.5">
      <Navigate />
      <h2 className="text-center font-bold text-3xl mt-23 text-rose-800 ">
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
