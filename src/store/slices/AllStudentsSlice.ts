import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from '../../api/Api';
import { StudentType } from '../../types/index.dto';
import { LoadingStatus } from '../../types/types';
import { SliceDataType } from '../types';

export const getAllStudents = createAsyncThunk('students', async () => {
  const response = await Api.student.getAll();
  return response;
});

export const createStudent = createAsyncThunk(
  'students/createStudent',
  async (student: StudentType, { rejectWithValue }) => {
    const response = await Api.student.createStudent(student as StudentType);

    if (!response.statusText) {
      return rejectWithValue("Can't add mentor. Server error.");
    }

    return response.data;
  }
);

interface StateType {
  allStudents: SliceDataType<StudentType[]>;
  createStudent: SliceDataType<StudentType | null>;
}

const initialState: StateType = {
  allStudents: {
    loading: LoadingStatus.idle,
    result: [],
    error: null,
  },
  createStudent: {
    loading: LoadingStatus.idle,
    result: null,
    error: null,
  }
};

const StudentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllStudents.pending, (state) => {
      state.allStudents.loading = LoadingStatus.pending;
    });
    builder.addCase(getAllStudents.fulfilled, (state, action) => {
      state.allStudents.loading = LoadingStatus.succeeded;
      state.allStudents.result = action.payload;
    });
    builder.addCase(getAllStudents.rejected, (state, action) => {
      state.allStudents.loading = LoadingStatus.failed;
      state.allStudents.error = action.error;
    });
    builder.addCase(createStudent.pending, (state) => {
      state.createStudent.loading = LoadingStatus.pending;
    });
    builder.addCase(createStudent.fulfilled, (state, action) => {
      state.createStudent.loading = LoadingStatus.succeeded;
      state.createStudent.result = action.payload;
    });
    builder.addCase(createStudent.rejected, (state, action) => {
      state.createStudent.loading = LoadingStatus.failed;
      state.createStudent.error = action.error;
    });
  },
});

export const root = StudentSlice.actions;

export default StudentSlice.reducer;
