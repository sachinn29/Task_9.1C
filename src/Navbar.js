import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>

            <div className='Header'>
                <div className='Text'>

                    <h2>Dev@Deakin</h2>

                    <input className='Input' type='text' placeholder='Search' />

                    <button className='Button'>Post</button>
                    <Link to='/login'>
                        <button className='Button' >Login</button>
                    </Link>
                    <Link to='/signup'>
                        <button className='Button' >Signup</button>
                    </Link>
                </div>
            </div>

           
            {/* <Link to="/signout">
                <button className="Button">SignOut</button>
            </Link> */}


        </>
    )
}
export default Navbar;


