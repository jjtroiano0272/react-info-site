import React, { cloneElement, useState } from 'react';
import { BiMap } from 'react-icons/bi';

export default function JournalEntry(props) {
  const {
    id,
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props.item;
  const imageID = imageUrl.slice(28);

  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-2 d-flex'>
          <img
            className='img-fluid rounded'
            src={`https://source.unsplash.com/${imageID}`}
          />
        </div>
        <div className='col-10'>
          <div className='d-flex'>
            <a href={googleMapsUrl} className='me-3 pointer'>
              <BiMap style={{ fontSize: '3em' }} />
            </a>
            <h1>{title}</h1>
          </div>
          <h4 className='text-secondary'>{location}</h4>
          <p className='muted'></p>

          <p>
            <strong>
              {startDate} - {endDate}
            </strong>
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
