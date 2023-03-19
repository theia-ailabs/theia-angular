import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})

export class LoaderComponent implements OnInit {
  public ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS.load('particles-js', 'assets/particles.json', function () { });
  }
}