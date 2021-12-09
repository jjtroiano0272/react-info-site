import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Quotes from './components/Quotes';
import Footer from './components/Footer';
import CardCollection from './components/CardCollection';
import TravelJournal from './components/TravelJournal';
import data_experiences from './data_experiences';
import data_journal from './data_journal';

export default function App() {
  const [darkMode, setDarkMode] = useState(() =>
    JSON.parse(localStorage.getItem('DARK_MODE'))
  );

  const toggleDarkMode = () => {
    localStorage.setItem('DARK_MODE', !darkMode);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem('DARK_MODE', darkMode);
  }, [darkMode]);

  return (
    <div className='App' data-theme={darkMode ? 'dark' : 'light'}>
      {/* TODO: Add prop user={user} 
          const [user, setUser] = useState(auth.getCurrentUser());
          import auth from './services/authService';
          import { Switch } from 'react-router-dom';
          */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className='container'>
        <Main />
        <CardCollection data={data_experiences} />
        <Quotes src={'dadjokes'} numPosts={3} hr={true} />
        <Quotes src={'antijokes'} numPosts={1} hr={true} />
        <TravelJournal data={data_journal} />
        <Footer />
      </main>
    </div>
  );
}
