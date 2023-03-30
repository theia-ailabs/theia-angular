import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js';
// import Regions from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';
import { audioMS } from '../../utils';

@Component({
  selector: 'app-audio-wave',
  templateUrl: './audio-wave.component.html',
  styleUrls: ['./audio-wave.component.css'],
})
export class AudioWaveComponent implements OnInit, AfterViewInit {
  public graph;
  wave: WaveSurfer;
  audio: HTMLAudioElement;
  url: string;
  isPlaying: boolean;
  ms: number;

  constructor(private cdr: ChangeDetectorRef) {
    this.url = '../../assets/sounds/Welcome.mp3';
    this.audio = new Audio(this.url);
    this.ms = audioMS(this.audio);
    console.log(this.ms);
    this.isPlaying = false;
    this.generateWaveform();
    this.onPlay();
  }
  ngAfterViewInit(): void {
    Promise.resolve().then(() => this.wave.load(this.url));
  }
  ngOnInit(): void {}

  async onPlay(): Promise<void> {
    this.isPlaying = true;
    this.wave.play();
    this.cdr.detectChanges();
    setTimeout(() => {
      this.onStop();
    }, this.ms);
  }

  onStop(): void {
    this.isPlaying = false;
    this.wave.stop();
  }

  async generateWaveform(): Promise<void> {
    await Promise.resolve(null).then(() => {
      this.wave = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple',
        height: '30',
        barGap: '10',
        barHeight: '20',
        plugins: [
          TimelinePlugin.create({
            container: '#wave-timeline',
          }),
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
      // this.wave.on('ready', () => {
      //   // alert("I'm ready");
      //   this.pause = false;
      //   this.wave.play();
      // });
    });
  }
}
