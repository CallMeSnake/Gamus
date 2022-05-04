import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
