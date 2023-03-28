import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { VoiceRec } from '../../services/voiceRec';
import { getDate, getTime } from '../../utils';
import { Message } from '../../types';

@Component({
  selector: 'app-message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.css'],
  providers: [AppService]
})

export class MessageAreaComponent implements OnInit {

  userMessage: string;
  messages: Message[];

  constructor(public service: AppService) {
    this.messages = [];
    this.userMessage = "";
  }

  async ngOnInit(): Promise<void> {
    const speechRec = new VoiceRec();
    const audioMsg = await speechRec.start();
    this.voiceMsg(audioMsg);
  }

  voiceMsg(audioMsg: string): void {
    const msg: Message = {
      author: 'Recorder',
      message: audioMsg,
      datetime: getDate() + ' ' + getTime()
    }
    this.messages.push(msg);
  }

  inputMessage(): void {
    const msg: Message = {
      author: 'User',
      message: this.userMessage,
      datetime: getDate() + ' ' + getTime()
    }
    this.messages.push(msg);
    this.userMessage = '';
    console.log(this.messages);
  }

}