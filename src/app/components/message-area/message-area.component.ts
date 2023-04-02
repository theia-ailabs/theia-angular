import { Component, OnInit, HostListener } from '@angular/core';
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
  send: boolean;

  constructor(public service: AppService) {
    this.appService = new AppService();
    this.lang = this.appService.lang;
    this.placeholder = this.appService.langs[String(this.lang)].input;
    this.userMessage = '';
    this.messages = this.appService.messages;
    this.send = false;
  }

  ngOnInit(): void {
    document.getElementById('span_input').innerHTML = this.placeholder;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (document.getElementById('span_input').textContent == this.placeholder) {
      document.getElementById('span_input').textContent = '';
    }
    this.userMessage = document.getElementById('span_input').textContent;
    if (event.key === 'Enter') {
      if (this.send) {
        console.log(this.userMessage);
        this.inputMessage();
      }
      this.send = false;
      return;
    }
    if (
      event.key === 'Control' ||
      event.key === 'Shift' ||
      event.key === 'Alt' ||
      event.key === 'Meta'
    ) {
      this.send = true;
      return;
    } else {
      this.send = false;
    }
  }

  inputMessage(): void {
    if (!this.userMessage) return;
    const msg: Message = {
      author: 'User',
      message: this.userMessage || this.service.voiceMsg['message'],
      datetime: getDate() + ' ' + getTime(),
    };
    this.appService.addMessage(msg);
    this.userMessage = '';
    document.getElementById('span_input').textContent = this.placeholder;
    window.scrollTo(
      document.body.scrollHeight,
      window.screen.availHeight - 120
    );
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
