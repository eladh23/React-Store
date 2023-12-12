// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Cart = ({ userId }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/carts/${userId}`);
//         setCartItems(response.data.cart_items);
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     fetchCartItems();
//   }, [userId]);

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       {cartItems.length > 0 ? (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.product}>
//               <p>Product: {item.product}</p>
//               <p>Quantity: {item.quantity}</p>
//               {/* Add more details if needed */}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Your cart is empty</p>
//       )}
//     </div>
//   );
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [userName, setUserName] = useState('');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch user name from localStorage or your authentication system
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }

    // Fetch cart items from the backend
    axios.get('http://127.0.0.1:8000/cart_items/') // Replace with your endpoint for fetching cart items
      .then((response) => {
        setCartItems(response.data); // Assuming response.data contains cart items
      })
      .catch((error) => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  return (
    <div>
      {userName ? (
        <p>Hello, {userName}! This is your cart.</p>
      ) : (
        <p>Please log in first.</p>
      )}
      <h2>Your Cart</h2>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li key={item.id}>
              {/* Display cart item details here */}
              {/* For example: <p>{item.name}, Price: {item.price}</p> */}
            </li>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </ul>
    </div>
  );
};

export default Cart;
