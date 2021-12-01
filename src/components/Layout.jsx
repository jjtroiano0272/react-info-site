import React, { useContext, useState } from 'react';
import ThemeContext from '../theme-context';

const Layout = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={theme}>
      <div>{JSON.stringify(theme)}</div>
    </div>
  );
};

export default Layout;
