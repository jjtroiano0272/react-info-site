import React, { useState } from 'react';
import heroPhoto from '../image/group-grid-photos.png';

const Main = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <main className='main col-md-10 py-5 text-center'>
          <img className='img-fluid py-5' src={heroPhoto} alt='Hero photo' />
          <h1 className='py-3'>Online experiences</h1>
          <div className='row text-center'>
            <p className='text-muted'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
              beatae quis voluptatem numquam soluta ea voluptatum odit dolore?
              Blanditiis illo incidunt mollitia, alias maxime aliquam corrupti
              dignissimos iste doloribus nobis?
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Main;
