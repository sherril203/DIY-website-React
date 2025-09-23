// import React, { useState } from 'react'
// import { useLocation } from 'react-router'
// import UserNav from '../Userpage/UserNav';

// const PaymentSuccess = () => {
//      const [paymentid, setpaymentid] = useState();
//     const location =useLocation();
//     const payment_ID = location.state;
//     if(payment_ID) {
//          setpaymentid(payment_ID);
//     }else{
//         window.alert('Payment Failed');
//     }
//   return (
//     <div className='bg-rose-50'>
//         <UserNav/>
//         <div>Payment_success
//           <p>Payment ID: {paymentid}</p>
//         </div>
//         </div>
//   )
// }

// export default PaymentSuccess
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import UserNav from '../Userpage/UserNav';
import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
  const [paymentid, setPaymentid] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const id = location.state || localStorage.getItem("paymentid");
    if (id) {
      setPaymentid(id);
    } else {
      window.alert("Payment Failed");
    }
  }, [location.state]);

  return (
    <div className="bg-rose-50 w-full min-h-screen p-3">
      <UserNav />
      <div className="mt-50 p-6 bg-white rounded-2xl shadow-md mx-auto max-w-md flex flex-col justify-center items-center text-center">
        <FaCheckCircle size={100} className="text-green-500 mb-4" />
        <h2 className="text-2xl font-semibold">Order & Payment Success</h2>
        {paymentid && (
          <p className="mt-2 text-gray-600">Payment ID: <span className="font-mono">{paymentid}</span></p>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
