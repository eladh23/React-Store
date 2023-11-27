import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    
    axios.get('https://elad-django-back.onrender.com/products/category')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });

    // Fetch all products initially
    axios.get('https://elad-django-back.onrender.com/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize filteredProducts with all products
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array to run the effect only once on mount

  const handleSearch = () => {
    // Filter products based on the search query
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())   
    );
    setFilteredProducts(filtered);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        {categories.map(category => (
          <li key={category}>
            <Link to={`/products?category=${category}`}>{category}</Link>
          </li>
        ))}
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
          />
          <button onClick={handleSearch}>Search</button>
        </li>
      </ul>

      {/* Display filtered products */}
      <section>
        {filteredProducts.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            {/* Display other product information */}
          </div>
        ))}
      </section>
    </nav>
  );
}

export default Navbar;
