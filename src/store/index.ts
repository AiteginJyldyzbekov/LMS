import { configureStore } from '@reduxjs/toolkit';
import studentSlice from './slices/AllStudentsSlice';
import AuthSlice from './slices/AuthSlice';
import GroupSlice from './slices/GroupSlice';
import rootSlice from './slices/RootSlice';
import MentorsSlice from './slices/MentorSlice';

const store = configureStore({
  reducer: {
    root: rootSlice,
    auth: AuthSlice,
    group: GroupSlice,
    mentors: MentorsSlice,
    student: studentSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
