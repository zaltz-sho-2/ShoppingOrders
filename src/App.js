import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header';
import HomePage from './pages/homePage';
import CheckoutPage from './pages/CheckoutPage';
import NewOrderPage from './pages/newOrderPage';
import OrdersListPage from './pages/ordersListPage';

import './App.css'

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ordersummary" element={<CheckoutPage />} />
        <Route path="/new-order" element={<NewOrderPage />} />
        <Route
          path="/orders"
          element={
            <OrdersListPage
              customerEmail={location.state?.customerEmail} 
            />
          }
        />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
