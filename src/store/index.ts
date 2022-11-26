import { configureStore } from '@reduxjs/toolkit';
import StudentSlice from './slices/AllStudentsSlice';
import AuthSlice from './slices/AuthSlice';
import GroupSlice from './slices/GroupSlice';
import rootSlice from './slices/RootSlice';
import MentorSlice from './slices/MentorSlice';

const store = configureStore({
  reducer: {
    root: rootSlice,
    auth: AuthSlice,
    group: GroupSlice,
    mentor: MentorSlice,
    student: StudentSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
