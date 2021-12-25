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
        <div className='col-lg-2 col-md-3 d-flex ratio ratio-16x9 mb-3 '>
          <img
            className='img-fluid rounded w-100 of-cover'
            src={`https://source.unsplash.com/${imageID}`}
          />
        </div>
        <div className='col-lg-10 col-md-9'>
          <div className='d-flex'>
            <span className='d-inline-block float-left'>
              <h1>{title}</h1>
            </span>
            <span className='d-inline-block'>
              <a href={googleMapsUrl} className='me-3 pointer'>
                <BiMap style={{ fontSize: '3em' }} />
              </a>
            </span>
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
