import { Injectable } from '@angular/core';
import { Message } from './types';
import { VoiceRec } from './services/voiceRec';
import { getDate, getTime } from './utils';
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
    this.lang = 'en';
    this.username = 'Alex';
    this.messages = [];
  }

  async ngOnInit() {
    await this.getLang();
    const speechRec = new VoiceRec();
    const audioMsg = speechRec.start();
    this.voiceMsg(audioMsg);
  }

  async getLang() {
    const response = await fetch(
      'https://api.ipregistry.co/?key=0nxj6f90k9nup0j3'
    );
    const payload = await response.json();
    this.lang = payload.location.language.code;
    return payload.location.language.code;
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
