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


  async askForRecordingPermission(): Promise<void> {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      console.log('Permission granted for recording.');
      // Do something with the stream, such as recording it or displaying it in a video element.
    } catch (error) {
      console.error('Permission denied for recording:', error);
      // Handle the error, such as showing a message to the user or disabling the recording feature.
    }
  }

  async ngOnInit(): Promise<void> {
    await this.askForRecordingPermission();
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}