import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'

export class BaseService<T> {
    protected endpoint: string

    constructor(protected http: HttpClient, resourcePath: string) {
        this.endpoint = environment.apiURL + resourcePath
    }

    get url(){
        return this.endpoint;
    }
    
    getAll(): Observable<T> {
        return this.http.get<T>(`${this.endpoint}`)
    }
}