import {Component, inject, Input, input, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TasksService} from '../tasks.service';


@Component({
  imports: [FormsModule],
  selector: 'app-add-task',
  styleUrl: './add-task.css',
  templateUrl: './add-task.html',
})
export class AddTask {
  @Input({required: true}) userId!: string;

close= output<void>();

enteredTtile = '';
enteredSummary='';
enteredDate='';

private taskService= inject(TasksService);

  onCancel(){
  this.close.emit();
  }


onSubmit(){
    this.taskService.addTask({
      title: this.enteredTtile,
      summary: this.enteredSummary,
      date: this.enteredDate
    },
      this.userId);
    this.close.emit();
}


}
