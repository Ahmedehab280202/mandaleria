import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './pages/Checkout/Checkout.jsx'
import ProductsBrowse from './pages/ProductsBrowse/ProductsBrowse.jsx'
import ProductProfile from './pages/ProductProfile/ProductProfile.jsx'
import Login from './pages/Login/Login.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import Home from './pages/Home/Home.jsx'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart.jsx'
import Orders from './pages/Orders/Orders.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="products" element={<ProductsBrowse />} />
          <Route path="productprofile" element={<ProductProfile />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
