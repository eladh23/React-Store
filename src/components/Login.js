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
		"http://127.0.0.1:8000/token/",
		{
		  username,
		  password,
		}
	    );
	    const token = response.data.access;
    
	    if (response.status === 200 && token) {
		console.log("Login successful!");
		localStorage.setItem("authToken", token); // Store the access token
		console.log(token);
		localStorage.setItem("userName", username);
		setError(""); // Reset error state on successful login
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
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-6">
					<div className="card">
						<div className="card-body">
							<h2 className="card-title text-center mb-4">Login</h2>
							{error && <div className="alert alert-danger">{error}</div>}
							<form onSubmit={handleLogin}>
								<div className="mb-3 row">
									<label htmlFor="username" className="col-sm-4 col-form-label">
										Username:
									</label>
									<div className="col-sm-8">
										<input
											type="text"
											className="form-control"
											id="username"
											value={username}
											onChange={(e) => setUsername(e.target.value)}
											required
										/>
									</div>
								</div>
								<div className="mb-3 row">
									<label htmlFor="password" className="col-sm-4 col-form-label">
										Password:
									</label>
									<div className="col-sm-8">
										<input
											type="password"
											className="form-control"
											id="password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											required
										/>
									</div>
								</div>
								<div className="mb-3 row">
									<div className="col-sm-12">
										<button type="submit" className="btn btn-primary w-100">
											Login
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
