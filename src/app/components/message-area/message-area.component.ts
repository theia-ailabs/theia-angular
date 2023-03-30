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
    this.placeholder = this.appService.langs[String(this.lang)].input;
    this.userMessage = '';
    this.messages = this.appService.messages;
  }

  ngOnInit(): void {}

  inputMessage(): void {
    if (!this.userMessage) return;
    const msg: Message = {
      author: 'User',
      message: this.userMessage || this.service.voiceMsg['message'],
      datetime: getDate() + ' ' + getTime(),
    };
    this.appService.addMessage(msg);
    this.userMessage = '';
    window.scrollTo(document.body.scrollHeight, window.screen.availHeight - 80);
    setTimeout(() => {
      const theia: Message = {
        author: 'Theia',
        message:
          'Hello, Im Theia your AI assistant. Im here to help you in anything you need. Im a advance trained NLP model with also access to google, wikipedia, youtube, spotify, gmail, calendar, and much more. I can make your life easier. How can I help you?',
        datetime: getDate() + ' ' + getTime(),
      };
      this.appService.addMessage(theia);
    }, 2000);
  }
}
