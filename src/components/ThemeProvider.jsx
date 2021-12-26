import React, { useState, createContext, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Style declarations
  const darkFontColor = '#fff';
  const darkBgColor = '#333';
  const darkPrimaryColor = '';
  const darkSecondaryColor = '';
  const darkHeadingColor = '';
  // Light Declarations
  const lightFontColor = '#333';
  const lightBgColor = '#fff';
  const lightPrimaryColor = '';
  const lightSecondaryColor = '';
  const lightHeadingColor = '';

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true';
    setDarkMode(isDark);

    // TODO: This would be lovely with a more elegant approach!
    // TODO: Some version where it checks first if the slector exists, then does actions
    // If it's light mode, remove *-dark classes.
    if (!darkMode) {
      document.querySelector('nav').classList.remove('navbar-dark');
      // document
      //   .querySelector('input.form-control')
      //   .classList.remove('search-dark');
      document.getElementById('nav-logo').classList.remove('color-invert');

      document.querySelectorAll('div.card').forEach((item) => {
        item.classList.add('bg-light');
        item.classList.remove('bg-dark', 'text-white');
      });
      // div.card-badge.bg-light.text-dark
      document.querySelectorAll('div.card-badge').forEach((item) => {
        item.classList.add('bg-light', 'text-dark');
        item.classList.remove('bg-dark', 'text-white');
      });

      document.body.style.color = lightFontColor;
      document.body.style.backgroundColor = lightBgColor;
    } else {
      document.querySelector('nav').classList.add('navbar-dark');
      // document.querySelector('input.form-control').classList.add('search-dark');
      document.getElementById('nav-logo').classList.add('color-invert');

      document.querySelectorAll('div.card').forEach((item) => {
        item.classList.remove('bg-light');
        item.classList.add('bg-dark', 'text-white');
      });

      document.querySelectorAll('div.card-badge').forEach((item) => {
        item.classList.add('bg-dark', 'text-white');
        item.classList.remove('bg-light', 'text-dark');
      });

      document.body.style.color = darkFontColor;
      document.body.style.backgroundColor = darkBgColor;
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    localStorage.setItem('dark', JSON.stringify(isDark));
    setDarkMode(isDark);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
