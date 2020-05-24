import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from "../tasks/tasks.service";

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
    description = '';
    date = '';
    progress: number;
    id: string;


    @Input() showEdit: any;
    @Input() showList: any;

    constructor(private taskService: TasksService) {
    }

    ngOnInit() {
        this.taskService.currentTask.subscribe(task => {
            const taskArray = Object.values(task);
            this.id = taskArray[0];
            this.description = taskArray[1];
            this.date = taskArray[2];
            this.progress = taskArray[3];
        });
    }

    submitTask() {
        const nTask = {
            description: this.description,
            date: this.date,
            progress: this.progress
        };
        if (this.id) {
            this.taskService.changeTask(nTask, this.id).subscribe(data => {
                this.taskService.shareTask({id: null, description: '', date: '', progress: null});
                this.showList();
            });
        } else {
            this.taskService.addTask(nTask).subscribe(data => {
                this.taskService.shareTask({id: null, description: '', date: '', progress: null});
                this.showList();
            });
        }

    }



}
