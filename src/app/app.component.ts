import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  loading: boolean = true;

  constructor() { }

  @Output() updateSphereGeometry = new EventEmitter();

  onAudioPlay() {
    this.updateSphereGeometry.emit();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}