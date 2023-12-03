import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { BsCart4 } from "react-icons/bs";

const Navbar = ({ setFilteredProducts }) => {
	const [categories, setCategories] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [products, setProducts] = useState([]);
	const [authToken, setAuthToken] = useState("");
	const [username, setUserName] = useState("");
	const location = useLocation();

	useEffect(() => {
		const storedAuthToken = localStorage.getItem("authToken");
		if (storedAuthToken) {
			setAuthToken(storedAuthToken);
		}

		const storedUserName = localStorage.getItem("userName");
		if (storedUserName) {
			setUserName(storedUserName);
		}
	}, []);

	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/products/category/")
			.then((response) => {
				setCategories(response.data);
			})
			.catch((error) => {
				console.error("Error fetching categories:", error);
			});
		axios
			.get("http://127.0.0.1:8000/products")
			.then((response) => {
				setProducts(response.data);
			})
			.catch((error) => {
				console.error("Error fetching products:", error);
			});
	}, []);

	const handleSearch = () => {
		const filtered = products.filter((product) =>
			product.name.toLowerCase().includes(searchQuery.toLowerCase())
		);
		setFilteredProducts(filtered); // Pass filtered products to the parent component (App.js)
	};

	const handleLogout = () => {
		localStorage.removeItem("authToken");
		localStorage.removeItem("userName");
		setAuthToken("");
		setUserName("");
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link className="navbar-brand" to="/">
				Home
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/products">
							Products
						</Link>
					</li>
					{categories.map((category, index) => (
						<li key={index} className="nav-item">
							<Link className="nav-link" to={`/products?category=${category}`}>
								{category}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<form className="form-inline my-2 my-lg-0 ml-auto d-flex">
				<input
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search products..."
					aria-label="Search"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<button
					className="btn btn-outline-success my-2 my-sm-0 ml-2"
					type="button"
					onClick={handleSearch}
				>
					Search
				</button>
			</form>
			<div className="ml-auto d-flex align-items-center">
				{authToken ? (
					<>
						<div className="navbar-text mr-3">Hello, {username}</div>
						<button className="btn btn-link" onClick={handleLogout}>
							Logout
						</button>
					</>
				) : (
					location.pathname !== "/login" && (
						<div className="nav-item">
							<Link className="btn btn-primary" to="/login">
								Login
							</Link>
						</div>
					)
				)}
			</div>
			<div className="nav-item">
				<Link to="/cart">
					<BsCart4 style={{ fontSize: "2em", color: "blue" }} />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
