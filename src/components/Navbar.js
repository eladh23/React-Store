import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch categories from the backend
    axios.get('https://elad-django-back.onrender.com/products/category')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []); // Empty dependency array to run the effect only once on mount

  const handleSearch = () => {
    // Perform search action based on searchQuery
    console.log('Search query:', searchQuery);
    // Add logic here to handle the search functionality (e.g., make API request, filter data, etc.)
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
               {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
