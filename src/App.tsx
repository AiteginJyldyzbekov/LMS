import React from 'react';
import { useAppDispatch, useAppSelector } from './hook';
import { addText } from './store/testSlice';

const App = () => {
  const dispatch = useAppDispatch();

  const txt = useAppSelector((state) => state.test.text);

  const handleChangeText = () => {
    const test: string = 'world';
    dispatch(addText(test));
  };

  const btn = React.createElement(
    'button',
    { type: 'button', onClick: handleChangeText },
    'ClickHere'
  );
  return (
    <div className="App">
      {btn}
      <h2>{txt}</h2>
    </div>
  );
};

export default App;
