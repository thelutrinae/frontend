import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  private currentMessage = 0;
  private loadingMessages: Array<string> = [
    'Loading',
    'Still loading',
    'Something must be wrong',
    'Try reloading the page'
  ];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.currentMessage < this.loadingMessages.length - 1) {
        this.currentMessage++;
      }

    }, 3000);
  }

  private setMessage() {
    console.log(this.loadingMessages);
    if (this.currentMessage !== this.loadingMessages.length) {
      this.currentMessage++;
    }
  }

  get message() {
    return this.loadingMessages[this.currentMessage];
  }

}
