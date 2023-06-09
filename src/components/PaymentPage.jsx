import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/PaymentPage.css"

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, totalAmount } = location.state;

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();

    setIsLoading(true);
    setTimeout(() => {
      const orderId = Math.floor(10000 + Math.random() * 90000);

      navigate(`/order/${orderId}`, {
        state: {
          name,
          orderId,
          address,
          message: 'Your order should be delivered shortly.',
          cartItems,
          totalAmount
        },
      });

      setCardNumber('');
      setExpiryDate('');
      setCvv('');
      setName('');
      setAddress('');
    }, 2500);
  };

  return (
    <div className="payment-form">
      <h1>Payment Details</h1>
      {isLoading ? (
        <div className="loading-container">
          <img
            src="https://media.giphy.com/media/3o7bu8sRnYpTOG1p8k/giphy.gif"
            alt="Loading..."
            className="loader"
          />
        </div>
      ) : (
        <form onSubmit={handlePayment}>
          <div>
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="name">Name on Card:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Delivery Address:</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="payment-button">
            Make Payment
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentPage;
