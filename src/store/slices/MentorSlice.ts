import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from '../../api/Api';
import { MentorType } from '../../types/index.dto';
import { LoadingStatus } from '../../types/types';
import { SliceDataType } from '../types';

export const getMentors = createAsyncThunk('students', async () => {
  const response = await Api.mentor.getAll();
  return response;
});

const initialState: SliceDataType<MentorType> = {
  loading: LoadingStatus.idle,
  result: [],
  error: null,
};

const mentorSlice = createSlice({
  name: 'mentors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMentors.pending, (state) => {
      state.loading = LoadingStatus.pending;
    });
    builder.addCase(getMentors.fulfilled, (state, action) => {
      state.loading = LoadingStatus.succeeded;
      state.result = action.payload;
    });
    builder.addCase(getMentors.rejected, (state, action) => {
      state.loading = LoadingStatus.failed;
      state.error = action.error;
    });
  },
});

export const root = mentorSlice.actions;

export default mentorSlice.reducer;
