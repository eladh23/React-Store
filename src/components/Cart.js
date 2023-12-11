import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const storedUserId = localStorage.getItem('authToken');
  const storedUserName = localStorage.getItem('userName');

  useEffect(() => {
    const fetchUserCart = async () => {
      try {
        if (storedUserId) {
          const response = await axios.get(`http://127.0.0.1:8000/carts/${storedUserId}`);
          setCartItems(response.data); // Assuming response.data is an array of cart items
        }
      } catch (error) {
        console.error('Error fetching user cart:', error);
      }
    };

    fetchUserCart();
  }, [storedUserId]);

  return (
    <div>
      {storedUserId ? (
        <div>
          <h2>Hello,{storedUserName}! Your Cart:</h2>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {/* Render your cart item details here */}
                  <p>Product: {item.product_name}</p>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  {/* Add other relevant item details */}
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      ) : (
        <p>Please log in first.</p>
      )}
    </div>
  );
};

export default Cart;
