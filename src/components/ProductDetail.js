import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams(); // Fetch the ID parameter from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://elad-django-back.onrender.com/products/${id}`)
      .then(response => {
        setProduct(response.data); 
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  return (
    <div>
      {product ? (
        <div className="product-detail">
          <h2>{product.name}</h2>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetail;
