import { configureStore } from '@reduxjs/toolkit';
import AllStudentsSlice from './slices/AllStudentsSlice';
import AuthSlice from './slices/AuthSlice';
import GroupSlice from './slices/GroupSlice';
import rootSlice from './slices/RootSlice';

const store = configureStore({
  reducer: {
    root: rootSlice,
    auth: AuthSlice,
    group: GroupSlice,
    allStudents: AllStudentsSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
