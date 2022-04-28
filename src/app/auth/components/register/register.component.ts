import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/types/app-state.interface';
import { BackendErrors } from 'src/app/shared/types/backend-errors.interface';
import { registerAction } from '../../store/actions/register.actions';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';

@Component({
  selector: 'gamus-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  isSubmitting$: Observable<boolean> = this.store.pipe(select(isSubmittingSelector));
  backendErrors$: Observable<BackendErrors | null> = this.store.pipe(select(validationErrorsSelector));

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  get username() {
    return this.form.get('username');
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid);

    this.store.dispatch(registerAction({ request: this.form.value }));
  }
}
