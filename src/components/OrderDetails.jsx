import React from 'react';
import { useLocation, useNavigate, } from 'react-router-dom';

const OrderDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, orderId, address, message, cartItems, totalAmount } = location.state;

  const handlePrintReceipt = () => {
    window.print();
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="order-details">
      <h2>Order Details</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Order ID:</strong> {orderId}
      </p>
      <p>
        <strong>Delivery Address:</strong> {address}
      </p>
      <p>
        <strong>Message:</strong> {message}
      </p>
      <h3>Items:</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ₹ {item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>
        <strong>Total Amount:</strong> ₹ {totalAmount}
      </p>
      <div>
        <button onClick={handlePrintReceipt}>Print Receipt</button>
        <button onClick={handleGoHome}>Go to Home</button>
      </div>
    </div>
  );
};

export default OrderDetails;
