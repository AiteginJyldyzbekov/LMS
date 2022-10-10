import React from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hook';
import { addText } from './store/testSlice';

const App = () => {
  const txt = useAppSelector((state) => state.test.text);
  const dispatch = useAppDispatch();

  const handleChangeText = () => {
    dispatch(addText('world'));
  };

  return (
    <div className="App">
      <button type="button" onClick={handleChangeText}>
        Click
      </button>
      <h2>{txt}</h2>
      Hello LMS
    </div>
  );
};

export default App;
