import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		console.log("Username:", username);
		console.log("Password:", password);
		try {
			const response = await axios.post(
				// "https://elad-django-back.onrender.com/token/",
				"http://127.0.0.1:8000/token/",
				{
					username,
					password,
				}
			);

			if (response.status === 200) {
				console.log("Login successful!");
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("userName", username);
				navigate("/Products");
			} else {
				console.log("Login failed!");
				setError("Invalid credentials. Please try again.");
			}
		} catch (err) {
			console.error("Login Failed:", err.response.data);
			setError("Invalid credentials. Please try again.");
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
