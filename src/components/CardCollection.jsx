import React, { useState, useContext } from 'react';
import Card from './Card';

export default function CardCollection({ data }) {
  return data.map((item) => {
    <Card key={item.id} item={item} />;
  });
}
