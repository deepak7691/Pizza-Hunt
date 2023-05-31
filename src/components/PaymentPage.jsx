import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PaymentPage.css';

function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
  
    // Perform payment processing or API call here
    // You can use the form inputs: cardNumber, expiryDate, cvv, name, address
  
    // Simulating loading state for demonstration purposes
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
  
      // Generate a random order ID (5 digits)
      const orderId = Math.floor(10000 + Math.random() * 90000);
  
      // Redirect to the order confirmation page with the order details
      navigate(`/order/${orderId}`, {
        state: {
          name,
          orderId,
          address,
          message: 'Your order should be delivered shortly.',
          pizza: location.state.pizza,
          quantity: location.state.quantity,
          total: location.state.total,
        },
      });
    }, 2000);
  
    // Reset the form after payment is completed
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setName('');
    setAddress('');
  };
  

  return (
    <div className="payment-form">
      <h1>Payment Details</h1>
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
        <button type="submit" disabled={isLoading} className="payment-button">
          {isLoading ? 'Processing...' : 'Make Payment'}
        </button>
      </form>
    </div>
  );
}

export default PaymentPage;
