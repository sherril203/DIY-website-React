// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import Navigate from '../../common/Navigate';
// import Footer from '../../common/Footer';
// import 'react-toastify/dist/ReactToastify.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Edit = () => {
//   // Form state
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     address: ''
//   });

//   useEffect(() => {
//     AOS.init({ duration: 2000, once: true });
//   }, []);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Replace with your actual endpoint
//       const response = await axios.post('/api/profile/update', formData);

//       toast.success('Profile updated successfully!');
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//       toast.error('Failed to update profile. Please try again.');
//     }
//   };

//   return (
//     <div className="  text-center bg-rose-50  ">
//       <Navigate />
//       <form
//         data-aos="fade-up"
//         onSubmit={handleSubmit}
//         className="bg-white rounded  sm:p-10 mt-20 w-150  mx-auto shadow-md mb-6"
//       >
//         <h2 className="text-center font-bold text-2xl mb-6">Profile Update</h2>

//         <div className="text-left space-y-4">
//           <div>
//             <label className="block font-semibold">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-semibold">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-semibold">Mobile Number</label>
//             <input
//               type="tel"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-semibold">Address</label>
//             <textarea
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//               rows={3}
//               required
//             ></textarea>
//           </div>
//         </div>

//         <div className="text-center mt-8">
//           <button
//             type="submit"
//             className="bg-gradient-to-r from-fuchsia-600 to-pink-500 px-6 py-3 text-white font-bold rounded hover:opacity-90"
//           >
//             Submit
//           </button>
//         </div>
//       </form>

//       <ToastContainer position="top-right" autoClose={1000} />
//       <Footer/>
//     </div>
//   );
// };

// export default Edit;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Navigate from '../../common/Navigate';
import Footer from '../../common/Footer';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Edit = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobile: '',
    address: ''
  });

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });

    // ✅ Load user info from localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setFormData({
        username: user.username || '',
        email: user.email || '',
        mobile: user.mobile || '',
        address: user.address || ''
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const savedUser = JSON.parse(localStorage.getItem('user'));

      // ✅ Make API call with token in headers
      const response = await axios.put(
        `http://localhost:5000/user/${savedUser.id}`, // your backend route
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // ✅ Update localStorage with new data
      localStorage.setItem('user', JSON.stringify(response.data.user));

      toast.success('Profile updated successfully!');
      console.log(response.data);
    } catch (error) {
      console.error(error);
      toast.error('Failed to update profile. Please try again.');
    }
  };

  return (
    <div className="text-center bg-rose-50 min-h-screen">
      <Navigate />
      <form
        data-aos="fade-up"
        onSubmit={handleSubmit}
        className="bg-white rounded sm:p-10 mt-20 w-full max-w-md mx-auto shadow-md mb-6"
      >
        <h2 className="text-center font-bold text-2xl mb-6">Profile Update</h2>

        <div className="text-left space-y-4">
          <div>
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              rows={3}
              required
            ></textarea>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-gradient-to-r from-fuchsia-600 to-pink-500 px-6 py-3 text-white font-bold rounded hover:opacity-90"
          >
            Submit
          </button>
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={1000} />
      <Footer />
    </div>
  );
};

export default Edit;
