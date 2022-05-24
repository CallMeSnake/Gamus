import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { environment } from '../../../../../../environments/environment';
import { logoutAction } from '../../../../../auth/store/actions/login-actions';
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
  usernameSelector,
} from '../../../../../auth/store/auth.selectors';
import { CurrentUser } from '../../../../types/current-user.interface';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean> = this.store.pipe(select(isLoggedInSelector));
  isAnonymous$: Observable<boolean> = this.store.pipe(select(isAnonymousSelector));
  currentUser$: Observable<CurrentUser | undefined> = this.store.pipe(select(currentUserSelector));
  username$: Observable<string | undefined> = this.store.pipe(select(usernameSelector));

  money: number = 0;

  homePage = environment.homePage;
  registerPage = `${this.homePage}/register`;
  loginPage = `${this.homePage}/login`;

  get random() {
    return Math.floor(Math.random() * 100) + 1;
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.money = this.random;
  }

  onLogout() {
    this.store.dispatch(logoutAction());
  }
}
