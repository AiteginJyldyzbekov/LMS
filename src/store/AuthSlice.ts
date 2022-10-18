import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isPending: boolean;
  // TODO: replace type with BE responce
  data: null | {
    email: string;
    role: string;
    token: string;
  };
  error: null;
}

const initialState: AuthState = {
  isPending: false,
  // TODO: remove object when BE side will be ready
  data: {
    email: 'lms@gmail.com',
    role: 'admin',
    token: '',
  },
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const root = authSlice.actions;

export default authSlice.reducer;
