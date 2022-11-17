export interface GroupType {
  id: number;
  createdAd: string;
  name: string;
  direction: string;
  start_date: Date;
  quantity: number;
  duration: number;
  mentor: string;
  days: string | [];
}
