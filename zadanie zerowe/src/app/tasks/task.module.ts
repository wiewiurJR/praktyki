import {NgModule} from '@angular/core';
import {AddTask} from './add-task/add-task';
import {Task} from './task/task';
import {Tasks} from './tasks';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    Tasks,
    Task,
    AddTask
  ],
  exports: [Tasks],
  imports: [SharedModule, FormsModule, CommonModule]
})
export class TaskModule{

}
