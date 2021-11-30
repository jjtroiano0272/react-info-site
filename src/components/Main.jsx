import React, { useState } from 'react';
import heroPhoto from '../image/group-grid-photos.png';

const MainContent = () => {
  return (
    <div className='container vh-100'>
      <main className='container py-5 text-center'>
        <img src={heroPhoto} alt='Hero photo' />
        <h1 className='main'>Online experiences</h1>
        <p className='muted col-6'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, beatae
          quis voluptatem numquam soluta ea voluptatum odit dolore? Blanditiis
          illo incidunt mollitia, alias maxime aliquam corrupti dignissimos iste
          doloribus nobis?
        </p>
      </main>
    </div>
  );
};

export default MainContent;
