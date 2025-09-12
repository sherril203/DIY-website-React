import React, { useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Purchase = () => {
  const location = useLocation();
  const product = location.state?.product;

  const [customize, setCustomize] = useState(false);
  const [customType, setCustomType] = useState('');
  const [paymentMode, setPaymentMode] = useState('');

  const [productName, setProductName] = useState(product?.name || '');
  const [productPrice, setProductPrice] = useState(product?.price || '');
  const [quantity, setQuantity] = useState(product?.quantity || 1);

  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [upiId, setUpiId] = useState('');
  const [customValue, setCustomValue] = useState('');

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

    if (customize && customType === 'name') {
      formData.customization_value = customValue;
    }

    if (paymentMode === 'upi') {
      formData.upi_id = upiId;
    }

    try {
      await axios.post('http://localhost:5000/purchase', formData);
      toast.success(' Purchase successful!');
    } catch (err) {
      console.error(err);
      toast.error('Error during purchase. Please try again.');
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

          <div className="text-left space-y-4">
            <div>
              <label className="block font-semibold">Product Name</label>
              <input
                type="text"
                value={productName}
                readOnly
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block font-semibold">Quantity</label>
              <input
                type="number"
                value={quantity}
                min={1}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block font-semibold">Product Price</label>
              <input
                type="number"
                value={productPrice}
                readOnly
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block font-semibold">Customization Process</label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="customization"
                    value="yes"
                    onChange={() => setCustomize(true)}
                    className="mr-1"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="customization"
                    value="no"
                    onChange={() => {
                      setCustomize(false);
                      setCustomType('');
                      setCustomValue('');
                    }}
                    className="mr-1"
                  />
                  No
                </label>
              </div>

              {customize && (
                <div className="mt-2">
                  <label className="block font-semibold">Customized by</label>
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

                  {customType === 'image' && (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setCustomValue(e.target.files[0])}
                      className="block mt-2"
                    />
                  )}
                  {customType === 'name' && (
                    <input
                      type="text"
                      placeholder="Enter name"
                      value={customValue}
                      onChange={(e) => setCustomValue(e.target.value)}
                      className="w-full border p-2 rounded mt-2"
                    />
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="text-left space-y-4">
            <div>
              <label className="block font-semibold">Customer Name</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block font-semibold">Mobile Number</label>
              <input
                type="tel"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block font-semibold">Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border p-2 rounded"
                rows={3}
              ></textarea>
            </div>

            <div>
              <label className="block font-semibold">Payment Mode</label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="payment_mode"
                    value="upi"
                    onChange={() => setPaymentMode('upi')}
                    className="mr-1"
                  />
                  UPI
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment_mode"
                    value="cash"
                    onChange={() => setPaymentMode('cash')}
                    className="mr-1"
                  />
                  Cash
                </label>
              </div>

              {paymentMode === 'upi' && (
                <div className="mt-2">
                  <label className="block font-semibold">UPI ID</label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="example@upi"
                    className="w-full border p-2 rounded"
                  />
                </div>
              )}

              {paymentMode === 'cash' && (
                <div className="mt-2 text-sm text-gray-500 italic">
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

      <ToastContainer position="top-right" autoClose={1000} />
    </div>
  );
};

export default Purchase;
