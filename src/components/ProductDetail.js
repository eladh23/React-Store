import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the specific product details using the product ID
    axios.get(`https://elad-django-back.onrender.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]); // Fetch data whenever the ID changes

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          {/* Display other product details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
