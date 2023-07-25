import React from 'react'
import './adminLogin.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Login() {

  const API_URL = useSelector(state => state.APIURL.url);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(email,password,'this is the email and password ') 
      const response = await axios.post('http://localhost:5000/admin/adminlogin', {
        
        email,
        password
      });
      console.log('shijith pk axios')
      if (response.data && response.data.adminData) {
        localStorage.setItem('token', response.data.adminToken);
        navigate('/dashboard');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
        console.log('error in axios shijith')
      console.log(error);
    }
  };

  return (
    <div>
        <div className='admin-container'>
            <div className='admin-login-form'>
              <div className="admin-image">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/secure-login-5120700-4283468.png" alt="" />
              </div>
              <div className="admin-login">
                <h1>Admin Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                    <input type="text" 
                    className='input'
                    placeholder='Enter your email'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    />
                    </div>
                    <div>
                    <input type="text" 
                    className='input'
                    title="Password should contain at least 6 characters"
                    placeholder='Enter your password'
                    pattern=".{6,}"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    />
                    </div>
                    <button>LogIn</button>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login

