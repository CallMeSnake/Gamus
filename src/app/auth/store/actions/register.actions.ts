import { createAction, props } from '@ngrx/store';

import { BackendError } from '../../../shared/types/backend-error.interface';
import { CurrentUser } from '../../../shared/types/current-user.interface';
import { RegisterRequest } from '../../types/register-request.interface';
import { ActionTypes } from '../action-types';

export const registerAction = createAction(ActionTypes.REGISTER, props<{ request: RegisterRequest }>());

export const registerSuccessAction = createAction(ActionTypes.REGISTER_SUCCESS, props<{ currentUser: CurrentUser }>());

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE, props<{ errors: BackendError }>());
