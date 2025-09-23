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
    <div className="bg-rose-100 min-h-screen">
      <UserNav />
      <h2 className="text-center font-bold text-3xl text-red-600 p-5 mt-20">Orders</h2>

      <div className=" mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 mb-10 px-4">
        {data.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No orders found.</p>
        ) : (
          data.map((order, index) => (
            <div
              key={order._id || index}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{order.product_name}</h3>
              <p className="text-gray-600"><strong>Quantity:</strong> {order.quantity}</p>
              <p className="text-gray-600"><strong>Price:</strong> ₹{order.product_price}</p>
              <p className="text-gray-600"><strong>Customer:</strong> {order.customer_name}</p>
              <p className="text-gray-600"><strong>Mobile:</strong> {order.mobile_no}</p>
              <p className="text-gray-600"><strong>Address:</strong> {order.address}</p>
              <p className="text-gray-600"><strong>Payment Mode:</strong> {order.payment_mode}</p>
              <p className="text-gray-600"><strong>Status:</strong> {order.status}</p>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Orders;
