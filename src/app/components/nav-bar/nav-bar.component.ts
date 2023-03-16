import { Component } from '@angular/core';
import { DivsService } from './injection';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
  constructor(private divsService: DivsService) { }

  showDiv(divNumber: number) {
    this.divsService.setCurrentDiv(divNumber);
  }
}
