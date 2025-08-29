import { Routes, Route} from "react-router";
import HomePage from "../Home/HomePage";
import Contact from "../contact/Contact";
import ProductsPage from "../Products/ProductsPage";
import ServicePage from "../Services/ServicePage";
import Testinomial from "../Testinomial/Testinomial";

const Routers = () => {
  return (
    <Routes>
  <Route path="/homepage" element={<HomePage/>} />
  <Route path='/products' element={<ProductsPage/>}/>
   <Route path='/services' element={<ServicePage/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/testinomial' element={<Testinomial/>}/>
    </Routes>
  );
}

export default Routers;
