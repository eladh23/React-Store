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

const App = () => {
	const [filteredProducts, setFilteredProducts] = useState([]);

	return (
		<Router>
			<div className="App">
				<Navbar setFilteredProducts={setFilteredProducts} />
				{filteredProducts.length > 0 ? (
					// Display filtered products if there are any
					filteredProducts.map((product) => (
						<div key={product.id}>
							<p>{product.name}</p>
							<p>{product.stock}</p>
						</div>
					))
				) : (
					// Display message if there are no products
          <p>There are no products found or the searched product is not in the list.</p>
          )}

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<ProductsList />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<NoPage />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
};

export default App;
