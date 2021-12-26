import React, { useState, useEffect } from 'react';
import CardCollection from './CardCollection';
import Quotes from './Quotes';
import Footer from './Footer';
import data_experiences from '../data_experiences';
import heroPhoto from '../assets/images/group-grid-photos.png';

export default function Home(props) {
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <main className='main col-md-10 py-5 text-center'>
            <img className='img-fluid py-5' src={heroPhoto} alt='Hero photo' />
            <h1 className='py-3'>Online experiences</h1>
            <div className='row text-center'>
              <p className='text-secondary'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
                beatae quis voluptatem numquam soluta ea voluptatum odit dolore?
                Blanditiis illo incidunt mollitia, alias maxime aliquam corrupti
                dignissimos iste doloribus nobis?
              </p>
            </div>
          </main>
        </div>
        <CardCollection data={data_experiences} />
        <Quotes src={'dadjokes'} numPosts={3} hr={true} />
        <Quotes src={'antijokes'} numPosts={1} hr={true} />
      </div>
      <Footer />
    </>
  );
}
