import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as dotenv from "dotenv";


@Injectable({
  providedIn: 'root'
})

export class AppService {

  rootUrl = 'https://2bfe-212-31-49-235.eu.ngrok.io/' + 'welcome';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.rootUrl);
  }
}