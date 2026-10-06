import {Component, EventEmitter, inject, Input, Output, output} from '@angular/core';
import {Card} from '../../shared/card/card';
import {DatePipe} from "@angular/common";
import {TasksService} from "../tasks.service";
interface Taskcomponent {
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string,

};


@Component({
  imports: [
    Card,
    DatePipe
  ],
  selector: 'app-task',
  styleUrl: './task.css',
  templateUrl: './task.html',
})
export class Task {
  @Input({required:true}) task!: Taskcomponent;

  private taskService=inject(TasksService)


  onCompleteTask(){
this.taskService.removeTask(this.task.id)  }


}
