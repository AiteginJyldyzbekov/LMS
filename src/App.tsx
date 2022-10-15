import './App.scss';
import React from 'react';
import { Routes } from 'react-router-dom';
import useRoutes from './hooks/useRoutes';

const App: React.FC = () => {
  const routes = useRoutes();

  return <Routes>{routes}</Routes>;
};

export default App;
