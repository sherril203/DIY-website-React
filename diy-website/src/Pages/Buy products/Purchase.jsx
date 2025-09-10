import React, { useState } from 'react';

const Purchase = () => {
  const [customize, setCustomize] = useState(false);
  const [customType, setCustomType] = useState('');
  const [paymentMode, setPaymentMode] = useState('');

  return (
    <div className="p-6 mt-18 text-center bg-rose-50 ">
      <form className="bg-white rounded p-6 w-full max-w-4xl mx-auto shadow-md">
        <h2 className="text-center font-bold text-2xl mb-6">Purchase Form</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
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

            {/* Customization Process */}
            <div>
              <label className="block mb-1 font-semibold">Customization Process</label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="customization"
                    value="yes"
                    className="mr-1"
                    onChange={() => setCustomize(true)}
                  /> Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="customization"
                    value="no"
                    className="mr-1"
                    onChange={() => {
                      setCustomize(false);
                      setCustomType('');
                    }}
                  /> No
                </label>
              </div>

              {customize && (
                <div className="mt-4">
                  <label className="block mb-1 font-semibold">Customized by</label>
                  <div className="flex gap-4">
                    <label>
                      <input
                        type="radio"
                        name="custom_type"
                        value="image"
                        checked={customType === 'image'}
                        onChange={() => setCustomType('image')}
                        className="mr-1"
                      />
                      Image
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="custom_type"
                        value="name"
                        checked={customType === 'name'}
                        onChange={() => setCustomType('name')}
                        className="mr-1"
                      />
                      Name
                    </label>
                  </div>

                  {customType === 'image' && (
                    <div className="mt-2">
                      <input type="file" className="block mt-2" />
                    </div>
                  )}

                  {customType === 'name' && (
                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder="Enter name"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
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

            {/* Payment Mode */}
            <div>
              <label className="block mb-1 font-semibold">Payment Mode</label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="payment_mode"
                    value="upi"
                    className="mr-1"
                    onChange={() => setPaymentMode('upi')}
                  /> UPI
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment_mode"
                    value="cash"
                    className="mr-1"
                    onChange={() => setPaymentMode('cash')}
                  /> Cash
                </label>
              </div>

              {paymentMode === 'upi' && (
                <div className="mt-2">
                  <label htmlFor="upi_id" className="block mb-1 font-semibold">Enter UPI ID</label>
                  <input
                    type="text"
                    id="upi_id"
                    name="upi_id"
                    placeholder="example@upi"
                    className="w-full border p-2 rounded"
                  />
                </div>
              )}

              {paymentMode === 'cash' && (
                <div className="mt-2 text-sm text-gray-600 italic">
                  Cash will be collected on delivery.
                </div>
              )}
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
