import { Component, NgModule } from '@angular/core';
import { AppService } from 'src/app/app.service';

interface Message {
  author: string;
  message: string;
  datetime: string;
}

@Component({
  selector: 'app-message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.css']
})

export class MessageAreaComponent {

  userMessage: string;
  messages: Message[];
  serverMessages: Message[]; // mensajes recibidos del servidor

  constructor(private appService: AppService) {
    this.messages = [];
    this.userMessage = "";
    this.serverMessages = [];
  }

  addMessage(): void {
    console.log(this.userMessage);
    const msg: Message = {
      author: 'bot',
      message: this.userMessage,
      datetime: 'datetime'
    }
    this.messages.push(msg);
    console.log(this.messages);
  }
}