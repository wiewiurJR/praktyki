import { Component, signal } from '@angular/core';
import {HeaderComponent} from './header/header.components';
import {User} from './user/user';
import {DUMMY_USERS} from './dummy-users';
import {Tasks} from './tasks/tasks';
@Component({
  imports: [HeaderComponent, User, Tasks],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',

})
export class App {
  users = DUMMY_USERS;

  onSelectUser(id: string){
    console.log(`selected user with ${id}`);
  }
}
