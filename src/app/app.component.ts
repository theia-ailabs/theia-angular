import { Component, OnInit } from '@angular/core';
import services from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  async ngOnInit(): Promise<void> {
    // await services.askRecord();
    // await services.askTheia('hello');
  }
}
