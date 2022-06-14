import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Post } from 'src/app/core/interfaces/post';
import { BaseService } from 'src/app/core/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class PostListPageService extends BaseService<Post[]>{

    constructor(protected http: HttpClient) {
        super(http, 'user')
    }

    getPosts(userId:number) {
        const url = `${super.url}/${userId}/posts`;
        return this.http.get<Post[]>(url).pipe(
            map((data: Post[]) => {
              return data;
            }), catchError( error => {
              return throwError('Something went wrong!');
            })
         )
    }

    getComments(postId:number) {
      const url = `${super.url}/${postId}/comments`;
        return this.http.get<Comment[]>(url).pipe(
            map((data: Comment[]) => {
              return data;
            }), catchError( error => {
              return throwError('Something went wrong!');
            })
         )
    }
}
