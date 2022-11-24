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

export interface StudentType {
  createdAt: string;
  name: string;
  avatar_name: string;
  phoneNumber: string;
  email: string;
  age: number;
  price: number;
  start_date: Date;
  status: string;
  password: string;
  direction: string;
  group: string;
  id: number;
  point: number | string;
}
