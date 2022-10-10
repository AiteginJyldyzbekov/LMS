import { configureStore } from '@reduxjs/toolkit';
import rootSlice from './RootSlice';

const store = configureStore({
  reducer: {
    root: rootSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
