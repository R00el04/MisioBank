import React from 'react';
import Logo from '../Header/logo1.png';

const Header = () => {


  return (
    <header>
      <div class="logo">
        <img src={Logo} alt="Logo" />
      </div>
    </header>
  );
};


export default (Header);