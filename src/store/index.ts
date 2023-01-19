import { configureStore } from '@reduxjs/toolkit';
import StudentSlice from './slices/AllStudentsSlice';
import AuthSlice, { authActions } from './slices/AuthSlice';
import GroupSlice from './slices/GroupSlice';
import rootSlice from './slices/RootSlice';
import MentorSlice from './slices/MentorSlice';
import DirectionSlice from './slices/DirectionSlice';

const store = configureStore({
  reducer: {
    root: rootSlice,
    auth: AuthSlice,
    group: GroupSlice,
    mentor: MentorSlice,
    student: StudentSlice,
    direction: DirectionSlice,
  },
});

export default store;

const setRole = (arg: string) => {
  store.dispatch(authActions.setRole(arg));
};
// @ts-ignore
window.setRole = setRole;

store.subscribe(() => {
  const state = store.getState();
  if (state.auth.data?.role) {
    localStorage.setItem('role', state.auth.data?.role);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
