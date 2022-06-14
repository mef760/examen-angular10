import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Album } from 'src/app/core/interfaces/album';
import { BaseService } from 'src/app/core/services/base.service';

@Injectable({
    providedIn: 'root'
})
export class AlbumListPageService extends BaseService<Album[]>{

    constructor(protected http: HttpClient) {
        super(http, 'user')
    }

    getAlbums(userId:number) {
        const url = `${super.url}/${userId}/albums`;
        return this.http.get<Album[]>(url).pipe(
            map((data: Album[]) => {
              return data;
            }), catchError( error => {
              return throwError('Something went wrong!');
            })
         )
    }
}
