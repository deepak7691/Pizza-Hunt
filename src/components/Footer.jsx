import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>About Us</h2>
            <p>
              We are a pizza delivery service committed to providing you with
              delicious and freshly made pizzas right to your doorstep.
            </p>
          </div>
          <div className="footer-section">
            <h2>Contact Information</h2>
            <p>123 Pizza Street, Badnawar</p>
            <p>Phone: 7000492993</p>
            <p>Email: kawliya11@gmail.com</p>
          </div>
          <div className="footer-section">
            <h2>Opening Hours</h2>
            <p>Monday - Friday: 9am - 9pm</p>
            <p>Saturday - Sunday: 10am - 10pm</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Pizza Delivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
