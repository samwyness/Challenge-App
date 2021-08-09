import React from 'react';

import logo from '../../assets/logo.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
    </header>
  );
};

export default Header;
