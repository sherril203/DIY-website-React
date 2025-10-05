const productModel = require('../model/products.model');
const categoryModel=require('../model/category.model')
// Create product (with image upload)
const postproduct = async (req, res) => {
  try {
    const productdata = req.body;

    if (req.file) {
      productdata.product_img = req.file.filename;
    }

    const savedProduct = new productModel(productdata);
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
const getproducts = async (req, res) => {
  try {
    const showproducts = await productModel.find().sort({ _id: -1 });
    res.status(200).send({ data: showproducts });
  } catch (err) {
    console.error("Error in get data:", err);
    res.status(500).send("Error retrieving products");
  }
};
// get by id
// const getproductsById = async (req, res) => {
//   try {
//     const id=req.params.id
//     const showproducts = await productModel.findById(id)
//     res.status(200).send({ data: showproducts });
//   } catch (err) {
//     console.error("Error in get data:", err);
//     res.status(500).send("Error retrieving products");
//   }
// };

// Update product (with optional image upload)
const updateproducts = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;

    if (req.file) {
      updateData.product_img = req.file.filename;
    }

    const updated = await productModel.findByIdAndUpdate(id, {...updateData}, { new: true });

    if (!updated) {
      return res.status(404).send({ message: "Product not found" });
    }

    return res.status(200).send({ data: updated });
  } catch (err) {
    console.error("Error updating product:", err);
    return res.status(500).send({ message: "Error updating product" });
  }
};

// Delete product
const deleteproducts = async (req, res) => {
  try {
    const id = req.params.id;

    const deleted = await productModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.status(200).send({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).send({ message: "Error deleting product" });
  }
};
// Create product category (with image upload)
const postCategory = async (req, res) => {
  try {
    const categorydata = req.body;

    if (req.file) {
      categorydata.product_img = req.file.filename;
    }

    const savedProduct = new categoryModel(categorydata);
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
// Assuming you have categoryModel or Product model with a field 'category'
const getcategory = async (req, res) => {
  try {
    const categoryName = req.params.category; // e.g., 'bags'
    const showcategory = await categoryModel.find({ category: categoryName }).sort({ _id: 1 });
    res.status(200).send({ data: showcategory });
  } catch (err) {
    console.error("Error in get data:", err);
    res.status(500).send("Error retrieving products category");
  }
};





module.exports = {
  postproduct,
  getproducts,
  updateproducts,
  deleteproducts,
  postCategory,
  getcategory,

};
