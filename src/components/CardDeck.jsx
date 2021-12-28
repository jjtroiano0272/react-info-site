import React from 'react';
import Card from './Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './common/carouselResponsivePoints.jsx';

export default function CardDeck({ data }) {
  return (
    <Carousel responsive={responsive}>
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </Carousel>
  );
}
