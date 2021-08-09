import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthProvider from '../contexts/AuthContext';
import PrivateRoute from '../router/PrivateRoute';

import Header from './Header';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
