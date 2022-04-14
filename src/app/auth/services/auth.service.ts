import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUser } from 'src/app/shared/types/current-user.interface';
import { RegisterRequest } from '../types/register-request.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../types/auth-response.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  register(data: RegisterRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/auth/signup';
    // return this.http.post<AuthResponse>(url, data).pipe(map((response: AuthResponse) => response.user));
    return this.http.post<CurrentUser>(url, data);
  }
}
