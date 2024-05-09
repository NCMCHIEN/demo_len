import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./components/Pages/Shop";
import ShopCategory from "./components/Pages/ShopCategory";
import Product from "./components/Pages/Product";
import Cart from "./components/Pages/Cart";
import LoginSignup from "./components/Pages/LoginSignup";
import { Footer } from "./components/Footer/Footer";
import men_banner from "./components/Assets/banner_mens.png";
import women_banner from "./components/Assets/banner_women.png";
import kid_banner from "./components/Assets/banner_kids.png";
import hoathu from "./components/Assets/hoathu.jpg";
import hoalen from "./components/Assets/hoalen.jpg";
import hoabo from "./components/Assets/hoabo.jpg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/hoalen"
            element={<ShopCategory banner={hoalen} category="hoalen" />}
          />
          <Route
            path="/hoathu"
            element={<ShopCategory banner={hoathu} category="hoathu" />}
          />
          <Route
            path="/hoabo"
            element={<ShopCategory banner={hoabo} category="hoabo" />}
          />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
