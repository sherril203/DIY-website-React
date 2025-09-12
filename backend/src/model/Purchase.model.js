const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
    product_name: { type: String },
    quantity: { type: Number },
    product_price: { type: Number },
    customization: { type: String },
    customer_name: { type: String },
    customer_email: { type: String },
    mobile_no: { type: Number },
    address: { type: String },
    payment_mode: { type: String }
});

const purchaseModel = mongoose.model('Purchase', PurchaseSchema);

module.exports = purchaseModel;
