import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

export interface Message {
  author: string;
  message: string;
  datetime: string;
}

@Component({
  selector: 'app-message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.css'],
  providers: [AppService]
})

export class MessageAreaComponent implements OnInit {

  textSound = this.service.textSound;
  soundMessages: Message[];
  userMessage: string;
  messages: Message[];

  constructor(public service: AppService) {
    this.textSound = "";
    this.soundMessages = [];
    this.messages = [];
    this.userMessage = "";
    this.service.init();
  }

  ngOnInit(): void {
    this.startService();
  }

  startService() {
    this.service.start()
  }

  stopService() {
    this.service.stop()
  }

  addMessage(): void {
    console.log(this.userMessage);
    const msg: Message = {
      author: 'User',
      message: this.userMessage,
      datetime: 'datetime'
    }
    this.messages.push(msg);
    console.log(this.messages);
  }


  addSoundMessage(): void {
    const smsg: Message = {
      author: 'Theia',
      message: this.textSound,
      datetime: 'datetime'
    }
    this.soundMessages.push(smsg);
  }

}