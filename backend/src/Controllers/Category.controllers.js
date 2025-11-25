// Create product category (with image upload)
const categoryModel=require('../model/category.model')
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
    const categoryName = req.params.id; // e.g., 'bags'
    const showcategory = await categoryModel.find({ category: categoryName }).sort({ _id: 1 });
    res.status(200).send({ data: showcategory });
  } catch (err) {
    console.error("Error in get data:", err);
    res.status(500).send("Error retrieving products category");
  }
};
const getproductsById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }

    const product = await categoryModel.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } catch (err) {
    console.error("Error retrieving product:", err);
    res.status(500).json({ error: "Server error retrieving product" });
  }
};
module.exports = {
  postCategory,
  getcategory,
  getproductsById 

};