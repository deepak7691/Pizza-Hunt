import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import OrderDetails from './components/OrderDetails'




import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import Cart from './components/Cart'
import PaymentPage from './components/PaymentPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/payment" element={<PaymentPage/>} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cart" element={<Cart/>} />

      </Routes>
      <Footer/>

    </BrowserRouter>
  )
}

export default App