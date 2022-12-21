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
  students: [];
}

export interface MentorType {
  id?: number;
  createdAt?: string;
  name: string;
  direction: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  status: string;
  password: string;
}

export interface StudentType {
  createdAt: string;
  name: string;
  avatar_name: string;
  phoneNumber: string;
  email: string;
  age: number;
  price: number;
  startDate: Date;
  status: string;
  password: string;
  direction: string;
  group: string;
  id: number;
  point: number | string;
}

export interface DirectionType {
  createdAt?: string;
  name: string;
  studentQuantity: number;
  groupQuantity: number;
  id: string;
}
