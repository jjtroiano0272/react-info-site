import React, { useState, useEffect } from 'react';
import Article from './Article';

// const Joke = ({ setup, punchline }) => {
export default function Quotes({ src, numPosts, hr }) {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('dadjokes');
  const redditJokeEndpoint = `https://www.reddit.com/r/${src}.json?limit=${numPosts}`;

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
        }
      });
    });
  }, [subreddit]);

  return (
    <div className='container my-5'>
      {hr && <hr />}
      {/* Map such that attr stickied which is on the same level as title, is false */}
      {articles != null
        ? articles.map((article, index) => (
            <Article key={index} article={article.data} />
          ))
        : 'no article'}
    </div>
  );
}
