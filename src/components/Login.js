import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for login
      const response = await axios.post('https://elad-django-back.onrender.com/token/', {
        username,
        password,
      });

      // Assuming the API response contains an 'authToken' upon successful login
      const authToken = response.data.access;
      
      // Store the authToken in localStorage upon successful login
      localStorage.setItem('authToken', authToken);

      console.log('Login Successful!', response.data);

      // You can redirect or perform any action here upon successful login
    } catch (err) {
      console.error('Login Failed:', err.response.data);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
