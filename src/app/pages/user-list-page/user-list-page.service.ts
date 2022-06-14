import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from 'src/app/core/interfaces/user';
import { BaseService } from 'src/app/core/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class UserListPageService extends BaseService<User[]>{
    constructor(protected http: HttpClient) {
        super(http, 'users')
    }

    getUsers() {
        return this.getAll().pipe(
            map((data: User[]) => {
              return data;
            }), catchError( error => {
              return throwError( 'Something went wrong!' );
            })
         )
    }
}
