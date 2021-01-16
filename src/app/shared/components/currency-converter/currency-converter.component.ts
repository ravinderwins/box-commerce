import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { debounce } from 'lodash';
//Service
import { CurrencyConverterService } from '@app/services';
import { CurrencyConversionForm } from '@app/models';

@Component({
  selector: 'currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
})
export class CurrencyConverterComponent implements OnInit {
  @Output() conversionChanged = new EventEmitter<CurrencyConversionForm>();

  @Input() fromCurrency = "USD";
  @Input() toCurrency = "INR";

  currencyConversionForm: CurrencyConversionForm = {
    fromCurrency: this.fromCurrency,
    fromAmount: 0,
    toCurrency: this.toCurrency,
    toAmount: 0
  };

  availableCurrencies: string[] = [];
  d$inputChange: Function;

  constructor(
    private currencyConverterService: CurrencyConverterService,
  ) { 
    this.d$inputChange = debounce(this.convert, 1000);
  }

  ngOnInit(): void {
    this.currencyConverterService.getAvailableCurrencies().subscribe(currencies => {
      this.availableCurrencies = currencies;
    });
  }

  convert(reverse: boolean = false) {
    const { fromCurrency, fromAmount, toCurrency, toAmount } = this.currencyConversionForm;
    const amount = reverse ? toAmount: fromAmount;
    const tempFromCurrency = reverse ? toCurrency: fromCurrency;
    const tempToCurrency = reverse ? fromCurrency: toCurrency;

    if (!amount) return;

    this.currencyConverterService.convert(amount, tempFromCurrency, tempToCurrency).subscribe(conversion => {
      if (reverse)
        this.currencyConversionForm.fromAmount = +conversion.toFixed(2);
      else
        this.currencyConversionForm.toAmount = +conversion.toFixed(2);

      this.conversionChanged.emit({ ...this.currencyConversionForm});
    })
  }

  
  get isConverted() {
    const { fromAmount, toAmount } = this.currencyConversionForm;
    return fromAmount > 0 && toAmount > 0;
  }
}
