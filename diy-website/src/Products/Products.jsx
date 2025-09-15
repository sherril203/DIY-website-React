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
import Kits from './Categories/Kits';
import Geometric from './Categories/Geometric';

const Products = ({ query, category}) => {
  return (
    <div className="bg-rose-50 pt-0.5">
      {(!category || category === 'Bags') && <Bags query={query} />}
      {(!category || category === 'Cups') && <Cups query={query} />}
      {(!category || category === 'Phone Case') && <PhoneCase query={query} />}
      {(!category || category === 'Clocks') && <Clock query={query} />}
      {(!category || category === 'Geometric Design Wall Decor') && <Geometric query={query} />}
      {(!category || category === 'Kits for kids') && <Kits query={query} />}
    </div>
  );
};


export default Products;

