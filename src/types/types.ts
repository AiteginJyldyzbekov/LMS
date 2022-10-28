
export enum UserRole {
  admin = 'admin',
  mentor = 'mentor',
  student = 'student',
}

export interface SideBarLink {
  title: string;
  Icon: any;
  puth: string;
  id: number;
}