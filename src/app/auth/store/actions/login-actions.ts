import { createAction, props } from '@ngrx/store';

import { BackendError } from '../../../shared/types/backend-error.interface';
import { CurrentUser } from '../../../shared/types/current-user.interface';
import { LoginRequest } from '../../types/login-request.interface';
import { ActionTypes } from '../action-types';

export const loginAction = createAction(ActionTypes.LOGIN, props<{ request: LoginRequest }>());
export const loginSuccessAction = createAction(ActionTypes.LOGIN_SUCCESS, props<{ currentUser: CurrentUser }>());
export const loginFailureAction = createAction(ActionTypes.LOGIN_FAILURE, props<{ errors: BackendError }>());

export const logoutAction = createAction(ActionTypes.LOGOUT);
