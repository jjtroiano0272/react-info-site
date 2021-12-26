import React, { useState, useEffect, useContext } from 'react';
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
import Footer from './components/Footer';
import TravelJournal from './components/TravelJournal';
import UserProfile from './components/UserProfile';
import { ThemeContext } from './components/ThemeProvider';
import data_journal from './data_journal';

export default function App() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* TODO: I want the data source set in the component JSX */}
        <Route
          path='/travel-journal'
          element={<TravelJournal data={data_journal} />}
        />
        <Route path='/my-profile' element={<UserProfile />} />
      </Routes>
    </Router>
  );
}
