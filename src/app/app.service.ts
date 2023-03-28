import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare let webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})

export class AppService {

  theiaUrl = 'https://6707-212-31-49-235.eu.ngrok.io/theia';

  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public textSound = "";
  tempWords!: string;

  constructor(private http: HttpClient) { }


  init() {
    this.recognition.interimResults = true;
    this.recognition.lang = 'es';

    this.recognition.addEventListener('result', (e: { results: Iterable<unknown> | ArrayLike<unknown>; }) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
      console.log(transcript);
    });
  }

  start() {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log("Speech recognition started")
    this.recognition.addEventListener('end', () => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        console.log("End speech recognition")
      } else {
        this.wordConcat()
        this.recognition.start();
      }
    });
  }
  stop() {
    this.isStoppedSpeechRecog = true;
    this.wordConcat()
    this.recognition.stop();
    console.log("End speech recognition")
  }

  wordConcat() {
    this.textSound = this.textSound + ' ' + this.tempWords + '.';
    this.tempWords = '';
  }

  askTheia(question: string) {
    let body = { 'question': question };
    if (!question) {
      body.question = 'welcome';
    }
    const json = JSON.stringify(body);
    this.http
      .post<any>(this.theiaUrl, json)
      .subscribe((res) => console.log(res))
    return this.http.post(this.theiaUrl, body);
  }
}