// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Footer from '../../common/Footer';
// import UserNav from '../Userpage/UserNav';

// const Orders = () => {
//   const [data, setData] = useState([]);

//   const getOrders = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/getpurchase");
//       const orders = Array.isArray(response?.data?.showdata) ? response.data.showdata : [];
//       setData(orders);
//     } catch (error) {
//       console.log("GET error:", error.message);
//       setData([]);
//     }
//   };

//   useEffect(() => {
//     getOrders();
//   }, []);

//   return (
//     <div className="bg-rose-100 ">
//       <UserNav />
//       <h2 className="text-center font-bold text-3xl text-red-600 p-5 mt-20">Orders</h2>

//       <div className="max-w-5xl mx-auto bg-white rounded shadow p-4">
//         {data.length === 0 ? (
//           <p className="text-center text-gray-500">No orders found.</p>
//         ) : (
//           data.map((order, index) => (
//             <div
//               key={order._id || index}
//               className="border-b border-gray-300 py-4 text-left"
//             >
//               <p><strong>Product:</strong> {order.product_name}</p>
//               <p><strong>Quantity:</strong> {order.quantity}</p>
//               <p><strong>Price:</strong> ₹{order.product_price}</p>
//               <p><strong>Customer:</strong> {order.customer_name}</p>
//               <p><strong>Mobile:</strong> {order.mobile_no}</p>
//               <p><strong>Address:</strong> {order.address}</p>
//               <p><strong>Payment Mode:</strong> {order.payment_mode}</p>
//             </div>
//           ))
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Orders;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../../common/Footer';
import UserNav from '../Userpage/UserNav';

const Orders = () => {
  const [data, setData] = useState([]);

  const getOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getorders"); 
      const orders = Array.isArray(response?.data?.showdata) ? response.data.showdata : [];
      setData(orders);
    } catch (error) {
      console.log("GET error:", error.message);
      setData([]);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="bg-rose-100">
      <UserNav />
      <h2 className="text-center font-bold text-3xl text-red-600 p-5 mt-20">Orders</h2>

      <div className="max-w-3xl mx-auto bg-white rounded shadow p-4 mb-10">
        {data.length === 0 ? (
          <p className="text-center text-gray-500">No orders found.</p>
        ) : (
          data.map((order, index) => (
            <div
              key={order._id || index}
              className="border-b border-gray-300 py-4 text-left"
            >
              <p><strong>Product:</strong> {order.product_name}</p>
              <p><strong>Quantity:</strong> {order.quantity}</p>
              <p><strong>Price:</strong> ₹{order.product_price}</p>
              <p><strong>Customer:</strong> {order.customer_name}</p>
              <p><strong>Mobile:</strong> {order.mobile_no}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Payment Mode:</strong> {order.payment_mode}</p>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Orders;
