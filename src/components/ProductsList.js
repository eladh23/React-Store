import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price} - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
