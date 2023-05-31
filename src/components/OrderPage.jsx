import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderPage.css';

function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (location.state && location.state.pizza) {
      setSelectedPizza(location.state.pizza);
    }
  }, [location]);

  const handleQuantityChange = (change) => {
    const updatedQuantity = quantity + change;
    if (updatedQuantity >= 1) {
      setQuantity(updatedQuantity);
    }
  };

  const calculateTotal = () => {
    return (selectedPizza.price * quantity).toFixed(2);
  };

  const handlePayment = () => {
    // Navigate to the payment page
    navigate('/payment', {
      state: {
        pizza: selectedPizza,
        quantity: quantity,
        total: calculateTotal(),
      },
    });
  };
  

  if (!selectedPizza) {
    return <div className="order-page">No pizza selected</div>;
  }

  return (
    <div className="order-page">
      <h1 className="order-title">Order Details</h1>
      <div className="order-item">
        <img
          src={selectedPizza.src}
          alt={selectedPizza.name}
          className="pizza-image"
        />
        <div className="pizza-details">
          <h3 className="pizza-name">{selectedPizza.name}</h3>
          <p className="quantity">Quantity: {quantity}</p>
          <button
            className="quantity-btn"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <button
            className="quantity-btn"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
          <p className="price">Price: ${(selectedPizza.price * quantity).toFixed(2)}</p>
        </div>
      </div>
      <h2 className="total">Total: ${calculateTotal()}</h2>
      <button className="payment-btn" onClick={handlePayment}>Proceed to Payment</button>
    </div>
  );
}

export default OrderPage;
