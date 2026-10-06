import {Component, Output, computed, Input, input, output, EventEmitter} from '@angular/core';
import {Card} from '../shared/card/card';

@Component({
  standalone: true,
  selector: 'app-user',
  templateUrl: '/user.html',
  imports: [
    Card
  ],
  styleUrls: ['/user.css']
})
export class User {

  @Input({required: true}) user!:{
    id:string,
    avatar:string,
    name:string
  }
  @Input({required:true}) selected!:boolean;

 // @Output() select = new EventEmitter();
select = output<string>();
get imgPath(){
  return `assets/users/${this.user.avatar}`;
}
  onSelectUser(){
this.select.emit(this.user.id);
}

}

