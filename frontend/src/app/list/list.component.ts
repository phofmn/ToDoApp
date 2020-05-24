import {Component, OnInit} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {TasksService} from '../tasks/tasks.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    tasks = [];

    constructor(private taskService: TasksService) {
    }

    ngOnInit() {
        console.log(this.taskService.getTaks());
    }

    edit() {

    }

    deleteEntry() {

    }

}
