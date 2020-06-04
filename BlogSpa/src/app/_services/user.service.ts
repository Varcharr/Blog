///////////////////////////
// Poglavlje 3.11 - Servisi
//////////////////////////
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.apiUrl + "user/";

  getUser(id: string): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }
}
