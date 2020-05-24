import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from '../tasks/tasks.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    tasks = [];

    @Input() showList: any;
    @Input() showEdit: any;

    constructor(private taskService: TasksService) {
        this.fetchList();
    }

    ngOnInit() {
    }

    edit(task) {
        this.taskService.shareTask(task);
        this.showEdit();
    }

    fetchList() {
        this.tasks = this.taskService.getTasks();
    }

    deleteEntry(task) {
        this.taskService.deleteTask(task).subscribe(data => {
            console.log(data);
            this.fetchList();
            this.showList();

        });

    }

}
