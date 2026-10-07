import { Component, Input } from '@angular/core';
import {TasksService} from './tasks.service';
@Component({

  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
  standalone: false,
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
