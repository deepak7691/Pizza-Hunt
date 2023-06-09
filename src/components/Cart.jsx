import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems: initialCartItems } = location.state;
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleIncrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });

    return Math.ceil(total);
  };

  const navigateToPayment = () => {
    navigate('/payment', {
      state: {
        cartItems,
        totalAmount: calculateTotal()
      }
    });
  };

  return (
    <div className="cart">
      <h1>Your Pizzas    <FaShoppingCart/></h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.src} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹ {item.price}</p>
                  <div>
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        <h3>  <p className="grand-total">Grand Total: ₹ {calculateTotal()}</p></h3>
          <button className="proceed-btn" onClick={navigateToPayment}>
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
