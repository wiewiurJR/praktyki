import {Component, Input, output} from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.css']
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

