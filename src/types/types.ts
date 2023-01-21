export enum UserRole {
  admin = 'admin',
  mentor = 'mentor',
  student = 'student',
}

export interface SideBarLink {
  title: string;
  Icon: any;
  path: string;
  id: number;
}

export interface IInfo {
  id: number;
  title: string;
  dataItem: string;
}

export interface IDays {
  id: number;
  name: string;
}

export interface GroupInfo {
  id: number;
  title: string;
  information: string;
}

export interface ApiError {
  status?: number | string;
  message: string;
  type?: string;
}

export enum LoadingStatus {
  idle = 'idle',
  pending = 'pending',
  succeeded = 'succeeded',
  failed = 'failed',
}

export type Loading =
  | LoadingStatus.idle
  | LoadingStatus.failed
  | LoadingStatus.succeeded
  | LoadingStatus.failed;
export interface IStack {
  techName: string;
  completedPercent: number;
}
