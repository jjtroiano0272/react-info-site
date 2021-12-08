import React, { useState, useContext } from 'react';
import JournalEntry from './JournalEntry';

export default function TravelJournal({ data }) {
  return (
    <>
      {data.map((item) => (
        <JournalEntry key={item.id} item={item} />
      ))}
    </>
  );
}
