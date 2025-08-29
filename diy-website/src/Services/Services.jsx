import React from 'react';

const Services = () => {
  const services = [
    {
      Title: "Eco Friendly Materials",
      description: "We are providing eco friendly products without chemicals"
    },
    {
      Title: "Product Customization",
      description: "We are providing product customization as per customer need"
    },
    {
      Title: "Delivery Process",
      description: "We ensure timely delivery of every product, so you can enjoy your order without delay"
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen mt-15">
        <h2 className='text-center font-bold text-2xl p-3'>Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((items, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg p-6 text-black hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-bold mb-2">{items.Title}</h2>
            <p className="text-gray-700">{items.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
