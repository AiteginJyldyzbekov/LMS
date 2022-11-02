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

export interface mentorsPageAdmin {
  name: string,
  id: number,
  surname: string,
  number: number,
  mail: string,
  age: number,
  point: number,
  price: number,
  date: string
}
