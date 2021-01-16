import { Component, Input, OnInit } from '@angular/core';
import { UnitsConverterService } from '@app/services';
import { UnitConversionForm } from '@app/models';

@Component({
  selector: 'length-converter',
  templateUrl: './length-converter.component.html',
  styleUrls: ['./length-converter.component.scss']
})
export class LengthConverterComponent implements OnInit {
  availableUnits: string[] = [];

  @Input() fromUnit = "in";
  @Input() toUnit = "m";

  unitConversionForm: UnitConversionForm = {
    fromUnit: this.fromUnit,
    fromValue: 0,
    toUnit: this.toUnit,
    toValue: 0
  };
  
  constructor(
    private unitsConverterService: UnitsConverterService
  ) { }

  ngOnInit(): void {
    this.availableUnits = this.unitsConverterService.getUnits();
  }

  convert(reverse: boolean = false) {
    const { fromUnit, fromValue, toUnit, toValue } = this.unitConversionForm;
    
    if (reverse) {
      const convertedValue = this.unitsConverterService.convert(toValue, toUnit, fromUnit);
      this.unitConversionForm.fromValue = +convertedValue.toFixed(2);
    } else {
      const convertedValue = this.unitsConverterService.convert(fromValue, fromUnit, toUnit);
      this.unitConversionForm.toValue = +convertedValue.toFixed(2);
    }
  }

  get isConverted() {
    const { fromUnit, fromValue, toUnit, toValue } = this.unitConversionForm;
    return fromValue > 0 && toValue > 0;
  }

  get conversionResult() {
    const { fromUnit, fromValue, toUnit, toValue } = this.unitConversionForm;
    return `${fromValue} ${fromUnit} = ${toValue} ${toUnit}`;
  }
}
