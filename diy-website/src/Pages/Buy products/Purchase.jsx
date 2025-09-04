// my code
//import React from 'react'

// const Purchase = () => {
//   return (
//     <div className='p-6 mt-18 text-center bg-rose-50'>
//         <form action="" className='bg-white rounded p-3 w-full'>
//             <h2 className='text-center font-bold text-2xl'>Purchase Form</h2>
//             <div>
//                 <label htmlFor="">Product Name</label> <br />
//                 <input type="text" placeholder='' name="product_name"  />
//             </div>
//             <div>
//                 <label htmlFor="">Quantity</label>
//                 <input type="number" placeholder='' name="Quantity"  />
//             </div>
//             <div>
//                 <label htmlFor="">Product Prize</label>
//                 <input type="number" placeholder='' name="product_price"  />
//             </div>
//             <div className='flex justify-center items-center gap-3'>
//                 <label htmlFor="">Customization Process</label> <br />
//                 <input type="radio" value="yes"  /> yes
//                 <input type="radio" value="no"  /> no
//             </div>
//             <div>
//                 <label htmlFor="">Customer Name</label>
//                 <input type="text" placeholder='' name="customer_name"  />
//             </div>
//             <div>
//                 <label htmlFor="">Customer email</label>
//                 <input type="email" placeholder='' name="customer_email"  />
//             </div>
//             <div>
//                 <label htmlFor="">Mobile No</label>
//                 <input type="mobile" placeholder='' name="customer_mobile"  />
//             </div>
//             <div>
//                 <label htmlFor="">address</label> <br />
//                 <textarea name="" id=""></textarea>
//             </div>
//             <div className='flex justify-center items-center gap-3'>
//                 <label htmlFor="">Payment mode</label> <br />
//                 <input type="radio" value="upi"  /> Upi
//                 <input type="radio" value="cash"  /> Cash
//             </div>
//             <div>
//                 <button className=' bg-gradient-to-r from-fuchsia-600 to-pink-500 p-3 
//                 text-white font-bold rounded'>Purchase</button>
//             </div>
//         </form>
//     </div>
//   )
// }

// export default Purchase
//ai suggest( single tab)
// import React from 'react';

// const Purchase = () => {
//   return (
//     <div className="p-6 mt-18 text-center bg-rose-50 ">
//       <form action="" className="bg-white rounded p-6 w-full max-w-md mx-auto shadow-md">
//         <h2 className="text-center font-bold text-2xl mb-4">Purchase Form</h2>

//         <div className="mb-3 text-left">
//           <label htmlFor="product_name" className="block mb-1">Product Name</label>
//           <input type="text" id="product_name" name="product_name" className="w-full border p-2 rounded" />
//         </div>

//         <div className="mb-3 text-left">
//           <label htmlFor="quantity" className="block mb-1">Quantity</label>
//           <input type="number" id="quantity" name="quantity" className="w-full border p-2 rounded" />
//         </div>

//         <div className="mb-3 text-left">
//           <label htmlFor="product_price" className="block mb-1">Product Price</label>
//           <input type="number" id="product_price" name="product_price" className="w-full border p-2 rounded" />
//         </div>

//         <div className="mb-3 text-left">
//           <label className="block mb-1">Customization Process</label>
//           <div className="flex gap-4">
//             <label>
//               <input type="radio" name="customization" value="yes" className="mr-1" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="customization" value="no" className="mr-1" /> No
//             </label>
//           </div>
//         </div>

//         <div className="mb-3 text-left">
//           <label htmlFor="customer_name" className="block mb-1">Customer Name</label>
//           <input type="text" id="customer_name" name="customer_name" className="w-full border p-2 rounded" />
//         </div>

//         <div className="mb-3 text-left">
//           <label htmlFor="customer_email" className="block mb-1">Customer Email</label>
//           <input type="email" id="customer_email" name="customer_email" className="w-full border p-2 rounded" />
//         </div>

//         <div className="mb-3 text-left">
//           <label htmlFor="customer_mobile" className="block mb-1">Mobile No</label>
//           <input type="tel" id="customer_mobile" name="customer_mobile" className="w-full border p-2 rounded" />
//         </div>

//         <div className="mb-3 text-left">
//           <label htmlFor="address" className="block mb-1">Address</label>
//           <textarea id="address" name="address" className="w-full border p-2 rounded"></textarea>
//         </div>

//         <div className="mb-3 text-left">
//           <label className="block mb-1">Payment Mode</label>
//           <div className="flex gap-4">
//             <label>
//               <input type="radio" name="payment_mode" value="upi" className="mr-1" /> UPI
//             </label>
//             <label>
//               <input type="radio" name="payment_mode" value="cash" className="mr-1" /> Cash
//             </label>
//           </div>
//         </div>

//         <div className="text-center mt-6">
//           <button
//             type="submit"
//             className="bg-gradient-to-r from-fuchsia-600 to-pink-500 px-6 py-3 text-white font-bold rounded hover:opacity-90"
//           >
//             Purchase
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Purchase;
//2 column
import React, { useState } from 'react';
//const [customize,setCustomize]=useState(false)
const Purchase = () => {
  return (
    <div className="p-6 mt-18 text-center bg-rose-50 ">
      <form className="bg-white rounded p-6 w-full max-w-4xl mx-auto shadow-md">
        <h2 className="text-center font-bold text-2xl mb-6">Purchase Form</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-left space-y-4">
            <div>
              <label htmlFor="product_name" className="block mb-1 font-semibold">Product Name</label>
              <input type="text" id="product_name" name="product_name" className="w-full border p-2 rounded" />
            </div>

            <div>
              <label htmlFor="quantity" className="block mb-1 font-semibold">Quantity</label>
              <input type="number" id="quantity" name="quantity" className="w-full border p-2 rounded" />
            </div>

            <div>
              <label htmlFor="product_price" className="block mb-1 font-semibold">Product Price</label>
              <input type="number" id="product_price" name="product_price" className="w-full border p-2 rounded" />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Customization Process</label>
              <div className="flex gap-4">
                <label>
                  <input type="radio" name="customization" value="yes" className="mr-1" /> Yes
                </label>
                <label>
                  <input type="radio" name="customization" value="no" className="mr-1" /> No
                </label>
              </div>
            </div>
          </div>

          <div className="text-left space-y-4">
            <div>
              <label htmlFor="customer_name" className="block mb-1 font-semibold">Customer Name</label>
              <input type="text" id="customer_name" name="customer_name" className="w-full border p-2 rounded" />
            </div>

            <div>
              <label htmlFor="customer_email" className="block mb-1 font-semibold">Customer Email</label>
              <input type="email" id="customer_email" name="customer_email" className="w-full border p-2 rounded" />
            </div>

            <div>
              <label htmlFor="customer_mobile" className="block mb-1 font-semibold">Mobile No</label>
              <input type="tel" id="customer_mobile" name="customer_mobile" className="w-full border p-2 rounded" />
            </div>

            <div>
              <label htmlFor="address" className="block mb-1 font-semibold">Address</label>
              <textarea id="address" name="address" rows="3" className="w-full border p-2 rounded"></textarea>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Payment Mode</label>
              <div className="flex gap-4">
                <label>
                  <input type="radio" name="payment_mode" value="upi" className="mr-1" /> UPI
                </label>
                <label>
                  <input type="radio" name="payment_mode" value="cash" className="mr-1" /> Cash
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-gradient-to-r from-fuchsia-600 to-pink-500 px-6 py-3 text-white font-bold rounded hover:opacity-90"
          >
            Purchase
          </button>
        </div>
      </form>
    </div>
  );
};

export default Purchase;
