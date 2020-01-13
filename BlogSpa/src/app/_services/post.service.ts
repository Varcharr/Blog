import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.apiUrl + "post/";

  getPost(id: string): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }
  getTopPost(): Observable<any> {
    return this.http.get(this.baseUrl + "topposts");
  }
  createPost(post: any): Observable<any> {
    return this.http.post(this.baseUrl + "create", post);
  }
  updatePost(post: any): Observable<any> {
    return this.http.post(this.baseUrl + "update", post);
  }
}
