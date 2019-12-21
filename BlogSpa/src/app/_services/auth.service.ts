import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(
  private http: HttpClient
  ) { }

  baseUrl = "http://localhost:5000/api/auth/";
  jwtHelper = new JwtHelperService();
  decodedToken: any;


  login(model: any): Observable<any> {
    return this.http.post(this.baseUrl + 'login', model)
    .pipe(
      map((res: any) => {
        const user = res;
        if(user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          console.log(this.decodedToken);
          
        }
      })
      );
  }
  register(model: any): Observable<any> {
    return this.http.post(this.baseUrl + 'register', model);
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
  logout() {
    localStorage.removeItem('token');
  }
}
