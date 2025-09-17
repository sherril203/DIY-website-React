import { useState } from "react";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router";
import { CartContext } from "../Pages/Cart/CartContext";
import HomePage from "../Pages/Home/HomePage";
import Contact from "../Pages/contact/Contact";
import ProductsPage from "../Products/ProductsPage";
import ServicePage from "../Pages/Services/ServicePage";
import Testinomial from "../Pages/Testinomial/Testinomial";
import Signup from "../Pages/Sign_up/Signup";
import Login from "../Pages/Login/Login";
import UserPage from "../Pages/Userpage/UserPage";
import Cart from "../Pages/Cart/Cart";
import Orders from "../Pages/Orders/Orders";
import PurchasePage from "../Pages/Buy products/PurchasePage";
import ForgotPassword from "../forgot and Reset/ForgotPassword";
import ResetPassword from "../forgot and Reset/ResetPassword";
import PrivateRouters from "../Pages/Private Routers/PrivateRouters";
import ProductLayout from "../Products/ProductLayout";
import UserLayout from "../Pages/Userpage/UserLayout";
import AdminRouters from "../Pages/Private Routers/AdminRouters";
import AdminLayout from "../Pages/Admin Page/AdminLayout";
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
import AdminSign from "../Pages/Admin Page/AdminSign";
import AdminLogin from "../Pages/Admin Page/Adminlogin";
import Dashboard from "../Pages/Admin Page/Dashboard";
import Addproducts from "../Pages/Admin Page/Addproducts";
import AdminOrders from "../Pages/Admin Page/AdminOrders";
import Profile from "../Pages/Userpage/Profile";
import BlockFrame from "../Products/product_description/BlockFrame";
import BabiesPhoto from "../Products/product_description/BabiesPhoto";
import CoupleFrame from "../Products/product_description/CouplesFrame";
import CartoonFrame from "../Products/product_description/CartoonFrame";

// (Import statements unchanged for brevity...)

const Routers = () => {
  const [cart, setcart] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(null);

  const SignIn = () => setIsSignedIn(true);
  const SignOut = () => setIsSignedIn(false);

  return (
    <CartContext.Provider value={{ cart, setcart }}>
      <Routes>
        {/* Public Pages */}
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testinomial" element={<Testinomial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/cart" element={<Cart />} />

        {/* Product Details (Nested under ProductLayout) */}
        <Route path="/products" element={<ProductLayout />}>
          {/* Cups */}
          <Route path="name" element={<Name />} />
          <Route path="butterfly" element={<Butterfly />} />
          <Route path="thought" element={<ThoughtCup />} />
          <Route path="kids" element={<KidsCup />} />
          {/* Bags */}
          <Route path="flower" element={<Flower />} />
          <Route path="cartoon" element={<Cartoon />} />
          {/* Clocks */}
          <Route path="flowerclock" element={<FlowerClock />} />
          <Route path="unique_clock-_the_perfect_holiday_gift" element={<UniqueClock />} />
          <Route path="woodenclock" element={<WoodenClock />} />
          <Route path="roadclock" element={<RoadClock />} />
          {/* Phone Cases */}
          <Route path="anime" element={<Anime />} />
          <Route path="glitter" element={<Glitter />} />
          <Route path="customization" element={<PhoneCustomization />} />
          <Route path="image_customization" element={<ImgCustomized />} />
          <Route path="sea_case" element={<SeaCase />} />
          <Route path="birdCase" element={<BirdCase />} />
          {/* Photo frame */}
          <Route path="block" element={<BlockFrame />} />
          <Route path="babies" element={<BabiesPhoto />} />
          <Route path="couples" element={<CoupleFrame />} />
          {/* Kits */}
          <Route path="jewellery" element={<Jewellery />} />
          <Route path="christmas" element={<Christmas />} />
          <Route path="cartoonframe" element={<CartoonFrame />} />
          {/* Wall Decor */}
          <Route path="lotus_decor" element={<LotusWall />} />
          <Route path="love_decor" element={<LoveHeart />} />
          <Route path="holiday" element={<Holiday />} />
          <Route path="heart" element={<Heartwall />} />
        </Route>

        {/* Protected admin  */}
        <Route path="/admin" element={
          <AdminRouters >
            <AdminLayout />
          </AdminRouters>}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="addproducts" element={<Addproducts />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>


        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminRegister" element={<AdminSign />} />

        {/* Protected User Area */}
        {/* <Route path="/User" element={
            <PrivateRouters >
            <UserLayout />
            </PrivateRouters>}>
            <Route path="dashboard" element={<UserPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Orders />} />
          </Route> */}
        {/* public user  */}
        <Route path="/user" element={<UserLayout />}  >
          <Route path="dashboard" element={<UserPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<Orders />} />
        </Route>



      </Routes>
    </CartContext.Provider>
  );
};

export default Routers;
