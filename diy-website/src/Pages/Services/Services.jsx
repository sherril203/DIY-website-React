import React from 'react';
import { FaLeaf, FaCogs, FaTruck } from 'react-icons/fa'; 

const Services = () => {
  const services = [
    {
      title: "Eco Friendly Materials",
      description: "We are providing eco friendly products without chemicals",
      icon: <FaLeaf />,
    },
    {
      title: "Product Customization",
      description: "We are providing product customization as per customer need",
      icon: <FaCogs />,
    },
    {
      title: "Delivery Process",
      description: "We ensure timely delivery of every product, so you can enjoy your order without delay",
      icon: <FaTruck />,
    },
  ];

  return (
    <div className="bg-rose-50 py-12 px-4 ">
      {/* <h2 className="text-center font-bold text-3xl text-red-800 mb-10">Services</h2> */}
      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-15">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 rounded-2xl p-6 text-center"
          >
            <div className="text-4xl text-red-800 mb-4 flex justify-center items-center">{item.icon}</div>
            <h3 className="text-xl font-bold text-red-800 mb-2">{item.title}</h3>

            {/* Description */}
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
