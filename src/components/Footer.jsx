import React, { useState } from 'react';
import brandLogo from '../image/logoipsum-logo-14.svg';
import { CaretDoubleUp } from 'phosphor-react';

export default function Footer() {
  return (
    <div className='container'>
      <footer className='pt-4 pt-md-5 border-top'>
        <div className='row'>
          <div className='col-12 col-md'>
            <div className='d-block mb-3 text-secondary'>
              <a className='navbar-brand' href='#'>
                <img src={brandLogo} alt='Website logo' />
                <small className='d-block mb-2 text-secondary'>© 2021</small>
              </a>
            </div>
          </div>
        </div>
        <div className='d-flex mb-4'>
          <div>
            <small className='text-secondary mb-2'>
              Developed by J. Troiano
            </small>
          </div>

          <div className='ms-auto'>
            <a
              href='https://portfolio-page-vite-6r4.pages.dev/'
              className='pointer'
            >
              View Profile
            </a>
          </div>
        </div>
        <div className='row text-center'>
          <a href='#' className='mb-4 pointer'>
            <CaretDoubleUp style={{ size: '2rem' }} />
          </a>
        </div>
      </footer>
    </div>
  );
}
