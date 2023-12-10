import React from 'react';

const Cart = () => {
  const storedUserName = localStorage.getItem('userName');

  return (
    <div>
      {storedUserName ? (
        <p>Hello, {storedUserName}! This is your cart.</p>
      ) : (
        <p>Please log in first.</p>
      )}
    </div>
  );
};

export default Cart;
