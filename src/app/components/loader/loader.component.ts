import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

declare var particlesJS: any;

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  animations: [
    trigger('fadeAnimation', [
      state('visible', style({
        opacity: 1
      })),
      transition(':leave', [
        animate('0.3s', style({
          opacity: 0
        }))
      ])
    ])
  ]
})

export class LoaderComponent implements OnInit {

  welcome = true;

  constructor() { }

  public ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS.load('particles-js', 'assets/particles.json', function () { });
  }

  public connect(): void {
    this.welcome = false;
  }
}