import React, { useState } from 'react';
import { auth } from './FireBase'; 
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './FireBase'

import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(' ');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if(password!==confirmPassword){
     setConfirmPassword("Error");
     alert("Password may not matched");
     return;
    }
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up successfully!');

      const userData = {
        email: email,
        password:password

        // Add other user data here
      };

      const usersCollection = collection(db, 'user_data'); // Replace 'users' with your collection name

    // Add the user's data to Firestore
      await addDoc(usersCollection, userData);
 
      console.log('User data added to Firestore successfully!');

      return navigate("/login");
  
    } catch (error) {
      console.error('Signup Error:', error.message);
    }
  };

  return (
    
      <form className='Sign_up' >
      <label className='Label'>Name </label>
          <input type="text" />
        <label className='Label'>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
       
        <label className='Label'> Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <label className='Label'> Confirm-Password: </label>
          <input type="password" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} />
        
        <button className='Button-1' type="submit" onClick={handleSignup}>Sign Up</button>
       
      </form>
   
  );
}

export default Signup;
