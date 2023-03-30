import { Component } from '@angular/core';
import { DivsService } from './injection';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  appService: AppService;
  username: string;

  constructor(private divsService: DivsService) {
    this.appService = new AppService();
    this.username = this.appService.username;
  }

  scrollTop(): void {
    window.scrollTo(document.body.scrollHeight, 0);
  }
}
