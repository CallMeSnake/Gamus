import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/auth/store/action-types';
import { RegisterRequest } from 'src/app/auth/types/register-request.interface';
import { CurrentUser } from 'src/app/shared/types/current-user.interface';
import { BackendErrors } from 'src/app/shared/types/backend-errors.interface';

export const registerAction = createAction(ActionTypes.REGISTER, props<{ request: RegisterRequest }>());

export const registerSuccessAction = createAction(ActionTypes.REGISTER_SUCCESS, props<{ currentUser: CurrentUser }>());

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE, props<{ errors: BackendErrors }>());
