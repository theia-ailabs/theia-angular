import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-loader',
  templateUrl: './text-loader.component.html',
  styleUrls: ['./text-loader.component.css']
})
export class TextLoaderComponent implements OnInit {
  ngOnInit() {
    let i = 1;
    const intervalId = setInterval(() => {
      const div = document.getElementById(`appear${i}`);
      if (div) {
        div.style.display = 'block';
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 3000);
  }
}

