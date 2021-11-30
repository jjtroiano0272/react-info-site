import React, { useState } from 'react';
import data from '../data_journal';
import JournalEntry from './JournalEntry';

function TravelJournal(items) {
  const [data, setData] = useState([items]);
  console.log('Data obj: ', data);
  data.map((item) => console.log('Item obj: ', item));

  // <JournalEntry key={} />

  // Render each entry with map
  // title: 'Mount Fuji',
  // location: 'Japan',
  // googleMapsUrl: 'https://goo.gl/maps/1DGM5WrWnATgkSNB8',
  // startDate: '12 Jan, 2021',
  // endDate: '24 Jan, 2021',
  // description:
  //   'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
  // imageUrl: 'https://unsplash.com/photos/WLxQvbMyfas'
  // items[0].description;
  return (
    <div className='container'>
      {/* Articles ~= data */}
      {/* articles.map((article, index) => (
            <Article key={index} article={article.data} />
          )) */}
      {data.map((item, key) => {
        return (
          <div className='row' key={key}>
            <div className='col-2'>
              {/* <img src={item.imageUrl} alt={`$Image of {item.title}`} /> */}
              <img src={item.imageUrl} />
            </div>
            <div className='col-10'>
              <h1>{item.location}</h1>
              <p>
                <strong>{item.startDate}</strong>
              </p>
              <p>description</p>
            </div>
          </div>
        );
      })}
      {/* <h1>foo</h1>
      <p>bar</p> */}
    </div>
  );
}

export default TravelJournal;
