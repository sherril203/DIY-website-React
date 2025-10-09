const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    product_img: { type: String },
    product_name: { type: String },
    product_price: { type: String },
    category: { type: String, required: true }, // new field to store 'bags', 'shoes', etc.
    description:{type:String},
    path:{type:String}
});

const categoryModel = mongoose.model('Category', categorySchema);

module.exports = categoryModel;
