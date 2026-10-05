import {Component, Output, computed, Input, input, output, EventEmitter} from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-user',
  templateUrl: '/user.html',
  styleUrls: ['/user.css']
})
export class User {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
 // @Output() select = new EventEmitter();
select = output<string>();
get imgPath(){
  return `assets/users/${this.avatar}`;
}
  onSelectUser(){
this.select.emit(this.id);
}

}

