import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-todo-root',
    templateUrl: './todo-root.component.html',
    styleUrls: ['./todo-root.component.scss']
})
export class TodoRootComponent implements OnInit {

    hideList = false;
    hideEdit = true;
    hideInfo = true;

    constructor() {
    }

    ngOnInit() {
    }

    showList() {
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
        this.hideList = true;
        this.hideEdit = true;
        this.hideInfo = false;
    }
}
