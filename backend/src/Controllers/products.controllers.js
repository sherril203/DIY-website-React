const productModel = require('../model/products.model');

const postproduct = async (req, res) => {
  try {
    const productdata = req.body;

    if (req.file) {
      productdata.imageUrl = req.file.filename; // correct key
      productdata.path = req.file.path; // optional: store full path
    }

    const savedProduct = new productModel(productdata);
    await savedProduct.save();

    res.status(201).send({ message: "Product submitted successfully" });
  } catch (err) {
    console.error("Error submitting product:", err);
    res.status(500).send({ message: "Product submission error" });
  }
};

const getproducts = async (req, res) => {
  try {
    const showproducts = await productModel.find().sort({ _id: -1 });
    return res.status(200).send({ showdata: showproducts });
  } catch (err) {
    console.error("Error in get data:", err);
    return res.status(500).send("Error retrieving products");
  }
};

module.exports = {
  postproduct,
  getproducts,
};
