import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter } from "react-router";
import Routers from "./router/Routers.jsx";
import { CartProvider } from './Pages/Cart/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <CartProvider>
  <BrowserRouter>
  <Routers/>
  </BrowserRouter>
  </CartProvider>
 
  
)
