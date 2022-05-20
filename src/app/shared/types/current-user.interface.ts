import { AboutUser } from './backend-user.interface';

export interface CurrentUser {
  user: AboutUser;
  accessToken: string | null;
}
