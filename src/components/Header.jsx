import React from 'react';
import './header.css';

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header__title">Pizza Website</h1>
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__menu-item">
            <input
              type='text' placeholder='Your favourite Pizza '
              value={props.searchText}
              onChange={(e) => props.setSearchText(e.target.value)}
            />
          </li>
          <li className="header__menu-item">About</li>
          <li className="header__menu-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;





