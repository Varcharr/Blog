import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommentService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.apiUrl + "comment/";

  fetchCommentData(commentId): Observable<any> {
    return this.http.get(this.baseUrl + commentId);
  }
  createComment(comment: any): Observable<any> {
    return this.http.post(this.baseUrl + "create", comment);
  }
  updateComment(comment: any): Observable<any> {
    return this.http.post(this.baseUrl + "update", comment);
  }
  deleteComment(commentId: string): Observable<any> {
    return this.http.delete(this.baseUrl + commentId);
  }
}
