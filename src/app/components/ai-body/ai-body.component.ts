import { Component } from '@angular/core';
import { getSeconds, getDate, getTime } from '../../utils';
import { Message } from '../../types';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-ai-body',
  templateUrl: './ai-body.component.html',
  styleUrls: ['./ai-body.component.css'],
})
export class AiBodyComponent {
  listening: boolean = true;
  talking: boolean = false;
  sleeping: boolean = false;
  audio: HTMLAudioElement;
  appService: AppService;

  constructor() {
    this.audio = new Audio('../../../assets/sounds/Welcome.mp3');
    this.appService = new AppService();
  }

  ngOnInit(): void {}

  toTalk(audio: AudioBuffer | HTMLAudioElement = this.audio) {
    const miliseconds = getSeconds(audio) * 1000;
    this.talking = true;
    this.listening = false;
    this.sleeping = false;
    this.audio.play();
    const msg: Message = {
      author: 'Theia',
      message: 'Bienvenido a Theia',
      datetime: getDate() + ' ' + getTime(),
    };
    this.appService.addMessage(msg);
    setTimeout(() => {
      this.toListen();
    }, miliseconds);
  }

  toListen() {
    this.listening = true;
    this.talking = false;
    this.sleeping = false;
    this.audio.pause();
  }

  toSleep() {
    this.sleeping = true;
    this.listening = false;
    this.talking = false;
  }
}
