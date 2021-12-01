import React, { useState } from 'react';

export const themes = {
  dark: {
    color: '#ffffff',
    background: '#121212',
  },
  light: {
    color: '#ffffff',
    background: '#ffffff',
  },
};

export const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;
