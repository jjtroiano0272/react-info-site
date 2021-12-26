import React, { useRef, useState, useContext } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { useHotkeys } from 'react-hotkeys-hook';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Command } from 'phosphor-react';
import { ThemeContext } from './ThemeProvider';
import Tooltip from '@mui/material/Tooltip';
import brandLogo from '../assets/images/logoipsum-logo-14.svg';

export default function Navbar({ user }) {
  // TODO: Make dynamic to actually detect user's OS. If mobile, do not display!
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const inputRef = useRef(null);

  // Switch theme
  useHotkeys(
    'cmd+/, ctrl+/',
    () => {
      toggleDarkMode();
    },
    [toggleDarkMode]
  );

  // Focus search box
  useHotkeys(
    'cmd+k, ctrl+k',
    () => {
      inputRef.current.focus();
    },
    [inputRef]
  );

  return (
    <nav className='navbar navbar-expand-lg navbar-light mb-4 sbl-1'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          <img src={brandLogo} alt='Website logo' id='nav-logo' />
        </Link>
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
            <li className='nav-item'>
              <Link to='/travel-journal' className='nav-link'>
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

          <Tooltip
            title={
              !darkMode
                ? 'Switch theme to dark mode [CMD+/]'
                : 'Switch theme to light mode [CMD+/]'
            }
          >
            <button
              onClick={toggleDarkMode}
              className='btn btn-lg my-2 my-sm-0'
              data-tip
              data-for='lightDarkModeTip'
              type='checkbox'
            >
              {darkMode === true ? '🔆' : '🌙'}
            </button>
          </Tooltip>

          {/* <ul className='navbar-nav mr-auto ms-auto'>
            <li className='nav-item active my-auto ms-auto align-middle'>
              <Tooltip
                title={
                  !darkMode
                    ? 'Switch theme to dark mode [CMD + /]'
                    : 'Switch theme to light mode [CMD + /]'
                }
              >
                <DarkModeSwitch
                  className='react-darkMode-switch'
                  checked={darkMode}
                  onClick={toggleDarkMode}
                  // size={120}
                />
              </Tooltip>
              <span className='d-inline-block'>
                <form className='form-inline my-2 my-lg-0 ms-md-auto'>
                  <input
                    className='form-control search-query mr-sm-2'
                    type='search'
                    ref={inputRef}
                    placeholder='Search'
                    aria-label='Search'
                  />
                </form>
              </span>
            </li>
            <li className='nav-item'></li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}
