import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProducts = () => {
  const [data, setData] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(true);

  const [formdata, setFormData] = useState({
    product_img: null, // store file here
    product_name: "",
    quantity: "",
    product_price: "",
  });

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // File input change handler — store the File object in formdata.product_img
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      product_img: e.target.files[0] || null,
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(formdata.product_img instanceof File)) {
      toast.error("Please select an image file");
      return;
    }

    const formData = new FormData();
    formData.append("file", formdata.product_img);
    formData.append("product_name", formdata.product_name);
    formData.append("quantity", formdata.quantity);
    formData.append("product_price", formdata.product_price);

    try {
      const response = await axios.post("http://localhost:5000/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const savedProduct = response.data.data;

      toast.success("Product added successfully!");

      setData((prev) => (Array.isArray(prev) ? [...prev, savedProduct] : [savedProduct]));

      // Reset formdata and clear file input
      setFormData({
        product_img: null,
        product_name: "",
        quantity: "",
        product_price: "",
      });

      e.target.reset(); // clears the file input visually

    } catch (error) {
      console.error("POST error:", error.message);
      toast.error("Failed to add product. Please try again.");
    }
  };

  // Update product (without image upload)
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updateData = {
        product_name: formdata.product_name,
        quantity: formdata.quantity,
        product_price: formdata.product_price,
      };

      const response = await axios.put(
        `http://localhost:5000/products/${formdata._id}`,
        updateData
      );

      const updated = response.data.data;

      setData((prev) => prev.map((item) => (item._id === updated._id ? updated : item)));

      handleCancel();
      toast.success("Product updated successfully!");
    } catch (error) {
      console.log("PUT error:", error.message);
      toast.error("Failed to update product. Please try again.");
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setButtonStatus(true);
    setFormData({
      product_img: null,
      product_name: "",
      quantity: "",
      product_price: "",
    });
  };

  // Edit product - populate form (no file, because file inputs can't be set programmatically)
  const handleEdit = (item) => {
    setFormData({
      _id: item._id,
      product_img: null, // user needs to upload new image if desired
      product_name: item.product_name,
      quantity: item.quantity,
      product_price: item.product_price,
    });
    setButtonStatus(false);
  };

  // Delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      setData((prev) => prev.filter((item) => item._id !== id));
      toast.success("Product deleted successfully!");
    } catch (error) {
      console.log("DELETE error:", error.message);
      toast.error("Failed to delete product.");
    }
  };

  // Fetch products
  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getproducts");
      const products = Array.isArray(response.data.data) ? response.data.data : [];
      setData(products);
    } catch (error) {
      console.log("GET error", error.message);
      setData([]);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 max-w-screen-xl mx-auto">
      <ToastContainer />

      <h2 className="text-2xl sm:text-3xl font-bold mt-14 mx-40 text-center sm:text-left">
        Add Products
      </h2>
      <br />
      <div className="w-full max-w-2xl mx-40 p-4 shadow bg-fuchsia-100 rounded">
        <form onSubmit={buttonStatus ? handleSubmit : handleUpdate}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Product Image</label>
            <input
              type="file"
              name="product_img"
              onChange={handleFileChange}
              className="w-full bg-white rounded p-2 border"
              // no value prop for file input!
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Product Name</label>
            <input
              type="text"
              name="product_name"
              value={formdata.product_name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full p-2 rounded border bg-white"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formdata.quantity}
              onChange={handleChange}
              placeholder="Enter quantity"
              className="w-full p-2 rounded border bg-white"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Product Price</label>
            <input
              type="text"
              name="product_price"
              value={formdata.product_price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full p-2 rounded border bg-white"
            />
          </div>

          <div className="flex flex-wrap gap-3 mt-4 justify-center sm:justify-start">
            <button
              type="submit"
              className="bg-fuchsia-300 p-2 px-6 rounded hover:bg-fuchsia-400 transition"
            >
              {buttonStatus ? "Submit" : "Update"}
            </button>
            {!buttonStatus && (
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-300 p-2 px-6 rounded"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="mt-10 mx-80">
        <table className="min-w-full table-auto border border-collapse">
          <thead className="bg-fuchsia-200">
            <tr>
              <th className="border px-4 py-2 text-left">Image</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Quantity</th>
              <th className="border px-4 py-2 text-left">Price</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) && data.length > 0 ? (
              data.filter(Boolean).map((product, index) => (
                <tr
                  key={product._id || index}
                  className="even:bg-white odd:bg-gray-50"
                >
                  <td className="border px-4 py-2">
                    {product.product_img ? (
                      <img
                        src={`http://localhost:4050/files/${product.product_img}`}
                        alt="Product"
                        className="w-16 h-16 object-cover rounded"
                      />
                    ) : (
                      "No image"
                    )}
                  </td>
                  <td className="border px-4 py-2">{product.product_name}</td>
                  <td className="border px-4 py-2">{product.quantity}</td>
                  <td className="border px-4 py-2">{product.product_price}</td>
                  <td className="border px-4 py-2 space-x-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddProducts;
