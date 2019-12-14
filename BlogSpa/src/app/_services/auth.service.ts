import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(
  private http: HttpClient
  ) { }

  baseUrl = "http://localhost:5000/api/auth/";
  login(model: any): Observable<any> {
    return this.http.post(this.baseUrl + 'login', model)
    .pipe(
      map((res: any) => {
        const user = res;
        if(user) {
          localStorage.setItem('token', user.token);
        }
      })
      );
  }
  register(model: any): Observable<any> {
    return this.http.post(this.baseUrl + 'register', model);
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout() {
    localStorage.removeItem('token');
  }
}
