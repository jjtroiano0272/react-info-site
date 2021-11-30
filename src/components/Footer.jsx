import React, { useState } from 'react';
import brandLogo from '../image/logoipsum-logo-14.svg';

const Footer = () => {
  return (
    <div className='container'>
      <footer className='pt-4 my-md-5 pt-md-5 border-top'>
        <div className='row'>
          <div className='col-12 col-md'>
            <div className='d-block mb-3 text-muted'>
              <a className='navbar-brand' href='#'>
                <img src={brandLogo} alt='Website logo' />
                <small className='d-block mb-3 text-muted'>© 2021</small>
              </a>
            </div>
          </div>
          <div className='col-6 col-md'></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
