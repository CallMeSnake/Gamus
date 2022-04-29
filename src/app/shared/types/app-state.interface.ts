import { AUTH_STATE_SELECTOR } from '../../auth/store/auth.selectors';
import { AuthState } from '../../auth/types/auth-state.interface';

export interface AppState {
  [AUTH_STATE_SELECTOR]: AuthState;
}
