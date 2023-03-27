import { Component } from '@angular/core';
import { DivsService } from '../nav-bar/injection';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css']
})
export class ChatAreaComponent {
  constructor() { }

  ngOnInit(): void {
    const audio = document.getElementById('myAudio') as HTMLAudioElement;
    audio.addEventListener('play', toTalk);
    audio.addEventListener('pause', toSleep);

    function toTalk() {
      document.getElementById('base').classList.add('hidden');
      document.getElementById('talking').classList.remove('hidden');
    }

    function toSleep() {
      document.getElementById('talking').classList.add('hidden');
      document.getElementById('base').classList.remove('hidden');
    }
  }
}
