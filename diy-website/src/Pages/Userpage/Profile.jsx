// import React from 'react'
// import { MdAccountCircle } from "react-icons/md";
// import UserNav from './UserNav';
// import Footer from '../../common/Footer';
// import { Link } from 'react-router';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

// const Profile = () => {
  
//     useEffect(() => {
//       AOS.init({ duration: 2000, once: true });
//     }, []);
//   return (
//     <div className='bg-rose-50 min-h-screen flex flex-col mt-20'>
//       <UserNav />
//       <div className='flex-grow flex justify-center items-start mt-10 mb-10'>
//         <div className='rounded p-6 bg-white w-full max-w-md shadow-md'>
//           <h2 className='text-3xl font-bold text-center mb-4'>Profile</h2>
//           <div className='flex justify-center mb-2'>
//             <MdAccountCircle size={150} />
//           </div>
//           <h3 className='text-center text-lg font-medium mb-4'>User</h3>
//           <h3 className='text-center text-lg font-medium mb-4'>Address:
//             <br />
//             112/34,near Egmore Railway Station,<br />
//             Gandhi Irwin road, Chennai
//           </h3>
//           <h3 className='text-center text-lg font-medium mb-4'>Mobile no:
//             <br /> 9587812654
//           </h3>
//           <h3 className='text-center text-lg font-medium mb-4'>Location: <br />
//           Chennai
//           </h3>
//           <div className='flex justify-center gap-3'>
//             <Link to="/editProfile" className='px-4 py-2 bg-gradient-to-l from-fuchsia-200 to-pink-300 rounded hover:opacity-90 transition'>
//             <button >
//               Edit Profile
//             </button>
//             </Link>
//             <Link to="/" className='px-4 py-2 bg-gradient-to-l from-fuchsia-200 to-pink-300 
//             rounded hover:opacity-90 transition'><button>Log out</button></Link>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Profile;
import React, { useEffect, useState } from 'react'
import { MdAccountCircle } from "react-icons/md";
import UserNav from './UserNav';
import Footer from '../../common/Footer';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });

    // get user info from localStorage
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg">Loading profile...</p>
      </div>
    )
  }

  return (
    <div className='bg-stone-100 min-h-screen flex flex-col mt-20'>
      <UserNav />
      <div className='flex-grow flex justify-center items-start mt-10 mb-10'>
        <div className='rounded p-6 bg-white w-full max-w-md shadow-md'>
          <h2 className='text-3xl font-bold text-center mb-4'>Profile</h2>
          <div className='flex justify-center mb-2'>
            <MdAccountCircle size={150} />
          </div>
          <h3 className='text-center text-lg font-medium mb-4'>
            {user.username}
          </h3>
          <h3 className='text-center text-lg font-medium mb-4'>
            Email: {user.email}
          </h3>
          <h3 className='text-center text-lg font-medium mb-4'>
            Address:<br />
            {user.address || "No address added yet"}
          </h3>
          <h3 className='text-center text-lg font-medium mb-4'>
            Mobile no:<br /> {user.mobile || "N/A"}
          </h3>
          <h3 className='text-center text-lg font-medium mb-4'>
            Location:<br /> {user.location || "N/A"}
          </h3>
          <div className='flex justify-center gap-3'>
            <Link to="/editProfile" className='px-4 py-2 bg-gradient-to-l from-fuchsia-200 to-pink-300 rounded hover:opacity-90 transition'>
              <button>Edit Profile</button>
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                window.location.href = "/";
              }}
              className="px-4 py-2 bg-gradient-to-l from-fuchsia-200 to-pink-300 rounded hover:opacity-90 transition"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile;
