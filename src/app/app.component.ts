import { Component, OnInit } from '@angular/core';
import services from './services';
import { disableCursor } from '@fullcalendar/core/internal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  connected: boolean;
  button = document.getElementById('connect-btn');

  constructor() {
    this.connected = true;
  }

  connect() {
    this.connected = true;
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading();
    }, 12000);

  }

  public loading(): void {
    document.getElementById('loader-ai').classList.add('hidden');
    document.getElementById('connect-btn').classList.remove('hidden');
  }
}