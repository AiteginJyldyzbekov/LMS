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

export interface MentorType {
  createdAt: string;
  name: string;
  direction: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  status: string;
  password: string;
  id: number;
}
