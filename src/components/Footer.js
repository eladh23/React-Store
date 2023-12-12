import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer mt-5 py-4 bg-dark text-light">
      <div className="container text-center">
        <p className="mb-0">&copy; 2023 React-Store. All rights reserved.</p>
        <p className="mb-0">
      
          <Link to="/contact" className="text-light me-2">Contact</Link>
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;
