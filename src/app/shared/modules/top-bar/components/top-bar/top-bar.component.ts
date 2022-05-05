import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CurrentUser } from 'src/app/shared/types/current-user.interface';
import { currentUserSelector, isAnonymousSelector, isLoggedInSelector } from '../../../../../auth/store/auth.selectors';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean> = this.store.pipe(select(isLoggedInSelector));
  isAnonymous$: Observable<boolean> = this.store.pipe(select(isAnonymousSelector));
  currentUser$: Observable<CurrentUser | undefined | null> = this.store.pipe(select(currentUserSelector));

  money: number = 0;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.money = this.random;
  }

  get random() {
    return Math.floor(Math.random() * 100) + 1;
  }
}
