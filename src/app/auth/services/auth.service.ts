import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginRequest } from '../types/login-request.interface';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { CurrentUser } from '../../shared/types/current-user.interface';
import { RegisterRequest } from '../types/register-request.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  register(data: RegisterRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/auth/signup';
    return this.http.post<CurrentUser>(url, data);
  }
  login(data: LoginRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/auth/signin';
    return this.http.post<CurrentUser>(url, data);
  }
  getCurrentUser(): Observable<CurrentUser> {
    const url = environment.apiUrl + '/test/user';
    return this.http.get<CurrentUser>(url);
  }
}
