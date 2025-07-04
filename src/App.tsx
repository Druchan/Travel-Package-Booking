import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PackageDetail from './components/PackageDetail';
import BookingForm from './components/BookingForm';
import ConfirmationPage from './components/ConfirmationPage';
import BookingHistory from './components/BookingHistory';
import AdminPage from './components/AdminPage';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages" element={<HomePage />} />
          <Route path="/package/:id" element={<PackageDetail />} />
          <Route path="/booking/:id" element={<BookingForm />} />
          <Route path="/confirmation/:id" element={<ConfirmationPage />} />
          <Route path="/booking-history" element={<BookingHistory />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;