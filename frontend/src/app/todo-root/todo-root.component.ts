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
