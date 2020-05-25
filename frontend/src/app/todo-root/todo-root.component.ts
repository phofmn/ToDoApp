import {Component, OnInit} from '@angular/core';
import {TasksService} from "../tasks/tasks.service";

@Component({
    selector: 'app-todo-root',
    templateUrl: './todo-root.component.html',
    styleUrls: ['./todo-root.component.scss']
})
export class TodoRootComponent implements OnInit {

    hideList = false;
    hideEdit = true;
    hideInfo = true;

    constructor(private taskService: TasksService) {
    }

    ngOnInit() {
    }


    get callShowList() {
        return this.showList.bind(this);
    }

    get callShowEdit() {
        return this.showEdit.bind(this);
    }

    get callShowInfo() {
        return this.showInfo.bind(this);
    }

    showList() {
        this.taskService.shareTask({id: null, description: '', date: '', progress: null});
        this.hideList = false;
        this.hideEdit = true;
        this.hideInfo = true;
    }

    showEdit() {
        this.hideList = true;
        this.hideEdit = false;
        this.hideInfo = true;
    }

    showInfo() {
        this.taskService.shareTask({id: null, description: '', date: '', progress: null});
        this.hideList = true;
        this.hideEdit = true;
        this.hideInfo = false;
    }
}
