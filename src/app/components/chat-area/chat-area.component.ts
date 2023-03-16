import { Component } from '@angular/core';
import { DivsService } from '../nav-bar/injection';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css']
})
export class ChatAreaComponent {
  constructor(public divsService: DivsService) { }
}
