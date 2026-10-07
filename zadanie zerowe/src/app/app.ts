import { Component } from '@angular/core';
import {DUMMY_USERS} from './dummy-users';


@Component({
  standalone: false,
  selector: 'app-root',
  styleUrl: 'app.css',
  templateUrl: './app.html',

})
export class App {
  users = DUMMY_USERS;
selectedUserId?: string;


get SelectedUser(){
  return this.users.find(user=>user.id===this.selectedUserId)!;
}

  onSelectUser(id: string){
   this.selectedUserId=id;
  }
}
