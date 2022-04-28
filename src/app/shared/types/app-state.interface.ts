import { AUTH_STATE_SELECTOR } from '../../auth/store/selectors';
import { AuthState } from '../../auth/types/auth-state.interface';

export interface AppState {
  [AUTH_STATE_SELECTOR]: AuthState;
}
