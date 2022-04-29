import { BackendError } from '../../shared/types/backend-error.interface';
import { CurrentUser } from '../../shared/types/current-user.interface';

export interface AuthState {
  isSubmitting: boolean;
  currentUser: CurrentUser | null;
  isLoggedIn: boolean;
  validationErrors: BackendError | null;
}
