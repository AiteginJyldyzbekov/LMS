import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';
import rootSlice from './RootSlice';

const store = configureStore({
  reducer: {
    root: rootSlice,
    auth: AuthSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
