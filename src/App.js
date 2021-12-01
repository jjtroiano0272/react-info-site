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
  const [theme, setTheme] = useState('dark');

  // TODO: This should be moved to its own component
  const Cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  const Journal = data_journal.map((item) => {
    return <JournalEntry key={item.id} item={item} />;
  });

  // if (!mountedComponent) return <div />;

  return (
    // <ThemeProvider theme={themeMode}>
    <ThemeContext.Provider value={themes.dark}>
      {/* <div className={`App ${theme}`}> */}
      <Layout />
      {/* <GlobalStyles /> */}
      {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
      <Button
        label='Click Me'
        onClick={theme === 'light' ? setTheme('dark') : 'light'}
      />
      <Navbar />
      <Main />
      <div class='container-fluid py-2'>
        <div class='d-flex flex-row flex-nowrap'>{Cards}</div>
      </div>
      {/* TODO: Reddit API to grab latest post from anti-joke sub */}
      <Joke />
      {Journal}
      <Footer />
      {/* </div> */}
    </ThemeContext.Provider>
    // </ThemeProvider>
  );
}
