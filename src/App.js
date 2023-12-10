import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import Footer from "./components/Footer";
import Login from "./components/Login";
import NoPage from "./components/NoPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Register from "./components/Register";
import Contact from "./components/Contact";

const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar products={products} setProducts={setProducts} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList products={products} setProducts={setProducts} />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
          <Route path='/register' element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
