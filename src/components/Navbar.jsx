import React, { useRef, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { Link, NavLink, Route, Switch, Redirect } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Command } from 'phosphor-react';
import Tooltip from '@mui/material/Tooltip';
import brandLogo from '../image/logoipsum-logo-14.svg';

export default function Navbar({ user, darkMode, toggleDarkMode }) {
  // TODO: Make dynamic to actually detect user's OS. If mobile, do not display!
  const userOS = 'Mac';
  const [inputSwitch, setInputSwitch] = useState(null);
  const inputRef = useRef(null);

  // Switch theme
  useHotkeys('CTRL+/, CMD+/', () => {
    toggleDarkMode();
  });

  // Focus on search box
  useHotkeys('CTRL+K, CMD+K', () => {
    inputRef.current.focus();
  });

  return (
    <nav className='navbar navbar-expand-lg px-3 sb-1'>
      <Link to='/' className='navbar-brand'>
        <img src={brandLogo} alt='Website logo' />
      </Link>

      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>

      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <ul className='navbar-nav mr-auto mx-2'>
          <li className='nav-item'>
            <Link className='nav-link' to='/travel-journal'>
              Travel Journal
            </Link>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='#'
              id='navbarDropdown'
              role='button'
              data-bs-toggle='dropdown'
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
            <Tooltip
              title={
                !darkMode
                  ? 'Switch theme to dark mode [CMD + /]'
                  : 'Switch theme to light mode [CMD + /]'
              }
            >
              <span className='d-inline-block float-left'>
                <DarkModeSwitch
                  className='react-darkMode-switch'
                  checked={darkMode}
                  onClick={toggleDarkMode}
                  // size={120}
                />
              </span>
            </Tooltip>
            <span className='d-inline-block'>
              <form className='form-inline my-2 my-lg-0 ms-auto'>
                <input
                  type='search'
                  ref={inputRef}
                  className='form-control mr-sm-2 search-query'
                  placeholder={
                    userOS === 'Mac'
                      ? `Search [ CMD + K ]`
                      : `Search [ CTRL + K ]`
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
}
