import React, { useState } from 'react';
import brandLogo from '../image/logoipsum-logo-14.svg';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light px-3'>
      <a className='navbar-brand' href='#'>
        <img src={brandLogo} alt='Website logo' />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto mx-2'>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Travel Journal
            </a>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='#'
              id='navbarDropdown'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              To-Do's
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <a className='dropdown-item' href='#'>
                Add dark/light theme switcher to left of search bar
              </a>
              <a className='dropdown-item' href='#'>
                Each component needs its own container, then everything in app
                gets put into container with BG
              </a>
              <div className='dropdown-divider'></div>
              <a className='dropdown-item' href='#'>
                User auth
              </a>
              <a className='dropdown-item' href='#'>
                Lazy-loading the jokes section so it refreshes only when the
                source updates
              </a>
            </div>
          </li>
          <li className='nav-item'>
            <a className='nav-link disabled' href='#'>
              Disabled
            </a>
          </li>
        </ul>
        <form className='form-inline my-2 my-lg-0 ms-auto'>
          <input
            className='form-control mr-sm-2 '
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          {/* <button
            className='btn btn-outline-success my-2 my-sm-0'
            type='submit'
          >
            Search
          </button> */}
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
