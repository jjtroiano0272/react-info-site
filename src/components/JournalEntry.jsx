import React, { cloneElement, useState } from 'react';

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
        <div className='col-2'>
          <img
            className='img-fluid rounded'
            src={`https://source.unsplash.com/${imageID}`}
          />
        </div>
        <div className='col-10'>
          <span>
            <h1>{title}</h1>
            <h4 className='text-secondary'>{location}</h4>
            <a href={googleMapsUrl}>MAP</a>
            <p className='muted'></p>
          </span>
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
