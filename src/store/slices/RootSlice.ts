import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type RootState = {
  name: string;
};

const initialState: RootState = {
  name: '',
};

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    root(state, action: PayloadAction<string>) {
      state.name += action.payload;
    },
  },
});

export const root = rootSlice.actions;

export default rootSlice.reducer;
