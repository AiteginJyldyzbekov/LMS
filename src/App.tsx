import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
import LoginPage from './pages/loginpage/Loginpage';

const App: React.FC = () => (
  <Routes>
    {/* <Route path="/" element={<HomePage />} /> */}
    <Route path='/' element={<LoginPage />} />
  </Routes>
);

export default App;
