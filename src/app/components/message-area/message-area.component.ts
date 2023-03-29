import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { getDate, getTime } from '../../utils';
import { Message } from '../../types';

@Component({
  selector: 'app-message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.css'],
  providers: [AppService],
})
export class MessageAreaComponent implements OnInit {
  userMessage: string;
  messages: Message[];

  constructor(public service: AppService) {
    this.messages = [];
    this.userMessage = '';
  }

  ngOnInit(): void {
    return;
  }

  inputMessage(): void {
    const msg: Message = {
      author: 'User',
      message: this.userMessage,
      datetime: getDate() + ' ' + getTime(),
    };
    this.messages.push(msg);
    this.userMessage = '';
    console.log(this.messages);
  }
}
