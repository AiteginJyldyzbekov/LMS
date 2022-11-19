import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from '../../api/Api';
import { GroupType } from '../../types/index.dto';
import { LoadingStatus } from '../../types/types';
import { SliceDataType } from '../types';

export const getAllGroups = createAsyncThunk('group/getAllGroups', async () => {
  const response = await Api.group.getAll();
  return response;
});

const initialState: SliceDataType<GroupType> = {
  loading: LoadingStatus.idle,
  result: [],
  error: null,
};

const authSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGroups.pending, (state) => {
      state.loading = LoadingStatus.pending;
    });
    builder.addCase(getAllGroups.fulfilled, (state, action) => {
      state.loading = LoadingStatus.succeeded;
      state.result = action.payload;
    });
    builder.addCase(getAllGroups.rejected, (state, action) => {
      state.loading = LoadingStatus.failed;
      state.error = action.error;
    });
  },
});

export const root = authSlice.actions;

export default authSlice.reducer;
