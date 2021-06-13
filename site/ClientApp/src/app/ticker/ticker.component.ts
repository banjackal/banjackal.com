import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject, Subscription} from "rxjs";

interface DogePrice {
  at: number
  ticker: {
    buy: string
    sell: string
    low: string
    high: string
    last: string
    vol: string
  }
}

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})

export class TickerComponent {
  DOGE_PRICE_URL = "/doge";
  _dogePrice: DogePrice;

  constructor(private http: HttpClient) {
  }

  getDogePrice() {
      this.http.get<DogePrice>(this.DOGE_PRICE_URL)
      .subscribe(result => {
        console.log(result)
        this._dogePrice = result;
      }, error => console.error(error))
  }
}
