import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs';

export default function Card(props) {
  const { openSpots, location, coverImg, title, price, id } = props.item;
  const { rating, reviewCount } = props.item.stats;

  let badgeText;
  if (openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (location === 'Online') {
    badgeText = 'ONLINE';
  }

  const handleClick = () => {
    console.log(`Card ${id} button clicked`);
    alert(`Placeholder for booking ${title}`);
  };

  return (
    <li
      data-target='#carouselExampleIndicators'
      data-slide-to={id}
      className={id === 1 && 'active'}
    >
      <div className='card bg-light mb-3 my-5 mx-4'>
        {badgeText && (
          <div className='card-badge bg-light text-dark'>{badgeText}</div>
        )}
        <img
          className='card-img-top fit-cover'
          src={`${process.env.PUBLIC_URL}/assets/images/${coverImg}`}
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
          <Link to='' className='btn btn-primary' onClick={handleClick}>
            From ${price} a person
          </Link>
        </div>
      </div>
    </li>
  );
}
