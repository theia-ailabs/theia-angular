import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { getDate, getTime } from '../../utils';
import { Message } from '../../types';

@Component({
  selector: 'app-input-msg',
  templateUrl: './input-msg.component.html',
  styleUrls: ['./input-msg.component.css'],
})
export class InputMsgComponent {
  appService: AppService;
  lang: string;
  placeholder: string;
  userMessage: string;
  messages: Message[];

  constructor(public service: AppService) {
    this.appService = new AppService();
    this.lang = this.appService.lang;
    this.placeholder = this.appService.langs[String(this.lang)].input;
    this.userMessage = '';
    this.messages = this.appService.messages;
  }

  ngOnInit(): void {
    return;
  }

  inputMessage(): void {
    const msg: Message = {
      author: 'User',
      message: this.userMessage || this.service.voiceMsg['message'],
      datetime: getDate() + ' ' + getTime(),
    };
    this.appService.addMessage(msg);
  }
}
