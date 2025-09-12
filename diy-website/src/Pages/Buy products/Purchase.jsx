import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';

const Purchase = () => {
  const location = useLocation();
  const product = location.state?.product;

  const [customize, setCustomize] = useState(false);
  const [customType, setCustomType] = useState('');
  const [paymentMode, setPaymentMode] = useState('');

  // Pre-fill product info
  const [productName, setProductName] = useState(product?.name || '');
  const [productPrice, setProductPrice] = useState(product?.price || '');
  const [quantity, setQuantity] = useState(1);

  // Customer info
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [upiId, setUpiId] = useState('');
  const [customValue, setCustomValue] = useState(''); // name or file

  // Status
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      product_name: productName,
      product_price: Number(productPrice),
      quantity: Number(quantity),
      customization: customize ? customType : 'no',
      customer_name: customerName,
      customer_email: customerEmail,
      mobile_no: Number(mobileNo),
      address,
      payment_mode: paymentMode,
    };

    // Add optional fields
    if (customize && customType === 'name') {
      formData.customization_value = customValue;
    }

    if (paymentMode === 'upi') {
      formData.upi_id = upiId;
    }

    try {
      const res = await axios.post('http://localhost:5000/purchase', formData);
      setStatus(' Purchase successful!');
    } catch (err) {
      console.error(err);
      setStatus(' Error during purchase.');
    }
  };

  return (
    <div className="p-6 mt-18 text-center bg-rose-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded p-6 w-full max-w-4xl mx-auto shadow-md"
      >
        <h2 className="text-center font-bold text-2xl mb-6">Purchase Form</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="text-left space-y-4">
            {/* Product Name */}
            <div>
              <label htmlFor="product_name" className="block mb-1 font-semibold">
                Product Name
              </label>
              <input
                type="text"
                id="product_name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full border p-2 rounded"
                readOnly
              />
            </div>

            {/* Quantity */}
            <div>
              <label htmlFor="quantity" className="block mb-1 font-semibold">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full border p-2 rounded"
                min={1}
              />
            </div>

            {/* Product Price */}
            <div>
              <label htmlFor="product_price" className="block mb-1 font-semibold">
                Product Price
              </label>
              <input
                type="number"
                id="product_price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="w-full border p-2 rounded"
                readOnly
              />
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
                  />
                  Yes
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
                      setCustomValue('');
                    }}
                  />
                  No
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
                        onChange={() => {
                          setCustomType('image');
                          setCustomValue('');
                        }}
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
                        onChange={() => {
                          setCustomType('name');
                          setCustomValue('');
                        }}
                        className="mr-1"
                      />
                      Name
                    </label>
                  </div>

                  {/* Input for customization */}
                  {customType === 'image' && (
                    <div className="mt-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setCustomValue(e.target.files[0])}
                        className="block mt-2"
                      />
                    </div>
                  )}
                  {customType === 'name' && (
                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder="Enter name"
                        className="w-full border p-2 rounded"
                        value={customValue}
                        onChange={(e) => setCustomValue(e.target.value)}
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
              <label htmlFor="customer_name" className="block mb-1 font-semibold">
                Customer Name
              </label>
              <input
                type="text"
                id="customer_name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label htmlFor="customer_email" className="block mb-1 font-semibold">
                Customer Email
              </label>
              <input
                type="email"
                id="customer_email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label htmlFor="customer_mobile" className="block mb-1 font-semibold">
                Mobile No
              </label>
              <input
                type="tel"
                id="customer_mobile"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label htmlFor="address" className="block mb-1 font-semibold">
                Address
              </label>
              <textarea
                id="address"
                rows="3"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border p-2 rounded"
              ></textarea>
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
                  />
                  UPI
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment_mode"
                    value="cash"
                    className="mr-1"
                    onChange={() => setPaymentMode('cash')}
                  />
                  Cash
                </label>
              </div>

              {paymentMode === 'upi' && (
                <div className="mt-2">
                  <label htmlFor="upi_id" className="block mb-1 font-semibold">
                    Enter UPI ID
                  </label>
                  <input
                    type="text"
                    id="upi_id"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
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
          {status && <p className="mt-4 text-lg font-medium">{status}</p>}
        </div>
      </form>
    </div>
  );
};

export default Purchase;
