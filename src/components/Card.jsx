import React, { useState } from 'react';
import { BsFillStarFill } from 'react-icons/bs';

export default function Card(props) {
  const { openSpots, location, coverImg, title, price } = props.item;
  const { rating, reviewCount } = props.item.stats;

  let badgeText;
  if (openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className='container my-5'>
      <div className={'card w-18'}>
        <div className='embed-responsive embed-responsive-16-by-9'>
          {badgeText && <div className='card-badge'>{badgeText}</div>}
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/${coverImg}`}
            className='card-img-top embed-responsive-item of-cover'
            alt='Card image cap'
          />
          <div className='card-body'>
            <h5 className='card-title d-flex'>
              <BsFillStarFill className='me-2' />
              <span>{rating} • </span>
              <span className='text-secondary'>({reviewCount})</span>
              <span className='ms-2'>{location} </span>
            </h5>
            <p className='card-text'>{title}</p>
            <a href='#' className='btn btn-primary'>
              From ${price} a person
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
