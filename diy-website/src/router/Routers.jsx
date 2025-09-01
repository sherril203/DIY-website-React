import { Routes, Route} from "react-router";
import HomePage from "../Pages/Home/HomePage";
import Contact from "../Pages/contact/Contact";
import ProductsPage from "../Products/ProductsPage";
import ServicePage from "../Pages/Services/ServicePage";
import Testinomial from "../Pages/Testinomial/Testinomial";
import Signup from "../Pages/Sign_up/Signup";
import Login from "../Pages/Login/Login";

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
    </Routes>
  );
}

export default Routers;
