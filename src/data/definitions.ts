export interface Shop {
  id: number; // Must be number to match your data
  name: string;
  brgy: string;
  type: string;
  contact: string;
  lat: number;
  lng: number;
  openTime: number;
  closeTime: number;
  workDays: number[];
}