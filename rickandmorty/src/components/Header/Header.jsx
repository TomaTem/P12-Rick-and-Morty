import React from 'react';
import logo from './logo.jpg';
import {Link} from 'react-router-dom';
// import background from './back.png'

export default function Header() {
  return (
    <>
    <Link className='header' to='/'>
      <nav className='navbar'>
        <div className='container-fluid' >
            <img
              src={logo}
              alt='Logo'
              width='35'
              height='35'
              className='d-inline-block align-text-top'
            />
            Rick and Morty Quiz
        </div>
      </nav>
      </Link>
    </>
  );
}
