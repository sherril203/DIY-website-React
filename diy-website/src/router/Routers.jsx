import { Routes, Route} from "react-router";
import HomePage from "../Pages/Home/HomePage";
import Contact from "../Pages/contact/Contact";
import ProductsPage from "../Products/ProductsPage";
import ServicePage from "../Pages/Services/ServicePage";
import Testinomial from "../Pages/Testinomial/Testinomial";
import Signup from "../Pages/Sign_up/Signup";
import Login from "../Pages/Login/Login";
import Name from "../Products/product_description/Name";
import ProductLayout from "../Products/ProductLayout";
import Anime from "../Products/product_description/Anime";
import UniqueClock from "../Products/product_description/UniqueClock";
import Flower from "../Products/product_description/Flower";
import UserPage from "../Pages/Userpage/UserPage";

import PurchasePage from "../Pages/Buy products/PurchasePage";

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
  <Route path="/name" element={<Name/>}/>
  <Route path='/products' element={<ProductLayout/>}>
   <Route path="name" element={<Name/>}/>
   <Route path="anime" element={<Anime/>}/>
   <Route path="flower" element={<Flower/>}/>
   <Route path="unique_clock-_the_perfect_holiday_gift" element={<UniqueClock/>}/>
  </Route>
  <Route path="/purchase" element={<PurchasePage/>}/>
  <Route path="/user" element={<UserPage/>}/>
    </Routes>
  );
}

export default Routers;
