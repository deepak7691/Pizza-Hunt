import React from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Header = (props) => {
  const {cartItems} = props;
  const navigate = useNavigate();
  const navigateContact = () =>{
    navigate("/contact-us")
  }

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateCart = () =>{
    navigate("/cart", {state : {cartItems : cartItems}})
  }

  

  return (
    <header className="header">
      <h1 className="header__title">Pizza Website</h1>
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__menu-item">
            <input  type='text' placeholder='Your favourite Pizza' value={props.searchText} onChange={(e) => props.setSearchText(e.target.value)} />
          </li>
          <li className="header__menu-item" onClick={scrollToFooter}>
            About
          </li>
          <li className="header__menu-item" onClick={navigateContact}>Contact</li>
          <li className="header__menu-item" onClick={navigateCart}><FaShoppingCart className="cart-icon"/></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
