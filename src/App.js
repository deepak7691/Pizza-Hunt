import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import OrderPage from './components/OrderPage'
import PaymentPage from './components/PaymentPage'
import OrderDetails from './components/OrderDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order/:id" element={<OrderDetails />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App