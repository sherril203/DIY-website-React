// import React, { useState,useEffect } from 'react'

// const Razorpay = () => {
//     const [amount,setamount]=useState('')
//     const handleChange=(e)=>{
//         setamount(e.target.value)
//     }
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         if(amount===""){
//             alert('please enter amount')
//         }
//         else{
//           var options={
//             key:"rzp_test_RIxDCEPrAengZM",
//             key_secret:"5mTLAQ4EVfWHWaX68hmMDbWQ",
//             amount: amount*100,
//             currency:"INR",
//             name:"artworld",
//             description:"testing",
//             handler: function(response){
//                 alert(response.razorpay_payment_id)
//             },
//             prefill:{
//                 name:"sherril",
//                 email:"sherrilkumar@gmail.com",
//                 contact:"9486907680"
//             },
//             notes:{
//                 address:"Razorpay corporate office"
//             },
//             theme:{
//                 color:"fuschia"
//             }
//           }
//           var pay = new window.Razorpay(options);
//           pay.open();
//         }

//     }
//       useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.onload = () => setScriptLoaded(true);
//     script.onerror = () => alert("Razorpay SDK failed to load");
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//   <div className="mt-7 w-full max-w-sm bg-white shadow-md rounded-xl p-6">
//     <h2 className="text-center text-xl font-bold mb-6">Payment Process</h2>
    
//     <input
//       type="number"
//       placeholder="Enter amount"
//       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//       value={amount}
//       onChange={handleChange}
//     />

//     <button
//       className="w-full mt-5 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
//       onClick={handleSubmit}
//     >
//       Submit
//     </button>
//   </div>
// </div>

//   )
// }

// export default Razorpay
import React, { useState, useEffect } from "react";

const Razorpay = () => {
  const [amount, setAmount] = useState("");
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount) {
      alert("Please enter amount");
      return;
    }

    if (!scriptLoaded) {
      alert("Razorpay SDK not loaded yet");
      return;
    }

    const options = {
      key: "rzp_test_RIxDCEPrAengZM", // Test key
      amount: amount * 100, // in paise
      currency: "INR",
      name: "Artworld",
      description: "Purchase Payment",
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);

        // TODO: Send response.razorpay_payment_id + amount to backend to save purchase/order and send email
      },
      prefill: {
        name: "Sherril",
        email: "sherrilkumar@gmail.com",
        contact: "9486907680",
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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => alert("Razorpay SDK failed to load");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="mt-7 w-full max-w-sm bg-white shadow-md rounded-xl p-6">
        <h2 className="text-center text-xl font-bold mb-6">Payment Process</h2>

        <input
          type="number"
          placeholder="Enter amount"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={amount}
          onChange={handleChange}
        />

        <button
          className="w-full mt-5 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
          onClick={handleSubmit}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Razorpay;
