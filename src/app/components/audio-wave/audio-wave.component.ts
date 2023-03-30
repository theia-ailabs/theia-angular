import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
// import TimelinePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js';
// import Regions from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';

@Component({
  selector: 'app-audio-wave',
  templateUrl: './audio-wave.component.html',
  styleUrls: ['./audio-wave.component.css'],
})
export class AudioWaveComponent implements OnInit, AfterViewInit {
  wave: WaveSurfer = null;
  url = '../../assets/sounds/Welcome.mp3';
  public graph = undefined;
  isPlaying: boolean;
  pause: boolean;

  constructor(private cdr: ChangeDetectorRef) {
    this.generateWaveform();
    this.isPlaying = false;
    this.pause = false;
  }
  ngAfterViewInit(): void {}
  ngOnInit(): void {}

  onPlay(): void {
    this.isPlaying = true;
    this.cdr.detectChanges();
    Promise.resolve().then(() => this.wave.load(this.url));
    this.pause = false;
  }

  onStopPressed(): void {
    this.pause = true;
    this.wave.stop();
  }

  generateWaveform(): void {
    this.pause = false;
    Promise.resolve(null).then(() => {
      this.wave = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple',
        plugins: [
          // TimelinePlugin.create({
          //   container: '#wave-timeline',
          // }),
          // Regions.create({
          //   // regions: [
          //   //   {
          //   //     start: 1,
          //   //     end: 3,
          //   //     loop: false,
          //   //     color: 'hsla(400, 100%, 30%, 0.5)',
          //   //   },
          //   //   {
          //   //     start: 5,
          //   //     end: 7,
          //   //     loop: false,
          //   //     color: 'hsla(200, 50%, 70%, 0.4)',
          //   //   },
          //   // ],
          //   dragSelection: {
          //     slop: 5,
          //   },
          // }),
        ],
      });

      this.wave.on('ready', () => {
        // alert("I'm ready");
        this.pause = false;
        this.wave.play();
      });
    });
  }
}
