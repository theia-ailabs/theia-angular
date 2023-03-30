import { Component } from '@angular/core';
import { getSeconds } from '../../utils';

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

  constructor() {
    this.audio = new Audio('../../../assets/sounds/Welcome.mp3');
  }

  ngOnInit(): void {}

  toTalk(audio: AudioBuffer | HTMLAudioElement = this.audio) {
    this.talking = true;
    this.listening = false;
    this.sleeping = false;
    this.audio.play();
    setTimeout(() => {
      this.toListen();
    }, getSeconds(audio) * 1000);
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
