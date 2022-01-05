export interface PersonModel {
  id: number;
  firstName: string;
  lastName: string;
  nickName: string;
  avatar: string;
  isOnline: boolean;
  hasSubscription: boolean;
  showName: boolean;
  about?: string;
}
