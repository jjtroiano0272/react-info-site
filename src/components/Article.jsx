import React, { useState } from 'react';

export default function Article(props) {
  const { stickied, title, selftext, url } = props.article;

  return (
    <>
      {/* TODO: A little reddit logo to click on if hovered over for 2 sec */}
      {!stickied && (
        <>
          <h5>{title}</h5>
          <a className='pointer' href={url}>
            <p className='text-secondary'>
              <em>
                <small>{selftext}</small>
              </em>
            </p>
          </a>
        </>
      )}
    </>
  );
}
