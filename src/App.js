import React, { useState, useEffect } from 'react';
// import { ThemeProvider } from 'styled-components';
// import { GlobalStyles } from './components/globalStyles';
// import { useDarkMode } from './components/useDarkMode';
// import { lightTheme, darkTheme } from './components/Themes';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Card from './components/Card';
import Joke from './components/Joke';
import Footer from './components/Footer';
import TravelJournal from './components/TravelJournal';
import JournalEntry from './components/JournalEntry';
// import Toggle from './components/Toggler';
import data from './data_experiences';
import data_journal from './data_journal';
import './theme.css';
import { Button } from './components/button/Button';
import Layout from './components/Layout';
import ThemeContext, { themes } from './theme-context';

export default function App() {
  // const [theme, themeToggler, mountedComponent] = useDarkMode();
  // const themeMode = theme === 'light' ? lightTheme : darkTheme;

  // TODO: This should be moved to its own component
  const Cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  const Journal = data_journal.map((item) => {
    return <JournalEntry key={item.id} item={item} />;
  });

  // if (!mountedComponent) return <div />;

  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () => {
    // theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
    // console.log('Toggled to ', theme);
    const $ = document.documentElement;
    $.getAttribute('data-theme') === 'dark'
      ? $.setAttribute('data-theme', 'light')
      : $.setAttribute('data-theme', 'dark');
  };

  const changeClass = () => {
    // document.documentElement.classList.toggle('dark');
    // conditions
    document.body.classList.toggle('dark-theme');
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        {/* <Layout /> */}

        {/* <Button
          label='Click Me'
          onClick={theme === 'light' ? setTheme('dark') : 'light'}
        /> */}
        <Navbar toggleTheme={toggleTheme} />
        <Main />
        <div className='container-fluid py-2'>
          <div className='d-flex flex-row flex-nowrap'>{Cards}</div>
        </div>
        <Joke src={'dadjokes'} numPosts={3} hr={true} />
        <Joke src={'antijokes'} numPosts={1} hr={true} />
        {Journal}
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}
