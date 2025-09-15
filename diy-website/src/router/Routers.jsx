import { Routes, Route} from "react-router";
import HomePage from "../Pages/Home/HomePage";
import Contact from "../Pages/contact/Contact";
import ProductsPage from "../Products/ProductsPage";
import ServicePage from "../Pages/Services/ServicePage";
import Testinomial from "../Pages/Testinomial/Testinomial";
//Authentication
import Signup from "../Pages/Sign_up/Signup";
import Login from "../Pages/Login/Login";
import UserPage from "../Pages/Userpage/UserPage";


import Cart from '../Pages/Cart/Cart'
import Orders from '../Pages/Orders/Orders'

import PurchasePage from "../Pages/Buy products/PurchasePage";
import PrivateRouters from "../Pages/Private Routers/PrivateRouters";
import ProductLayout from "../Products/ProductLayout";
//product description
import Name from "../Products/product_description/Name";
import Anime from "../Products/product_description/Anime";
import UniqueClock from "../Products/product_description/UniqueClock";
import Flower from "../Products/product_description/Flower";
import Glitter from "../Products/product_description/Glitter";
import Butterfly from "../Products/product_description/Butterfly";
import Jewellery from "../Products/product_description/Jewellery";
import Christmas from "../Products/product_description/Christmas";
import FlowerClock from "../Products/product_description/FlowerClock";
import Cartoon from "../Products/product_description/Cartoon";
import PhoneCustomization from "../Products/product_description/PhoneCustomization";
import WoodenClock from "../Products/product_description/WoodenClock";
import RoadClock from "../Products/product_description/RoadClock";
import ThoughtCup from "../Products/product_description/ThoughtCup";
import ImgCustomized from "../Products/product_description/ImgCustomized";
import KidsCup from "../Products/product_description/KidsCup";
import SeaCase from "../Products/product_description/SeaCase";
import BirdCase from "../Products/product_description/BirdCase";
import LotusWall from "../Products/product_description/LotusWall";
import LoveHeart from "../Products/product_description/LoveHeart";
import Holiday from "../Products/product_description/ModernHoliday";
import Heartwall from "../Products/product_description/Heartwall";

import ForgotPassword from "../forgot and Reset/ForgotPassword";
import ResetPassword from "../forgot and Reset/ResetPassword";

// Admin page
import AdminSign from "../Pages/Admin Page/AdminSign";
import AdminLogin from "../Pages/Admin Page/Adminlogin";
import AdminLayout from "../Pages/Admin Page/AdminLayout";
import Dashboard from "../Pages/Admin Page/Dashboard";
import Addproducts from "../Pages/Admin Page/Addproducts";
import Profile from "../Pages/Userpage/Profile";
import AdminOrders from "../Pages/Admin Page/AdminOrders";
import AdminRouter from "../Pages/Private Routers/AdminRouter";
import UserLayout from "../Pages/Userpage/UserLayout";

const Routers = () => {
  return (
    <Routes>
  <Route path="/homepage" element={<HomePage/>} />
  <Route path='/products' element={<ProductsPage/>}/>
   <Route path='/services' element={<ServicePage/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/testinomial' element={<Testinomial/>}/>
   <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>

  <Route path='/products' element={<ProductLayout/>}>
  /*cups*/
   <Route path="name" element={<Name/>}/>
    <Route path="butterfly" element={<Butterfly/>}/>
    <Route path="thought" element={<ThoughtCup/>}/>
    <Route path="kids" element={<KidsCup/>}/>
   /*bags */
   <Route path="flower" element={<Flower/>}/>
   <Route path="cartoon" element={<Cartoon/>}/>
   /*clock*/
   <Route path="flowerclock" element={<FlowerClock/>}/>
   <Route path="unique_clock-_the_perfect_holiday_gift" element={<UniqueClock/>}/>
   <Route path="woodenclock" element={<WoodenClock/>}/>
   <Route path="roadclock" element={<RoadClock/>}/>
   /*phone case */
    <Route path="anime" element={<Anime/>}/>
   <Route path="glitter" element={<Glitter/>}/>
   <Route path="customization" element={<PhoneCustomization/>}/>
   <Route path="image_customization" element={<ImgCustomized/>}/>
   <Route path="sea_case" element={<SeaCase/>}/>
   <Route path="birdCase" element={<BirdCase/>}/>
   /*kits*/
   <Route path="jewellery" element={<Jewellery/>}/>
   <Route path="christmas" element={<Christmas/>}/>
   /*wall decor*/ 
   <Route path="lotus_decor" element={<LotusWall/>}/>
   <Route path="love_decor" element={<LoveHeart/>}/>
   <Route path="holiday" element={<Holiday/>}/>
   <Route path="heart" element={<Heartwall/>}/>
  </Route>
  <Route path="/purchase" element={<PurchasePage/>}/>
<Route path="/cart" element={<Cart />} />  
  
  
<Route path="/user" element={<UserLayout />}>
  <Route path="/user" element={<UserPage />} />
  <Route path="profile" element={<Profile />} />
  <Route path="cart" element={<Cart />} />  
  <Route path="orders" element={<Orders/>}/>
</Route>



   {/* Protected routes */}
   <Route element={<PrivateRouters />}>
        <Route path="user" element={<UserPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="orders" element={<Orders/>}/>
      </Route>
      {/*public router */}
     <Route path="/login" element={<Login />} />

  <Route path="/forgot" element={<ForgotPassword/>}/>
  <Route path="/reset" element={<ResetPassword/>}/>

  { /*Admin panel*/ }
  <Route path="/adminRegister" element={<AdminSign/>}/>
  <Route path="/adminlogin" element={<AdminLogin/>}/>
   <Route path="/admin" element={<AdminLayout/>}>
     <Route path="dashboard" element={<Dashboard/>}/>
     <Route path="addproducts" element={<Addproducts/>}/>
     <Route path="orders" element={<AdminOrders/>}/>
   </Route>
   {/* private routing for admin */}
     <Route element={<AdminRouter />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addproducts" element={<Addproducts />} />
        <Route path="/orders" element={<AdminOrders />} />
      </Route>
    </Routes>
  );
}

export default Routers;
