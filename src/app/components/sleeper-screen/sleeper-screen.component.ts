import { Component, OnInit } from '@angular/core';

declare const particlesJS: any;

@Component({
  selector: 'app-sleeper-screen',
  templateUrl: './sleeper-screen.component.html',
  styleUrls: ['./sleeper-screen.component.css']
})
export class SleeperScreenComponent implements OnInit {

  timeoutId: any;

  ngOnInit(): void {
    this.invokeParticles();
    this.startTimer();
    window.addEventListener('keypress', this.resetTimer.bind(this));
    window.addEventListener('mouseclick', this.resetTimer.bind(this));
  }

  startTimer() {
    this.timeoutId = setTimeout(this.showSleepScreen.bind(this), 50000);
  }

  resetTimer() {
    clearTimeout(this.timeoutId);
    this.hideSleepScreen();
    this.startTimer();
  }

  showSleepScreen() {
    this.hidePageContent();
    // Mostrar la pantalla de "sleep"
  }

  hideSleepScreen() {
    document.getElementById("nav-bar").style.opacity = '1';
    document.getElementById("main-display").style.opacity = '1';
    document.getElementById('sleeper').classList.add('hidden');
    // Ocultar la pantalla de "sleep"
  }

  hidePageContent() {
    document.getElementById("nav-bar").style.opacity = '0';
    document.getElementById("main-display").style.opacity = '0';
    document.getElementById('sleeper').classList.remove('hidden');
    // Ocultar el contenido de la página
  }
  public invokeParticles(): void {
    particlesJS.load('particles-js', './../assets/js/particles.json', function () { });
  }
}

