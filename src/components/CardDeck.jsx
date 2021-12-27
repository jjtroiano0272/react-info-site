import React from 'react';
import Card from './Card';

export default function CardDeck({ data }) {
  return (
    // <div className='card-deck'>
    //   {data.map((item) => (
    //     <Card key={item.id} item={item} />
    //   ))}
    // </div>

    <div className='row ox-scroll fade-box'>
      <div className='col-md-3 col-xs-12 d-flex '>
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
