import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent implements OnInit {
  DogeCoinPrice: any;

  constructor() {
    this.DogeCoinPrice = 'Fetching Price...'
  }

  ngOnInit() {
  }

}
