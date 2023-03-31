import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  animate,
  style,
} from '@angular/animations';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css'],
  animations: [
    trigger('fadeAnimation', [
      state(
        'visible',
        style({
          opacity: 1,
        })
      ),
      transition(':leave', [
        animate(
          '0.3s',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class WelcomeScreenComponent implements OnInit {
  appService: AppService;
  lang: string;
  loader = true;

  constructor() {
    this.appService = new AppService();
    this.lang = this.appService.lang;
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.loading();
    }, 12000);
  }

  public connect(): void {
    document.getElementById('myLoader').classList.add('hidden');
    document.getElementById('myBackground').classList.add('hidden');
    document.getElementById('display').classList.remove('hidden');
  }

  public loading(): void {
    document.getElementById('circle').classList.add('hidden');
    document.getElementById('connect-btn').classList.remove('hidden');
  }
}
