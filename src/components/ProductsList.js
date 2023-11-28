import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://elad-django-back.onrender.com/products')
      .then(response => {
        // Update the state with the received products
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // This empty array ensures useEffect runs only once (on component mount)

  const handleAddToCart = () => {
    // Logic for adding product to cart goes here
    // For now, let's just log a message
    console.log('Product added to cart!');
  };

  return (
    <div>
      <h2>Products List</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: ${parseFloat(product.price).toFixed(2)}</Card.Text>
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
}

export default ProductsList;
