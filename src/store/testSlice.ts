import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TextState = {
  text: string;
};

const initialState: TextState = {
  text: 'hello',
};
const todoSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    addText(state, action: PayloadAction<string>) {
      state.text += action.payload;
    },
  },
});

export const { addText } = todoSlice.actions;

export default todoSlice.reducer;
