import { Component, OnInit } from '@angular/core';

declare const particlesJS: any;


@Component({
  selector: 'app-sleeper-screen',
  templateUrl: './sleeper-screen.component.html',
  styleUrls: ['./sleeper-screen.component.css']
})
export class SleeperScreenComponent implements OnInit {

  ngOnInit(): void {
    this.invokeParticles();
    setTimeout(() => {
      this.timeToSleep();
    }, 40000);
  }

  public invokeParticles(): void {
    particlesJS.load('particles-js', 'assets/particles.json', function () { });
  }

  public timeToSleep(): void {
    document.getElementById('sleeper').classList.remove('hidden');
  }

  public timeToWork(): void {
    document.getElementById('sleeper').classList.add('hidden');
  }
}
