export interface Person {
  name: string;
  lastName: string;
  nickName: string;
  avatar: string;
  status: boolean; //online or offline
  subscribe: boolean; //premium user
  showName: boolean; //show name and last name or show nick name
  about?: string; //abaut of person
}
