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

export interface IDays {
  id: number;
  name: string;
}
