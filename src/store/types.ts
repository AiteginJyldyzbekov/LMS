import { SerializedError } from '@reduxjs/toolkit';
import { LoadingStatus } from '../types/types';

export interface SliceDataType<T> {
  loading: LoadingStatus;
  result: T;
  pagination?: {
    current: number;
    totalPages: number;
    pageSize: number;
  };
  error: null | SerializedError;
}
