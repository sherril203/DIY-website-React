const { default: mongoose } = require('mongoose');
const Product=require('../model/productHome.model')
// Create product (with image upload)
const postSomeProduct = async (req, res) => {
  try {
    const data = req.body;

    if (req.file) {
      data.product_img = req.file.filename;
    }

    const savedProduct = new Product(data);
    await savedProduct.save();

    res.status(201).send({
      message: "Product submitted successfully",
      data: savedProduct, 
    });
  } catch (err) {
    console.error("Error submitting product:", err);
    res.status(500).send({ message: "Product submission error" });
  }
};

// Get all products
const getSomeProduct = async (req, res) => {
  try {
    const showproducts = await Product.find().sort({ _id: 1 });
    res.status(200).send({ data: showproducts });
  } catch (err) {
    console.error("Error in get data:", err);
    res.status(500).send("Error retrieving products");
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid ID" });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.status(200).send({ data: product });
  } catch (err) {
    console.error("Error fetching product by ID:", err);
    res.status(500).send({ message: "Server error" });
  }
};

module.exports = {
  postSomeProduct,
  getSomeProduct,
getProductById
};
