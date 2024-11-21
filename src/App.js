import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Page/Home/Home";
import Shop from "./Page/Shop/Shop";
import Login from "./Page/Auth/Login";
import Register from "./Page/Auth/Register";
import ProductDetail from "./Page/Detail/ProductDetail";
import Cart from "./Page/Cart/Cart";
import Checkout from "./Page/Checkout/Checkout";
import CheckoutSuccess from "./Page/Checkout/CheckoutSuccess";

function App() {
  return (
    <div className="App fst-italic">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkoutsuccess" element={<CheckoutSuccess />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
