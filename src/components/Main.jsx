import React, { useState } from 'react';
import heroPhoto from '../image/group-grid-photos.png';

const Main = () => {
  return (
    // previously with vh-100
    <div className='container'>
      <div className='row'>
        <main className='col-md-10 py-5 text-center'>
          <img className='img-fluid' src={heroPhoto} alt='Hero photo' />
          <h1 className='main'>Online experiences</h1>
          <p className='muted col-xl-6'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
            beatae quis voluptatem numquam soluta ea voluptatum odit dolore?
            Blanditiis illo incidunt mollitia, alias maxime aliquam corrupti
            dignissimos iste doloribus nobis?
          </p>
        </main>
      </div>
    </div>
  );
};

export default Main;
