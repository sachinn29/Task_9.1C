import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar'; 
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Page from './Page';
import Signout from './SignOut';
import { auth } from './FireBase';
import Extra from './Extra';
function Routing() {
  

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/page" element={<Page />} />
          <Route path='/extra' element={<Extra/>} />
        </Routes>
      </div>
    </>
  );
}

export default Routing;
