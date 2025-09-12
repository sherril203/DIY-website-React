import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getproducts");
      const products = Array.isArray(response?.data?.data) ? response.data.data : [];
      setData(products);
    } catch (error) {
      console.log("GET error:", error.message);
      setData([]);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mt-12 mb-2 text-center">Dashboard</h2>
      <h3 className="text-2xl font-semibold mb-6 text-center">Products</h3>

      {data.length === 0 ? (
        <p className="text-center text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white hover:shadow-lg transition-shadow duration-300"
            >
              {product.product_img ? (
                <img
                  src={`http://localhost:5000/files/${product.product_img}`}
                  alt={product.product_name}
                  className="w-40 h-40 object-contain mb-4 rounded"
                  loading="lazy"
                />
              ) : (
                <div className="w-40 h-40 flex items-center justify-center bg-gray-200 mb-4 rounded text-gray-500">
                  No Image
                </div>
              )}
              <h3 className="text-lg font-semibold mb-2 text-center break-words">{product.product_name}</h3>
              <p className="text-gray-700 mb-1">Quantity: {product.quantity}</p>
              <p className="text-gray-700 font-semibold">Price: ₹{product.product_price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
