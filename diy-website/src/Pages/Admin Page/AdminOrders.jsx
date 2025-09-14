import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminOrders = () => {
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
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mt-12 mb-2 text-center">Dashboard</h2>
      <h3 className="text-2xl font-semibold mb-6 text-center">Orders</h3>

      <div className="max-w-3xl mx-auto bg-rose-100 rounded shadow p-4 mb-10">
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
    </div>
  );
};

export default AdminOrders;
