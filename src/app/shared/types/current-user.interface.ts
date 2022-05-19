import { BackendUser } from './backend-user.interface';

export interface CurrentUser {
  user: BackendUser;
  accessToken: string | null;
}
