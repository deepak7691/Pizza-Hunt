import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderDetails.css';

function OrderDetails() {
  const location = useLocation();
  const { name, orderId, address, message, pizza, quantity, total } = location.state;

  const navigate = useNavigate()

  const navigateHome = () => {
    navigate("/")
  }

  return (
    <div className="order-details">
      <h1>Congratulations!</h1>
      <p className="detail">Your order has been placed successfully.</p>
      <p className="detail">Name: {name}</p>
      <p className="detail">Order ID: {orderId}</p>
      <p className="detail">Address: {address}</p>
      <p className="detail">{message}</p>

      <h2 className="pizza-title">Pizza Details</h2>
      <div className="pizza-item">
        <img
          src={pizza ? pizza.src : ''}
          alt={pizza ? pizza.name : ''}
          className="pizza-image"
        />
        <div className="pizza-details">
          {pizza && (
            <>
              <h3 className="pizza-name">{pizza.name}</h3>
              <p className="quantity">Quantity: {quantity}</p>
              <p className="price">Price: ${total}</p>
            </>
          )}
        </div>
      </div>

      <button className="print-button" onClick={() => window.print()}>
        Print Receipt 
      </button>
      <button className="print-button btnHome" onClick={navigateHome}>
        Home
      </button>
    </div>
  );
}

export default OrderDetails;
