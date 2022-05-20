import { UserData } from './backend-user.interface';

export interface CurrentUser {
  user: UserData;
  accessToken: string | null;
}
