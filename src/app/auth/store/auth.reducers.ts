import { Action, createReducer, on } from '@ngrx/store';
import { AuthState } from '../types/auth-state.interface';

import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from './actions/get-current-user.action';
import { loginAction, loginFailureAction, loginSuccessAction, logoutAction } from './actions/login-actions';
import { registerAction, registerFailureAction, registerSuccessAction } from './actions/register.actions';

const initialState: AuthState = {
  isSubmitting: false,
  isLoading: false,
  isLoggedIn: false,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: undefined,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),

  on(loginAction, (state): AuthState => ({ ...state, isSubmitting: true, validationErrors: undefined })),
  on(
    loginSuccessAction,
    (state, action): AuthState => ({ ...state, isSubmitting: true, currentUser: action.currentUser, isLoggedIn: true })
  ),
  on(
    loginFailureAction,
    (state, action): AuthState => ({ ...state, isSubmitting: false, validationErrors: action.errors })
  ),

  on(logoutAction, (): AuthState => ({ ...initialState })),

  on(getCurrentUserAction, (state): AuthState => ({ ...state, isLoading: true })),
  on(
    getCurrentUserSuccessAction,
    (state, action): AuthState => ({ ...state, isLoading: false, isLoggedIn: true, currentUser: action.currentUser })
  ),
  on(
    getCurrentUserFailureAction,
    (state): AuthState => ({ ...state, isLoading: false, isLoggedIn: false, currentUser: undefined })
  )
);
export function reducer(state: AuthState, action: Action) {
  return authReducer(state, action);
}
