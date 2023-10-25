import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './FireBase.js';
import { useNavigate } from 'react-router-dom';
import './Signout.css';
function Signout() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      
      console.log("You have cl");
      return navigate('/extra', {replace:true }); 
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <div>
      <h1>Click on sign out button for signing out </h1>
     
      <button className='Signout-Button' onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Signout;