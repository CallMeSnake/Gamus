export interface Person {
  name: string;
  lastName: string;
  nickName: string;
  avatar: string;
  isOnline: boolean; //online or offline
  hasSubscribe: boolean; //premium user
  showName: boolean; //show name and last name or show nick name
  about?: string; //about of person
}
