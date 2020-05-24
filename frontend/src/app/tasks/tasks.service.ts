import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    list = [];
    url = 'http://localhost:300/api/tasks/';

    constructor(private http: HttpClient) {
    }

    public getTaks() {
        return this.http.get(this.url).toPromise().then(data => console.log(data));
    }
}
