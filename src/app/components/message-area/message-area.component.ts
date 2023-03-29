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
  appService: AppService;
  lang: string;
  placeholder: string;
  userMessage: string;
  messages: Message[];

  constructor(public service: AppService) {
    this.appService = new AppService();
    this.lang = this.appService.lang;
    this.placeholder = this.appService.langs[this.lang].input;
    this.userMessage = '';
    this.messages = this.appService.messages;
  }

  ngOnInit(): void {
    return;
  }

  inputMessage(): void {
    const msg: Message = {
      author: 'Recorder',
      message: this.userMessage,
      datetime: getDate() + ' ' + getTime(),
    };
    this.appService.addMessage(msg);
  }
}
