import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your backend API
    axios.get('https://elad-django-back.onrender.com/products/')
      .then(response => {
        setProducts(response.data); // Assuming the response data is an array of products
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <h2>All Products</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
