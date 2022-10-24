import './App.scss';
import React from 'react';
import useRoutes from './hooks/useRoutes';

const App: React.FC = () => {
  const routes = useRoutes();

  return <div>{routes}</div>;
};

export default App;
