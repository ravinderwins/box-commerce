import { Injectable } from '@angular/core';
import { CurrencyConversionForm } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  LOCALSTORAGE_UNITS_CONVERSIONS_KEY: string = 'UnitsConversionsData';

  constructor() { }

  storeUserConversions(data: CurrencyConversionForm[]){
    localStorage.setItem(this.LOCALSTORAGE_UNITS_CONVERSIONS_KEY, JSON.stringify(data));
  }

  getUserConversions(){
    let data = localStorage.getItem(this.LOCALSTORAGE_UNITS_CONVERSIONS_KEY);
    if(data) return JSON.parse(data);
    return [];
  }

}
