import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import services from './services';
import { disableCursor } from '@fullcalendar/core/internal';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //@ViewChild('welcomeScreen', { static: true })
  //welcomeScreen: ElementRef<WelcomeScreenComponent>;
  connected: boolean;
  button = document.getElementById('connect-btn');

  constructor() {
    this.connected = false;
  }

  connect() {
    // Inicia el efecto de zoom
    // this.welcomeScreen.nativeElement.startZoomEffect();

    // Navega a la página principal después de un tiempo
    //setTimeout(() => {; // Asegúrate de cambiar '/main-page' por la ruta correcta de tu página principal
    //}, 3000); // Ajusta la duración según sea necesario
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
