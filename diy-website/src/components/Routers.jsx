import { Routes, Route ,Navigate} from "react-router";
import DeckRedirect from '../anime/DeckRedirect.jsx';
import PortFolio from '../Portfolio/PortFolio.jsx'
import DashBoard from "../Dashboard/DashBoard.jsx"; 
 import SeriesLayout from "../anime/SeriesLayout.jsx";
import Mainpage from "../anime/Mainpage.jsx";
import Arc from '../anime/Arc.jsx'
import Dm from '../anime/DM.jsx'
import Dsod from "../anime/Dsod.jsx";
import AboutWeb from '../anime/AboutWeb.jsx'
import  ProNav from '../anime/ProNav.jsx'
import Zexal from "../anime/Zexal.jsx";
import Deck from "../anime/Deck.jsx";
import Yami from "../anime/Yami.jsx";
import Muto from "../anime/Muto.jsx";
import SeriesNav from "../anime/SeriesNav.jsx";
import Synchro from "../anime/Synchro.jsx";
import Yuesi from "../anime/Yuesi.jsx";
import Yuma from "../anime/Yuma.jsx";
import Kaiba from "../anime/Kaiba.jsx";
import Jaden from "../anime/Jaden.jsx";
import Playmaker from "../anime/Playmaker.jsx";
import Yuya from "../anime/Yuya.jsx";
import Vrains from "../anime/Vrains.jsx";
import Gx from "../anime/Gx.jsx";
import GoRush from "../anime/GoRush.jsx";
import Yudias from "../anime/Yudias.jsx";
import Yuga from "../anime/Yuga.jsx";
import Sevens from "../anime/Sevens.jsx";
import DeckLayout from "../anime/DeckLayout.jsx";
import HomePage from "../Diy e-comerence/HomePage.jsx";
import ProductPage from "../Diy e-comerence/ProductPage.jsx";
import ContactPage from "../Diy e-comerence/ContactPage.jsx";
import LoginPage from '../Diy e-comerence/LoginPage.jsx'
import Signup from "../Diy e-comerence/Signup.jsx";
import Glittercase from "../Diy e-comerence/Glittercase.jsx";
import ProductLayout from "../Diy e-comerence/ProductLayout.jsx";
import Birddesigncase from "../Diy e-comerence/Birddesigncase.jsx";
import Blockframe from "../Diy e-comerence/Blockframe.jsx";
import UserHomePage from "../Diy e-comerence/UserHomePage.jsx";
import TestnomialPage from "../Diy e-comerence/TestnomialPage.jsx";



const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
  <Route path="/dashboard" element={<DashBoard />} />
  <Route path="/portfolio" element={<PortFolio />} />

  <Route path="/mainpage" element={<Mainpage />} />
  <Route path="/Aboutweb" element={<AboutWeb />} />
  <Route path="/Series" element={<SeriesNav />} />
  <Route path="/Pronav" element={<ProNav />} />
  <Route path="/decks" element={<Deck />} />
  <Route path="/deck/:id" element={<DeckRedirect />} /> 

<Route path="/decks" element={<DeckLayout />}>               
  <Route path="muto" element={<Muto />} />           
  <Route path="yami" element={<Yami />} />           
  <Route path="yuesi" element={<Yuesi />} />        
  <Route path="yuki" element={<Jaden />} />          
  <Route path="yuma" element={<Yuma />} />           
  <Route path="kaiba" element={<Kaiba />} />         
  <Route path="yuya" element={<Yuya />} />         
  <Route path="play" element={<Playmaker />} />   
  <Route path="yuga" element={<Yuga />} />           
  <Route path="yudias" element={<Yudias />} />       
</Route>

     
      {/*series */}
    <Route path="/Series" element={<SeriesLayout />}>
  <Route path="dm" element={<Dm />} />
  <Route path="dsod" element={<Dsod />} />
  <Route path="gx" element={<Gx />} />
  <Route path="synchro" element={<Synchro />} />
  <Route path="zexal" element={<Zexal />} />
  <Route path="arc" element={<Arc />} />
  <Route path="vrains" element={<Vrains />} />
  <Route path="sevens" element={<Sevens />} />
  <Route path="rush" element={<GoRush />} />
</Route>


<Route path="/home" element={<HomePage />} />
<Route path="/contact" element={<ContactPage/>}/>
<Route path="/testinomial" element={<TestnomialPage/>}/>
<Route path="/login" element={<LoginPage/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/user" element={<UserHomePage/>}/>
<Route path="/products" element={<ProductPage />}/>
<Route path="/products" element={<ProductLayout/>}>
  <Route path="glitter" element={<Glittercase/>} />
  <Route path="birddesign" element={<Birddesigncase/>}/>
  <Route path="blockframe" element={<Blockframe/>}/>
</Route>




    </Routes>
  );
}

export default Routers;
