import React, { useState } from 'react';

function Article(props) {
  const { stickied, title, selftext } = props.article;

  return (
    <div>
      {/* TODO: A little reddit logo to click on if hovered over for 2 sec */}
      {/* <a href={'https://reddit.com' + props.article.permalink} target='_blank'> */}
      {/* <h3>{props.article.title}</h3> */}

      {!stickied && (
        <>
          <h5>{title}</h5>
          <p className='text-secondary'>
            <em>
              <small>{selftext}</small>
            </em>
          </p>
        </>
      )}
      {/* </a> */}
    </div>
  );
}

export default Article;
