import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isPending: boolean;
  isAuth: boolean;
  // TODO: replace type with BE responce
  data: null | {
    email?: string;
    role: string;
    token?: string;
  };
  error: null;
}

// TODO: remove after auth logic
const role = localStorage.getItem('role');
const initialState: AuthState = {
  isPending: false,
  isAuth: true,
  // TODO: remove object when BE side will be ready
  data: {
    email: 'lms@gmail.com',
<<<<<<< HEAD
    role: 'student',
=======
    role: role || 'admin',
>>>>>>> 0afb27b54938dccd2fb692aab8bf9212df69ebd9
    token: '',
  },
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      state.data = { ...state.data, role: action.payload };
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
