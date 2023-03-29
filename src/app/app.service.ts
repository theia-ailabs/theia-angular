import { Injectable } from '@angular/core';
import { Message } from './types';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  messages: Message[] = [];

  constructor() {}

  init() {}
}
