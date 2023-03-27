import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import services from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  loading: boolean = true;

  constructor() { }

  async ngOnInit(): Promise<void> {
    await services.askRecord();
    await services.askTheia('hello');
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}