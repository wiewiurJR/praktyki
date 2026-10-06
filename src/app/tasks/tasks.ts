import { Component, Input } from '@angular/core';
import {required} from '@angular/forms/signals';
import {Task} from './task/task';
import {AddTask} from './add-task/add-task';
import {TasksService} from './tasks.service';
@Component({
  imports: [
    Task,
    AddTask
  ],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name?: string;
  isAddingTask = false;

  constructor(private taskService: TasksService) {
  }

  get selectedUserTask() {
    return this.taskService.getUserTasks(this.userId);
  }
  onStartAddTask(){
    this.isAddingTask = true;
  }
  onCancelAddTask(){
    this.isAddingTask = false;
  }




}
