import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [SuccessMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    let errorTimer, successTimer;

    // Clear error message after 5 seconds
    if (error) {
      errorTimer = setTimeout(() => {
        setError('');
      }, 6000);
    }

    // Clear success message after 5 seconds
    if (SuccessMsg) {
      successTimer = setTimeout(() => {
        setSuccessMsg('');
      }, 6000);
    }

    // Clear timers when component unmounts or when messages change
    return () => {
      clearTimeout(errorTimer);
      clearTimeout(successTimer);
    };
  }, [error, SuccessMsg]);

  const RegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      // await axios.post('https://elad-django-back.onrender.com/register/', {
            await axios.post('http://127.0.0.1:8000/register/', {
        username,
        password,
        age,
        city,
      });

      setSuccessMsg('Registration successful!'); 
    } catch (error) {
      if (error.response && error.response.data) {
        
        const errorMessage = Object.values(error.response.data).join(' ');
        setError(errorMessage);
      } else {
        setError('Something went wrong. Please try again.'); 
      }
    }
  };

  return  (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Register Here</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                {SuccessMsg && <div className="alert alert-success">{SuccessMsg}</div>}
                <form onSubmit={RegisterSubmit}>
                  <div className="mb-3 row">
                    <label htmlFor="username" className="col-sm-4 col-form-label">
                      Username:
                    </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="password" className="col-sm-4 col-form-label">
                      Password:
                    </label>
                    <div className="col-sm-8">
                      <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="city" className="col-sm-4 col-form-label">
                      City:
                    </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="age" className="col-sm-4 col-form-label">
                      Age:
                    </label>
                    <div className="col-sm-8">
                      <input type="number" className="form-control" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-12">
                      <button type="submit" className="btn btn-primary w-100">
                        Register
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
  }
  
export default Register;
