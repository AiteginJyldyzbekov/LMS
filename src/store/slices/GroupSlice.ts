import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from '../../api/Api';
import { GroupType } from '../../types/index.dto';
import { LoadingStatus } from '../../types/types';
import { SliceDataType } from '../types';

export const getAllGroups = createAsyncThunk('group/getAllGroups', async () => {
  const response = await Api.group.getAll();
  return response;
});

interface StateType {
  groups: SliceDataType<GroupType[]>;
  detailGroup: SliceDataType<GroupType | null>;
}
const initialState: StateType = {
  groups: {
    loading: LoadingStatus.idle,
    result: [],
    error: null,
  },
  detailGroup: {
    loading: LoadingStatus.idle,
    result: null,
    error: null,
  },
};

const authSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGroups.pending, (state) => {
      state.groups.loading = LoadingStatus.pending;
    });
    builder.addCase(getAllGroups.fulfilled, (state, action) => {
      state.groups.loading = LoadingStatus.succeeded;
      state.groups.result = action.payload;
    });
    builder.addCase(getAllGroups.rejected, (state, action) => {
      state.groups.loading = LoadingStatus.failed;
      state.groups.error = action.error;
    });
  },
});

export const root = authSlice.actions;

export default authSlice.reducer;
