import { Component, signal } from '@angular/core';
import {HeaderComponent} from './header/header.components';
import {User} from './user/user';
import {DUMMY_USERS} from './dummy-users';
import {Tasks} from './tasks/tasks';
@Component({
  imports: [HeaderComponent, User, Tasks],
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
