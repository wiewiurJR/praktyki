import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App} from './app';
import {HeaderComponent} from './header/header.components';
import {User} from './user/user';
import {SharedModule} from './shared/shared.module';
import {TaskModule} from './tasks/task.module';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    User,
  ],
  bootstrap: [App],
  imports: [BrowserModule, SharedModule, TaskModule],
})
export class AppModule {

}
