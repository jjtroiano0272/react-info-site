import React, { useState } from 'react';
import brandLogo from '../image/logoipsum-logo-14.svg';

export default function Footer() {
  return (
    <div className='container'>
      <footer className='pt-4 pt-md-5 border-top'>
        <div className='row'>
          <div className='col-12 col-md'>
            <div className='d-block mb-3 text-muted'>
              <a className='navbar-brand' href='#'>
                <img src={brandLogo} alt='Website logo' />
                <small className='d-block mb-3 text-muted'>© 2021</small>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
