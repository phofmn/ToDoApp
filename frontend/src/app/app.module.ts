import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';
import {InfoComponent} from './info/info.component';
import {HttpClientModule} from '@angular/common/http';
import {TodoRootComponent} from './todo-root/todo-root.component';
import {TasksService} from './tasks/tasks.service';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        EditComponent,
        InfoComponent,
        TodoRootComponent
    ],
    imports: [
        BrowserModule, HttpClientModule
    ],
    providers: [TasksService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
