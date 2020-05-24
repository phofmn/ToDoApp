import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class TasksService {
    tasks = [];
    url = 'http://localhost:300/api/tasks/';

    private taskSource = new BehaviorSubject<object>({});
    currentTask = this.taskSource.asObservable()

    constructor(private http: HttpClient) {
    }

    public getTasks() {
        this.tasks = [];
        this.http.get(this.url).toPromise().then(data => {
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    this.tasks.push(data[key]);
                }
            }

        });
        return this.tasks;
    }

    public deleteTask(task): Observable<any> {
        return this.http.delete(`${this.url}${task._id}`);
    }

    public addTask(task): Observable<any> {
        return this.http.post(this.url, task);
    }

    public changeTask(task, taskId): Observable<any> {
        return this.http.patch(`${this.url}${taskId}`, task);
    }

    public shareTask(t: any) {
        this.taskSource.next(t);
    }

}
