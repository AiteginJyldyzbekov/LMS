import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from '../../api/Api';
import { StudentType } from '../../types/index.dto';
import { LoadingStatus } from '../../types/types';
import { SliceDataType } from '../types';

export const getAllStudents = createAsyncThunk('students', async () => {
  const response = await Api.student.getAll();
  return response;
});

const initialState: SliceDataType<StudentType> = {
  loading: LoadingStatus.idle,
  result: [],
  error: null,
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllStudents.pending, (state) => {
      state.loading = LoadingStatus.pending;
    });
    builder.addCase(getAllStudents.fulfilled, (state, action) => {
      state.loading = LoadingStatus.succeeded;
      state.result = action.payload;
    });
    builder.addCase(getAllStudents.rejected, (state, action) => {
      state.loading = LoadingStatus.failed;
      state.error = action.error;
    });
  },
});

export const root = studentSlice.actions;

export default studentSlice.reducer;
