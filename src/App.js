import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Joke from './components/Joke';
import Footer from './components/Footer';
import JournalEntry from './components/JournalEntry';
import data_experiences from './data_experiences';
import data_journal from './data_journal';
import CardCollection from './components/CardCollection';
import TravelJournal from './components/TravelJournal';

export default function App() {
  // const storedDarkMode = localStorage.getItem('DARK_MODE');
  // const [darkMode, setDarkMode] = useState(storedDarkMode);
  const [darkMode, setDarkMode] = useState(() =>
    JSON.parse(localStorage.getItem('DARK_MODE'))
  );

  const toggleDarkMode = () => {
    localStorage.setItem('DARK_MODE', !darkMode);
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    localStorage.setItem('DARK_MODE', darkMode);
    // storedDarkMode = localStorage.getItem('DARK_MODE');
  }, [darkMode]);

  // console.log('storedDark: ', storedDarkMode);
  // console.log('darkMode state: ', darkMode);

  return (
    <div className='App' data-theme={darkMode ? 'dark' : 'light'}>
      {/* TODO: Add prop user={user} 
          const [user, setUser] = useState(auth.getCurrentUser());
          import auth from './services/authService';
          import { Switch } from 'react-router-dom';
          */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className='container'>
        {/* <div className='container-fluid py-2'>
              <div className='d-flex flex-row flex-nowrap'>{Cards}</div>
            </div> */}
        <Main />
        <CardCollection data={data_experiences} />
        <Joke src={'dadjokes'} numPosts={3} hr={true} />
        <Joke src={'antijokes'} numPosts={1} hr={true} />
        <TravelJournal data={data_journal} />
        <Footer />
      </main>
    </div>
  );
}
