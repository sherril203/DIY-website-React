const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  quantity: { type: Number, required: true },
  product_price: { type: Number, required: true }, // total price = unit price * quantity
  customization: { type: String, enum: ['no', 'name', 'image'], default: 'no' },
  custom_value: { type: String }, // for name customization or image filename/path
  customer_name: { type: String, required: true },
  customer_email: { type: String, required: true },
  mobile_no: { type: String, required: true }, // store as string to preserve leading zeros
  address: { type: String, required: true },
  payment_mode: { type: String, enum: ['online_payment', 'upi', 'cash'], required: true },
  upi_id: { type: String }, // optional, only if payment_mode === 'upi'
  createdAt: { type: Date, default: Date.now }
});

const PurchaseModel = mongoose.model('Purchase', PurchaseSchema);

module.exports = PurchaseModel;
