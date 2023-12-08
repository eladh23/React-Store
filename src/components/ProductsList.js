import React, { useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProductsList = ({ products, setProducts }) => {
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [setProducts]);

  const handleAddToCart = () => {
    console.log("Product added to cart!");
  };

  return (
    <div>
      <h2 className="text-center mb-4">Products List</h2>
      {products.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <div key={product.id} className="col mb-4">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={`http://127.0.0.1:8000/${product.image}`}
                  alt={`Product: ${product.name}`}
			style={{ maxWidth: '200px', height: 'auto' }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    Price: ${parseFloat(product.price).toFixed(2)}
                  </Card.Text>
                  <Card.Text>Stock: {product.stock}</Card.Text>
                  <Card.Text>Category: {product.category}</Card.Text>
                  <Card.Text>Description: {product.description}</Card.Text>
                  <Button variant="primary" onClick={handleAddToCart}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No products available</p>
      )}
    </div>
  );
};

export default ProductsList;
