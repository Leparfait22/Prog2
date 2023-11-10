import React from 'react';
import logo from './logo.png';
import './styles.css';
import Follow from './Follow';


function Header() {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <h1>UNIVERSIDADE FEDERAL DA FRONTEIRA SUL</h1>
      <Follow />
    </div>
  );
}

export default Header;
