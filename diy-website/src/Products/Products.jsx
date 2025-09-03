import React from 'react';

import Bags from './Categories/Bags';
import Cups from './Categories/Cups';
import Clock from './Categories/Clock';
import PhoneCase from './Categories/PhoneCase';
import Kits from './Categories/Kits';
import Geometric from './Categories/Geometric';

const Products = () => {
  return (
    <div className="  bg-rose-50 pt-0.5">
          <Bags />
          <Cups />
          <PhoneCase />
          <Clock />
          <Geometric/>
          <Kits/>
    </div>
  );
};

export default Products;
