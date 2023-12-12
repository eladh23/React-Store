import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="container mt-4">
      <h2>Contact Us</h2>
      <p>
        You can reach us via the following methods:
      </p>
      <ul>
        <li>Email: eladelad121212@gmail.com</li>
        <li>Phone: 058-7200800</li>
        <li>Github: <Link to="https://github.com/eladh23">eladh23- GitHub Profile</Link></li>
        <li>Elad is my name :)</li>
      </ul>
      <p>
        Feel free to contact us for any inquiries or questions you may have.
      </p>
    </div>
  );
};

export default Contact;
