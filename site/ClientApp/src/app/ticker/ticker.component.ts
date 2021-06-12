import {Component, OnDestroy, OnInit, RenderComponentType} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

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

export class TickerComponent implements OnInit, OnDestroy {
  DOGE_PRICE_URL = "/doge";
  private _dogePrice: DogePrice;
  private onDestroy$ = new Subject<void>();

  getPrice() {
    return this._dogePrice;
  }

  constructor(private http: HttpClient) {
  }

  getDogePrice(): Observable<DogePrice> {
    console.log("getting data from " + this.DOGE_PRICE_URL)
    return this.http.get<DogePrice>(this.DOGE_PRICE_URL)
  }

  ngOnInit() {
    this.getDogePrice()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((x: DogePrice) => {
        console.log("Doge price: " + "/r/n" + x.ticker);
        this._dogePrice = x;
      })
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }
}
