import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@shared/mateial.module';

import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { LengthConverterComponent } from './length-converter/length-converter.component';

@NgModule({
  declarations: [
    CurrencyConverterComponent,
    LengthConverterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule
  ],
  exports: [
    CurrencyConverterComponent,
    LengthConverterComponent
  ]
})
export class ComponentsModule { }
