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

  loader = true;

  constructor() { }

  public ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS.load('particles-js', 'assets/particles.json', function () { });
  }

  public connect(): void {
    document.getElementById('myLoader').classList.add('hidden');
    document.getElementById('myBackground').classList.add('hidden');
    document.getElementById('display').classList.add('block');

  }
}