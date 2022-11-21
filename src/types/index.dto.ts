export interface GroupType {
  id: number;
  createdAd: string;
  name: string;
  direction: string;
  startDate: Date;
  quantity: number;
  duration: number;
  mentor: string;
  days: string | [];
  status: string;
}

export interface studentType {
  createdAt: string;
  name: string;
  avatar_name: string;
  phone_number: string;
  email: string;
  age: number;
  price: number;
  start_date: Date;
  status: string;
  password: string;
  direction: string;
  group: string;
  id: number;
}

export interface AllStudentsType {
  id: string | number;
  department: string;
  groupName: string;
  name: string;
  number: string | number;
  mail: string;
  age: number;
  point: number;
}
