import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/shared/types/app-state.interface';
import { AuthState } from '../types/auth-state.interface';

export const authFeatureSelector = (state: AppState): AuthState => state.auth;
export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isSubmitting
);
