// import React from 'react';

// import Bags from './Categories/Bags';
// import Cups from './Categories/Cups';
// import Clock from './Categories/Clock';
// import PhoneCase from './Categories/PhoneCase';
// import Kits from './Categories/Kits';
// import Geometric from './Categories/Geometric';

// const Products = () => {
//   return (
//     <div className="  bg-rose-50 pt-0.5">
//           <Bags />
//           <Cups />
//           <PhoneCase />
//           <Clock />
//           <Geometric/>
//           <Kits/>
//     </div>
//   );
// };

// export default Products;
import React from 'react';

import Bags from './Categories/Bags';
import Cups from './Categories/Cups';
import Clock from './Categories/Clock';
import PhoneCase from './Categories/PhoneCase';
import Kids from './Categories/Kids';
import Geometric from './Categories/Geometric';
import Frames from './Categories/Frames';

const Products = ({ query, category}) => {
  return (
    <div className="pt-0.5">
      {(!category || category === 'Bags') && <Bags query={query} />}
      <br />
      {(!category || category === 'Cups') && <Cups query={query} />}
      <br />
      {(!category || category === 'Phone Case') && <PhoneCase query={query} />} <br />
      {(!category || category === 'Photo Frames') && <Frames query={query} />} <br />
      {(!category || category === 'Clocks') && <Clock query={query} />} <br />
      {(!category || category === 'Geometric Design Wall Decor') && <Geometric query={query} />} <br />
      {(!category || category === 'for Kids') && <Kids query={query} />} 
    </div>
  );
};


export default Products;

