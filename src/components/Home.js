import React from 'react';
import './Home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to Our Online Store</h2>
      <div className="home-content">
        <p>
          Welcome to our online store! We offer a wide range of products to meet your needs.
          Explore our selection of high-quality items and find the perfect products for you.
        </p>
        <p>
          Whether you're looking for electronics, clothing, accessories, or more,
          we have something for everyone. Enjoy browsing our catalog and discovering
          the latest trends and best deals.
        </p>
        {/* Add more content, promotional sections, or featured products */}
      </div>
    </div>
  );
}

export default Home;
