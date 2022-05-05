import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendError } from '../../../shared/types/backend-error.interface';
import { loginAction } from '../../store/actions/login-actions';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/auth.selectors';

@Component({
  selector: 'gamus-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  isSubmitting$: Observable<boolean> = this.store.pipe(select(isSubmittingSelector));
  backendError$: Observable<BackendError | undefined> = this.store.pipe(select(validationErrorsSelector));

  constructor(private fb: FormBuilder, private store: Store) {}

  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid);

    this.store.dispatch(loginAction({ request: this.form.value }));
  }
}
