import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductsList from './components/ProductsList'; 
import Footer from './components/Footer';
import Login from './components/Login';
import NoPage from './components/NoPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
  
}

export default App;
