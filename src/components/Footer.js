import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-5 py-4 bg-dark text-light">
      <div className="container text-center">
        <p className="mb-0">&copy; 2023 Your Company Name. All rights reserved.</p>
        <p className="mb-0">
          <a href="/about" className="text-light me-2">About Us</a>
          <a href="/contact" className="text-light me-2">Contact</a>
          <a href="/privacy" className="text-light">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
