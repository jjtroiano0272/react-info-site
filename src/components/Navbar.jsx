import React, { useRef, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { Link, NavLink, Route, Switch, Redirect } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Command } from 'phosphor-react';
import brandLogo from '../image/logoipsum-logo-14.svg';

const Navbar = ({ user, darkMode, toggleDarkMode }) => {
  // TODO: Make dynamic to actually detect user's OS. If mobile, do not display!
  const userOS = 'Mac';
  const [inputSwitch, setInputSwitch] = useState(null);
  const inputRef = useRef(null);

  // TODO: ALSO CHANGE THE EFFIN BOX!
  // Switch theme
  useHotkeys('CTRL+\\, CMD+\\', () => {
    console.log('Switch theme');
    toggleDarkMode();
  });

  // Focus on search box
  useHotkeys('CTRL+/, CMD+/', () => {
    inputRef.current.focus();
    console.log('search box focused');
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
          <li className='nav-item active my-auto ms-auto align-middle'>
            <span className='d-inline-block float-left'>
              <DarkModeSwitch
                className='react-darkMode-switch'
                checked={darkMode}
                onClick={toggleDarkMode}
                // size={120}
              />
            </span>
            <span className='d-inline-block'>
              <form className='form-inline my-2 my-lg-0 ms-auto'>
                <input
                  type='search'
                  ref={inputRef}
                  className='form-control mr-sm-2 search-query'
                  placeholder={
                    userOS === 'Mac'
                      ? `Search [ CMD + / ]`
                      : `Search [ CTRL + / ]`
                  }
                  aria-label='Search'
                />
              </form>
            </span>
          </li>
          <li className='nav-item'></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
