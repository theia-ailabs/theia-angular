import { Injectable } from '@angular/core';
import { Message } from './types';
import { VoiceRec } from './services/voiceRec';
import { getDate, getTime } from './utils';
import { getLang } from './services/getLang';
import { langs } from './langs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  langs: object;
  lang: string;
  username: string;
  messages: Message[];

  constructor() {
    this.langs = langs;
    this.lang = 'es';
    this.username = 'Alex';
    this.messages = [];
  }

  ngOnInit() {
    const speechRec = new VoiceRec();
    const audioMsg = speechRec.start();
    this.voiceMsg(audioMsg);
  }

  voiceMsg(audioMsg: string): void {
    const msg: Message = {
      author: 'Recorder',
      message: audioMsg,
      datetime: getDate() + ' ' + getTime(),
    };
    this.messages.push(msg);
  }

  addMessage(message: Message) {
    this.messages.push(message);
  }

  init() {}
}
