import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { pizzas } from '../data';
import Header from './Header';

function Home() {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleCardClick = (pizza) => {
    setSelectedPizza(pizza);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedPizza(null);
    setShowModal(false);
  };

  const handleOrder = () => {
    navigate('/order', { state: { pizza: selectedPizza } });
  };

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <div className="flexbox">
        {pizzas
          .filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((item) => (
            <div
              className="card"
              key={item.id}
              onClick={() => handleCardClick(item)}
            >
              <img src={item.src} alt="pizza" className="card-img" />
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <h4>₹ {item.price}</h4>
            </div>
          ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <img src={selectedPizza.src} alt="pizza" className="modal-img" />
            <h1>{selectedPizza.name}</h1>
            <p>{selectedPizza.description}</p>
            <h4>{selectedPizza.price}</h4>
            <button className="proceed-btn" onClick={handleOrder}>
              Order Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
