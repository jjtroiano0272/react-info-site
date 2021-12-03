import React, { useContext, useState } from 'react';
import ThemeContext from '../theme-context';

const Layout = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={theme}>
      <p className='text-warning'>{JSON.stringify(theme)}</p>
    </div>
  );
};

export default Layout;
