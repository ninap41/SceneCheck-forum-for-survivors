import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, retry, map } from "rxjs/operators";
import { Post } from "../models/post";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  baseUrl: string = "http://localhost:3000";
  currentPage: string;
  data;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(
    private http: HttpClient,
    private router_: Router,
    private route: ActivatedRoute
  ) {
    console.log(router_);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError("Something bad happened; please try again later.");
  }

  public async getPosts(): Promise<any> {
    var data = await this.http
      .get(this.baseUrl + "/posts/all")
      .toPromise()
      .then((result) => {
        return result;
      });
    this.data = data;
    return this.data;
  }

  public createPost(post: Post): Observable<any> {
    var url = this.baseUrl + "/api/create";
    return this.http
      .post<any>(url, post, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public deletePost(post: Post): Observable<any> {
    var url = this.baseUrl + `/api/delete/${post._id}`;
    return this.http
      .post<any>(url, post, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
