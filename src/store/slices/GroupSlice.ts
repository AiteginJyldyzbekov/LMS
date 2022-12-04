import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from '../../api/Api';
import { GroupType } from '../../types/index.dto';
import { LoadingStatus } from '../../types/types';
import { SliceDataType } from '../types';

export const getAllGroups = createAsyncThunk('group/getAllGroups', async () => {
  const response = await Api.group.getAll();
  return response;
});

export const getGroup = createAsyncThunk(
  'group/getGroup',
  async (id: string) => {
    const responce = await Api.group.get(id);
    return responce;
  }
);

export const createGroup = createAsyncThunk(
  'groups/createGroup',
  async (group: GroupType, { rejectWithValue }) => {
    const response = await Api.group.createGroup(group as GroupType);

    if (!response.statusText) {
      return rejectWithValue("Can't add mentor. Server error.");
    }

    return response.data;
  }
);

interface StateType {
  groups: SliceDataType<GroupType[]>;
  detailGroup: SliceDataType<GroupType | null>;
  createGroup: SliceDataType<GroupType | null>;
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
  createGroup: {
    loading: LoadingStatus.idle,
    result: null,
    error: null,
  },
};

const GroupSlice = createSlice({
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
    builder.addCase(getGroup.pending, (state) => {
      state.detailGroup.loading = LoadingStatus.pending;
    });
    builder.addCase(getGroup.fulfilled, (state, action) => {
      state.detailGroup.loading = LoadingStatus.succeeded;
      state.detailGroup.result = action.payload;
    });
    builder.addCase(getGroup.rejected, (state, action) => {
      state.detailGroup.loading = LoadingStatus.failed;
      state.detailGroup.error = action.error;
    });
    builder.addCase(createGroup.pending, (state) => {
      state.createGroup.error = null;
    });
    builder.addCase(createGroup.fulfilled, (state, action) => {
      state.createGroup.result = action.payload;
    });
  },
});

export const root = GroupSlice.actions;

export default GroupSlice.reducer;
