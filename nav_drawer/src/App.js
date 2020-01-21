import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';
import Button from './components/Button'
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <div className="App">
      <CssBaseline />
      <AppBar />
      <div className="App-main">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
