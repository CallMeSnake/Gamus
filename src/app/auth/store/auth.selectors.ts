import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from '../types/auth-state.interface';

export const AUTH_STATE_SELECTOR = 'auth';

export const authFeatureSelector = createFeatureSelector<AuthState>(AUTH_STATE_SELECTOR);
export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isSubmitting
);
export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.validationErrors
);
export const isLoggedInSelector = createSelector(authFeatureSelector, (authState: AuthState) => authState.isLoggedIn);
export const currentUserSelector = createSelector(authFeatureSelector, (authState: AuthState) => authState.currentUser);
export const usernameSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.currentUser?.user.username
);
