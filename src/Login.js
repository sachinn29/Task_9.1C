import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from './FireBase';
import './Login.css';
import SignOut from './SignOut';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("You have logged in");
      return navigate("/signout");
    } catch (error) {
      console.log(error);
      setError("Missing fields or invalid email/password");
    }
  };

  return (
    <div>
      <form className='Form_Div' onSubmit={handleSubmit}>
      <label className='Label_Class'>  Email </label>
       
        <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br /> 
        <label className='Label_Class' >  Password </label>
        <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type='submit' className='Login_Button'>Login</button>
        {error && <p className='error-message'>{error}</p>}
        
      </form>
    </div>

  );
}

export default Login;
