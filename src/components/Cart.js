import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = ({ userId }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/carts/${userId}`);
        setCartItems(response.data.cart_items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [userId]);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product}>
              <p>Product: {item.product}</p>
              <p>Quantity: {item.quantity}</p>
              {/* Add more details if needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
