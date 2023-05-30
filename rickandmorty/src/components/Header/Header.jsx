import React from 'react';
import logo from './logo.jpg';
import background from './back.png'
/* <img src={logo} className="App-logo" alt="logo" /> */

export default function Header() {
  return (
    <>
      <nav className='navbar bg-body-tertiary'>
        <div className='container-fluid header'>
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
    </>
  );
}
