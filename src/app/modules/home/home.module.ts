import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

// Modules
import { HomeRoutingModule } from './home.routing';

// Components
import { CurrencyConverterPageComponent } from './pages/currency-converter-page/currency-converter-page.component';
import { LengthConverterPageComponent } from './pages/length-converter-page/length-converter-page.component';

@NgModule({
  declarations: [
    CurrencyConverterPageComponent,
    LengthConverterPageComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
