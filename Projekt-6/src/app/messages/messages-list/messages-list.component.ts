import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {MessagesService} from "../messages.service";
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  imports: [
    AsyncPipe
  ],
  styleUrl: './messages-list.component.css'
})
export class MessagesListComponent {
private messagesService = inject(MessagesService);
messages$ = this.messagesService.allMessages;



  get debugOutput()
    {
      console.log('[MessagesList] "debugOutput" binding re-evaluated.');
      return 'MessagesList Component Debug Output';
    }
}
