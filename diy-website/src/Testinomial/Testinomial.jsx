import React, { useState } from 'react';

const Testinomial = () => {
   const [user, setUser] = useState([]);

  const [query,setQuery]=useState({
    name: "",
    email: "",
    message:""
  })
  // Input handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
 //   post query of customer
  const handleSubmit = async (e) => {
    console.log("form",query);
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4050/postquery",query)
      console.log("Post query", response);
      setUser((pre) => [...pre, setQuery]);
      //reset
      setQuery({
        name: "",
        email: "",
        message:""
      });
      getUserAPI()
    } catch (error) {
      console.log("Error in post ", error.message);
    }
  };

  return (
    <div className='bg-amber-300 min-h-screen flex flex-col justify-center items-center p-10 space-y-8'>
      <h2 className='text-2xl text-indigo-900 font-semibold text-center'>
        If you have any queries or comments, kindly fill the form
      </h2>

      <form 
        onSubmit={handleSubmit} 
        className='bg-white rounded-xl shadow-lg p-10 space-y-6 w-full max-w-md'
      >
        <div>
          <label htmlFor="name" className='text-indigo-800 font-semibold text-lg'>Name</label><br />
          <input 
            type="text" 
            id="name"
            placeholder='Enter your name' 
            onClick={handleChange}
            className='w-full bg-gray-100 border border-amber-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-amber-500' 
            required 
          />
        </div>
        
        <div>
          <label htmlFor="email" className='text-indigo-800 font-semibold text-lg'>Email</label><br />
          <input 
            type="email" 
            onClick={handleChange}
            id="email"
            placeholder='Enter your email' 
            className='w-full bg-gray-100 border border-amber-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-amber-500' 
            required 
          />
        </div>
        
        <div>
          <label htmlFor="message" className='text-indigo-800 font-semibold text-lg'>Message</label><br />
          <textarea 
            id="message" 
            onClick={handleChange}
            placeholder='Enter your comments' 
            className='w-full bg-gray-100 border border-amber-300 rounded p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-amber-500' 
            required 
          />
        </div>

        <button 
          type='submit' 
          className='w-full bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition-all duration-300 text-lg'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Testinomial;
