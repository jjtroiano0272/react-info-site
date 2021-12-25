import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
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
    <Router>
      <div className='App' data-theme={darkMode ? 'dark' : 'light'}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/travel-journal'
              element={<TravelJournal data={data_journal} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
