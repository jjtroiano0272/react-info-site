import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { Link, NavLink, Route, Switch, Redirect } from 'react-router-dom';
import brandLogo from '../image/logoipsum-logo-14.svg';

const Navbar = ({ user, toggleDarkMode, inputRef }) => {
  // Switch theme
  useHotkeys('ctrl+\\', () => {
    toggleDarkMode();
    // TODO: ALSO CHANGE THE EFFIN BOX!
  });

  // Focus on search box
  useHotkeys('ctrl+/', () => {
    inputRef.current.focus();
  });

  return (
    <nav className='navbar navbar-expand-lg px-3 sb-1'>
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

      <div
        className='collapse navbar-collapse d-flex'
        id='navbarSupportedContent'
      >
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

        <ul className='navbar-nav mr-auto ms-auto'>
          <li className='nav-item active my-auto'>
            <div className='form-check form-switch ms-auto align-middle'>
              <div className='custom-control custom-switch'>
                <input
                  type='checkbox'
                  onChange={toggleDarkMode}
                  className='form-check-input'
                  id='toggle'
                />
              </div>
              {/* <label className='custom-control-label' htmlFor='darkSwitch'></label> */}
            </div>
          </li>
          <li className='nav-item'>
            <form className='form-inline my-2 my-lg-0 ms-auto'>
              <input
                type='search'
                ref={inputRef}
                className='form-control mr-sm-2 search-query'
                placeholder='Search [CTRL+/]'
                aria-label='Search'
              />
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
