import React, { useState, useEffect } from 'react';
import '../App.css';

import { pizzas } from '../data';
import Header from './Header';

import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Home() {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredPizza, setFilteredPizza] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [counter, setCounter] = useState(0);


  useEffect(() => {
    const filterPizza = () => {
      const filteredItems = pizzas.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredPizza(filteredItems);
    };

    const delayDebounce = setTimeout(() => {
      filterPizza();
    }, 300);

    return () => {
      clearTimeout(delayDebounce);
    };
  }, [searchText]);

  const handleCardClick = (pizza) => {
    setSelectedPizza(pizza);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedPizza(null);
    setShowModal(false);
  };


  const handleAddToCart = () => {
    setCartItems((prevItems) => [...prevItems, selectedPizza]);
    setCounter((prev) => prev + 1)
    handleCloseModal();
  };

console.log("counterValue", counter)


  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} cartItems={cartItems} counter={counter} setCounter={setCounter}/>
      <div className="flexbox">
        {filteredPizza.map((item) => (
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
            <h4>₹ {selectedPizza.price}</h4>
             
              <Button className="add-to-cart-btn"   onClick={handleAddToCart} variant="contained" endIcon={<ShoppingCartIcon  />}>
                Add To Cart
              </Button>
            
          </div>
        </div>
      )}



    </>
  );
}

export default Home;
