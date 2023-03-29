import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  animate,
  style,
} from '@angular/animations';
import { AppService } from '../../app.service';

declare const particlesJS: any;

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
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
export class LoaderComponent implements OnInit {
  appService: AppService;
  lang: string;
  loader = true;

  constructor() {
    this.appService = new AppService();
    this.lang = this.appService.lang;
  }

  public ngOnInit(): void {
    this.invokeParticles();
    setTimeout(() => {
      this.loading();
    }, 10000);
  }

  public invokeParticles(): void {
    particlesJS.load('particles-js', 'assets/particles.json', function () {});
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
