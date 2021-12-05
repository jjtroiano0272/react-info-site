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
  const inputRef = useRef();

  // START outside code
  const storedDarkMode = localStorage.getItem('DARK_MODE');
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  // TODO: there should be a step in here where the input switch's T/F value gets set/passed down

  useEffect(() => {
    localStorage.setItem('DARK_MODE', darkMode);
    console.log('useEffect mounted, run. darkMode is: ', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    // TODO: refacotr
    setDarkMode(!darkMode);
  };
  console.log('toggleDarkMode completed. darkMode: ', darkMode);

  // END outside code

  // const currentTheme = localStorage.getItem('theme');
  // console.log(currentTheme);
  // if (currentTheme) {
  //   document.documentElement.setAttribute('data-theme', currentTheme);
  //   console.log(currentTheme);
  //   if (currentTheme === 'dark') {
  //       toggleSwitch.checked = true;
  //   }
  // }
  // if (!mountedComponent) return <div />;
  // const toggleTheme = () => {
  //   document.documentElement.getAttribute('data-theme') === 'dark'
  //     ? document.documentElement.setAttribute('data-theme', 'light')
  //     : document.documentElement.setAttribute('data-theme', 'dark');
  // };

  return (
    // <div document.documentElement.s={darkMode ? 'dark' : 'light'}>
    <div className='App' data-theme={darkMode ? 'dark' : 'light'}>
      {/* TODO: Add prop user={user} 
          const [user, setUser] = useState(auth.getCurrentUser());
          import auth from './services/authService';
          import { Switch } from 'react-router-dom';
          */}
      <Navbar toggleDarkMode={toggleDarkMode} inputRef={inputRef} />
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
