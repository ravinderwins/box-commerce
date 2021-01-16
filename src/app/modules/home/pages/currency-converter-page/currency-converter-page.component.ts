import { LocalStorageService } from '@app/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { CurrencyConversionForm } from '@app/models/currency-conversion-form.model';

import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DatePipe, DecimalPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-currency-converter-page',
  templateUrl: './currency-converter-page.component.html',
  styleUrls: ['./currency-converter-page.component.scss'],
  providers: [DatePipe, DecimalPipe, CurrencyPipe]
})
export class CurrencyConverterPageComponent implements OnInit {
  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: any = 'line';

  lineChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
      }],
      yAxes: [{
        ticks: {
          min : 0,
          callback:  (value: number) => {
            return this.decimalPipe.transform(value);
          }
        }
      }]
    },
    tooltips: {
      callbacks: {
        label: (tooltipItem: any, data: any) => {
          const index = tooltipItem.index;
          const dataSetIndex = tooltipItem.datasetIndex;
          const value = data.datasets[dataSetIndex].data[index];
          const conversion = this.userConversions[index];
          const currencyCode = dataSetIndex == 0 ? conversion.fromCurrency : conversion.toCurrency;
          return `${this.currencyPipe.transform(value, currencyCode)}`;
        }
      } // end callbacks:
    }, //end tooltips
  };

  lineChartColors: Color[] = [];
  
  userConversions: CurrencyConversionForm[] = [];

  constructor(
    private datePipe: DatePipe, 
    private decimalPipe: DecimalPipe,
    private currencyPipe: CurrencyPipe,
    private localStorageService: LocalStorageService) { 
  }

  ngOnInit(): void {
    this.userConversions = this.localStorageService.getUserConversions();
    this.initalizeChart();
  }

  initalizeChart() {
    const top10Conversions = this.userConversions.slice(0, 10);
    
    const fromSeriesData: number[] = [];
    const toSeriesData: number[] = [];
    const labels: string[] = [];
    
    top10Conversions.forEach((converstion) => {
      fromSeriesData.push(converstion.fromAmount);
      toSeriesData.push(converstion.toAmount);

      let label = this.datePipe.transform(converstion.dateTime, 'MM/dd/yyyy h:mm a') ?? '';
      labels.push(label);
    });

    const pointOptions: any = {
      borderWidth: 5,
      hoverBorderWidth: 6
    };

    this.lineChartLabels = labels;
    this.lineChartData = [
      {
        fill: false,
        data: fromSeriesData, 
        pointBorderColor: '#ff6384',
        ...pointOptions,
        label: 'From Conversion Series'
      },
      { 
        fill: false,
        data: toSeriesData, 
        pointBorderColor: '#1a8ae5',
        ...pointOptions,
        label: 'To Conversion Series' 
      },
    ];

  }

  conversionChanged(conversion: CurrencyConversionForm) {
    conversion.dateTime = new Date();
    this.userConversions.push(conversion);

    this.localStorageService.storeUserConversions(this.userConversions);
    this.initalizeChart();
  }
  

}
