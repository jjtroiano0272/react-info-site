import React, { useState, useEffect } from 'react';
import Article from './Article';

// const Joke = ({ setup, punchline }) => {
function Joke() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('dadjokes');
  const redditJokeEndpoint = 'https://www.reddit.com/r/dadjokes.json?limit=3';

  useEffect(() => {
    // TODO: Replace me with axios?
    fetch(redditJokeEndpoint).then((res) => {
      if (res.status != 200) {
        console.log('Whoopsie poopsie!');
        return;
      }

      res.json().then((data) => {
        if (data != null) {
          setArticles(data.data.children);
          console.log(data);
        }
      });
    });
  }, [subreddit]);

  return (
    <div className='container my-5'>
      {/* <h1>{setup}</h1>
      <p>{punchline}</p> */}
      <hr />
      {/* Map such that attr stickied which is on the same level as title, is false */}
      {articles != null
        ? articles.map((article, index) => (
            <Article key={index} article={article.data} />
          ))
        : 'no article'}
    </div>
  );
}

export default Joke;
