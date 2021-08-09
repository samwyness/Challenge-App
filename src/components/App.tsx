import React from 'react';
import logo from '../assets/logo.svg';

import AuthProvider from '../contexts/AuthContext';
import { Login } from './Login';

import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <Login />
        </header>
      </div>
    </AuthProvider>
  );
};

export default App;
