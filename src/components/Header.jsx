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
    <img className='logo' alt='logo' src='https://w7.pngwing.com/pngs/462/807/png-transparent-old-pizza-hut-restaurant-yum-brands-pizza-food-text-logo-thumbnail.png'/>
    
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__menu-item">
            <input  type='text' placeholder="Search Pizza" value={props.searchText} onChange={(e) => props.setSearchText(e.target.value)} />
          </li>
          <li className="header__menu-item" onClick={scrollToFooter}>
            About
          </li>
          <li className="header__menu-item" onClick={navigateContact}>ContactUs</li>
          <li className="header__menu-item" onClick={navigateCart}><FaShoppingCart className="cart-icon"/></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
