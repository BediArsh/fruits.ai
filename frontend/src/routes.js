import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/Auth/LoginPage';
import HomePage from './components/Home/HomePage';
import ChatbotPage from './components/Chatbot/ChatbotPage';
import FAQPage from './components/FAQ/FAQPage';
import AboutPage from './components/About/AboutPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/chatbot" element={<ChatbotPage />} />
    <Route path="/faq" element={<FAQPage />} />
    <Route path="/about" element={<AboutPage />} />
  </Routes>
);

export default AppRoutes;
