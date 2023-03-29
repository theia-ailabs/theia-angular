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
  lang: string;
  userMessage: string;
  messages: Message[];
  appService: AppService;
  placeholder: string;

  constructor(public service: AppService) {
    this.appService = new AppService();
    this.lang = this.appService.lang;
    this.userMessage = '';
    this.messages = this.appService.messages;
    this.placeholder = this.appService.langs[this.lang].input;
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
