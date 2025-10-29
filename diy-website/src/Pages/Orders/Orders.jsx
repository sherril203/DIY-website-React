import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Footer from '../../common/Footer';
import Navbar from '../../common/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VITE_API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch orders
  const getOrders = useCallback(async () => {
    try {
      const storedUser = localStorage.getItem('user');
      if (!storedUser) {
        toast.error('User not logged in');
        setLoading(false);
        return;
      }

      const userData = JSON.parse(storedUser);
      const userId =  userData?.id;

      if (!userId) {
        toast.error('User not logged in');
        setLoading(false);
        return;
      }

      const response = await axios.get(`${VITE_API_BACKEND_URL}/api/getOrders`, {
        params: { userId },
      });

      const fetchedOrders = Array.isArray(response?.data?.showdata)
        ? response.data.showdata
        : [];
      setOrders(fetchedOrders);
    } catch (err) {
      console.error('Error fetching orders:', err.message);
      toast.error('Failed to fetch orders');
      setOrders([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  // Cancel order
  const cancelOrder = async (orderId) => {
    if (!window.confirm('Are you sure you want to cancel this order?')) return;

    try {
      const response = await axios.delete(`${VITE_API_BACKEND_URL}/api/orders/${orderId}`);
      toast.success('Order cancelled successfully');

      // Update status in frontend
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: 'Cancelled' } : order
        )
      );
    } catch (err) {
      console.error('Error cancelling order:', err.message);
      toast.error('Failed to cancel order');
    }
  };

  if (loading) {
    return (
      <div className="bg-stone-100 h-screen flex justify-center items-center text-xl text-gray-600">
        Loading your orders...
      </div>
    );
  }

  return (
    <div className="bg-stone-100 min-h-screen">
      <ToastContainer />
      <Navbar />
      <h2 className="text-center font-bold text-3xl text-stone-700 p-5 mt-20">
        Your Orders
      </h2>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 px-4">
        {orders.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No orders found.</p>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {order.product_name}
              </h3>
              <p className="text-gray-600"><strong>Quantity:</strong> {order.quantity}</p>
              <p className="text-gray-600"><strong>Price:</strong> ₹{order.product_price}</p>
              <p className="text-gray-600"><strong>Customer:</strong> {order.customer_name}</p>
              <p className="text-gray-600"><strong>Mobile:</strong> {order.mobile_no}</p>
              <p className="text-gray-600"><strong>Address:</strong> {order.address}</p>
              <p className="text-gray-600"><strong>Payment Mode:</strong> {order.payment_mode}</p>
              <p className="text-gray-600"><strong>Payment ID:</strong> {order.razorpay_payment_id}</p>
              <p className="text-gray-600"><strong>Status:</strong> {order.status}</p>

              <button
                onClick={() => cancelOrder(order._id)}
                disabled={order.status === 'Cancelled'}
                className={`mt-4 w-full p-3 rounded text-white ${
                  order.status === 'Cancelled'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-red-500 hover:bg-red-600'
                }`}
              >
                {order.status === 'Cancelled' ? 'Cancelled' : 'Cancel Order'}
              </button>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Orders;
