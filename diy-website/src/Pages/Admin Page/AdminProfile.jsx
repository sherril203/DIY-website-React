// import React from 'react'
// import { MdAccountCircle } from "react-icons/md";
// import { Link } from 'react-router';

// const AdminProfile = () => {
//   return (
//     <div className='bg-rose-50 min-h-screen flex flex-col '>
//       <div className='flex-grow flex justify-center items-start mt-8'>
//         <div className='rounded p-6 bg-white w-full max-w-md shadow-md'>
//           <h2 className='text-3xl font-bold text-center mb-4'>Profile</h2>
//           <div className='flex justify-center mb-2'>
//             <MdAccountCircle size={150} />
//           </div>
//           <h3 className='text-center text-lg font-medium mb-4'>Admin</h3>
//           <h3 className='text-center text-lg font-medium mb-4'>
//             Role : admin
//           </h3>
//           <div className='flex justify-center gap-3'>
//             <button className='px-4 py-2 bg-gradient-to-l from-fuchsia-200 to-pink-300 rounded hover:opacity-90 transition'>
//               Edit Profile
//             </button>
//             <Link to="/adminlogin" className='px-4 py-2 bg-gradient-to-l from-fuchsia-200 to-pink-300 
//             rounded hover:opacity-90 transition'><button>Log out</button></Link>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default AdminProfile;

import React, { useEffect, useState } from 'react';
import { MdAccountCircle } from "react-icons/md";
import { Link, useNavigate } from 'react-router';

const AdminProfile = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const savedAdmin = localStorage.getItem("admin");
    if (savedAdmin) {
      setAdmin(JSON.parse(savedAdmin));
    } else {
      navigate("/adminlogin"); // redirect if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("token");
    navigate("/adminlogin");
  };

  if (!admin) return null;

  return (
    <div className='bg-rose-50 min-h-screen flex flex-col '>
      <div className='flex-grow flex justify-center items-start mt-8'>
        <div className='rounded p-6 bg-white w-full max-w-md shadow-md'>
          <h2 className='text-3xl font-bold text-center mb-4'>Profile</h2>
          <div className='flex justify-center mb-2'>
            <MdAccountCircle size={150} />
          </div>
          <h3 className='text-center text-lg font-medium mb-4'>{admin.username || "Admin"}</h3>
          <h3 className='text-center text-lg font-medium mb-4'>Role: {admin.role || "admin"}</h3>
          <div className='flex justify-center gap-3'>
            {/* <Link to="/admin/edit" className='px-4 py-2 bg-gradient-to-l from-fuchsia-200 to-pink-300 rounded hover:opacity-90 transition'>
              <button>Edit Profile</button>
            </Link> */}
            <button onClick={handleLogout} className='px-4 py-2 bg-gradient-to-l from-fuchsia-200 to-pink-300 rounded hover:opacity-90 transition'>
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;

