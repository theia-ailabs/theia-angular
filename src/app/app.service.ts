import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AppService {

  theiaUrl = 'https://6707-212-31-49-235.eu.ngrok.io/theia';

  constructor(private http: HttpClient) { }

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