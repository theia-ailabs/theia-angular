import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor() {
    this.messages = [];
    this.userMessage = "";
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