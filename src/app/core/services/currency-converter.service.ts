import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  constructor(private http: HttpClient) { }

  getAvailableCurrencies(): Observable<string[]>{
    return this.http.get(environment.rateExchangeApi).pipe(map((result: any) => Object.keys(result.rates)));
  }

  convert(amount: number, fromCurrency: string, toCurrency: string): Observable<number>{
    const apiUrl = `${environment.rateExchangeApi}?base=${fromCurrency}`;
    return this.http.get(apiUrl).pipe(
      map((result: any) => {
        return result.rates[toCurrency] * amount;
      })
    );
  }
}
