import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DivsService {
    currentDiv = 1;

    setCurrentDiv(divNumber: number) {
        this.currentDiv = divNumber;
    }
}
