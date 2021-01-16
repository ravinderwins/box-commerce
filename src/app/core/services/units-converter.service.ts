import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitsConverterService {
  private unitConversionData: any[] = [{
    unit: "m",
    conversions: {
      "m": 1,
      "yd": 1.0936, 
      "in": 39.3701
    }
  },
  {
    unit: "yd",
    conversions: {
      "m": 0.9144,
      "yd": 1,
      "in": 36
    }
  },
  {
    unit: "in",
    conversions: {
      "m": 0.0254,
      "in": 1,
      "yd": 0.0277,
    }
  }];

  constructor() { }

  getUnits(): string[] {
    return this.unitConversionData.map(d => d.unit);
  }

  convert(value: number, fromUnit: string, toUnit: string): number {
    const index = this.unitConversionData.findIndex((x: any) => x.unit === fromUnit);
    if (index == -1) return 0;

    let conversionRate = this.unitConversionData[index].conversions[toUnit];
    return value * conversionRate;
  }

  
}
