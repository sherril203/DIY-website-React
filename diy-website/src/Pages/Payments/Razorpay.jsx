import React, { useState } from 'react'

const Razorpay = () => {
    const [amount,setamount]=useState('')
    const handleChange=(e)=>{
        setamount(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(amount===""){
            alert('please enter amount')
        }
        else{
          var options={
            key:"rzp_test_RIxDCEPrAengZM",
            key_secret:"secret key id : ",
            amount: amount*100,
            currency:"INR",
            name:"artworld",
            description:"testing",
            handler: function(response){
                alert(response.razorpay_payment_id)
            },
            prefill:{
                name:"sherril",
                email:"sherrilkumar@gmail.com",
                contact:"9486907680"
            },
            notes:{
                address:"Razorpay corporate office"
            },
            theme:{
                color:"fuschia"
            }
          }
          var pay = new window.Razorpay(options);
          pay.open();
        }

    }
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
      Submit
    </button>
  </div>
</div>

  )
}

export default Razorpay