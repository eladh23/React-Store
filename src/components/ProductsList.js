import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProductsList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		// axios.get('https://elad-django-back.onrender.com/products')
		axios
			.get("http://127.0.0.1:8000/products")
			.then((response) => {
				setProducts(response.data);
			})
			.catch((error) => {
				console.error("Error fetching products:", error);
			});
	}, []);
	const handleAddToCart = () => {
		console.log("Product added to cart!");
	};

	return (
		<div>
			<h2>Products List</h2>
			<div className="row">
				{products.map((product) => (
					<div key={product.id} className="col-md-3 mb-4">
						<Card className="h-50">
							<img
								className="card-img-top"
								src={`https://picsum.photos/250/180?random=${product.id}`}
								alt={`Product  :${product.name}`}
							/>
							<Card.Body>
								<Card.Title>{product.name}</Card.Title>
								<Card.Text>
									Price: ${parseFloat(product.price).toFixed(2)}
								</Card.Text>
								<Card.Text>Stock: {product.stock}</Card.Text>
								<Card.Text>Category: {product.category}</Card.Text>
								<Button variant="primary" onClick={handleAddToCart}>
									Add to Cart
								</Button>
							</Card.Body>
						</Card>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductsList;
