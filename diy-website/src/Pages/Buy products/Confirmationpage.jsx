import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Footer from '../../common/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import Navbar from '../../common/Navbar';

const Confirmationpage = () => {
  const location = useLocation();
  const data = location.state; // formData passed from Purchase
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const VITE_API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => alert("Razorpay SDK failed to load");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCashOrder = async () => {
    const cashOrderData = {
      ...data,
      userId,
      razorpay_payment_id: "cash_payment"
    };

    try {
      const res = await axios.post(`${VITE_API_BACKEND_URL}/api/orders`, cashOrderData);
      if (res.data) {
     
          toast.success("Order placed successfully with Cash on Delivery!");
          navigate("/success", { state: "cash_payment" });
          return;
      } else {
         toast.warn("Order placed with Cash on Delivery. Email failed to send.");
      }

      
    } catch (err) {
      console.error("Error saving cash order:", {
        status: err.response?.status,
        message: err.response?.data?.message || err.message,
        data: err.response?.data,
      });
      toast.error("Failed to place cash order. Please try again.");
    }
  };

  const handleOnlinePayment = () => {
    if (!scriptLoaded) {
      alert("Razorpay SDK not loaded yet");
      return;
    }

    const options = {
      key: "rzp_test_RIxDCEPrAengZM", // Replace with live key in production
      amount: data.product_price * 100,
      currency: "INR",
      name: "Artworld",
      description: "Purchase Payment",
      handler: async function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);

        const orderData = {
          ...data,
          userId,
          razorpay_payment_id: response.razorpay_payment_id,
        };

        console.log("Sending order data:", orderData);

        try {
          const res = await axios.post(`${VITE_API_BACKEND_URL}/api/orders`, orderData);

          if (res.data?.emailError) {
            toast.warn("Order saved, but email failed to send.");
          } else {
            toast.success("Order saved successfully!");
          }

          navigate("/success", { state: response.razorpay_payment_id });
        } catch (err) {
          console.error("Error saving order:", {
            status: err.response?.status,
            message: err.response?.data?.message || err.message,
            data: err.response?.data,
          });
          toast.error("Order save failed. Please contact support.");
        }
      },
      prefill: {
        name: data.customer_name,
        email: data.customer_email,
        contact: data.mobile_no,
      },
      notes: {
        address: "Razorpay corporate office",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data) {
      toast.error("Missing order details.");
      return;
    }

    if (data.payment_mode === "cash") {
      handleCashOrder();
    } else {
      handleOnlinePayment();
    }
  };

  return (
    <div className="bg-stone-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center mt-20 mb-20">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl mt-15" data-aos="fade-up">
          <h2 className="text-center text-2xl font-bold mb-6" data-aos="zoom-in">
            Product Confirmation
          </h2>

          <div className="space-y-3 text-gray-700">
            <h2><b>Product Name:</b> {data?.product_name}</h2>
            <h2><b>Quantity:</b> {data?.quantity}</h2>
            <h2><b>Price:</b> ₹{data?.product_price}</h2>
            <h2><b>Customization:</b> {data?.customization}</h2>
            <h2><b>Customer Name:</b> {data?.customer_name}</h2>
            <h2><b>Email:</b> {data?.customer_email}</h2>
            <h2><b>Address:</b> {data?.address}</h2>
            <h2><b>Mobile:</b> {data?.mobile_no}</h2>
            <h2><b>Payment Mode:</b> {data?.payment_mode}</h2>
          </div>

          <div className="text-center mt-8" data-aos="flip-up">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-fuchsia-600 to-pink-500 px-6 py-3 text-white font-bold rounded-lg shadow hover:opacity-90 transition"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Confirmationpage;
