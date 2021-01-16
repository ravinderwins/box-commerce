import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { CurrencyConverterPageComponent, LengthConverterPageComponent } from './pages';

const routes: Routes = [
    {
      path: "",
      redirectTo: "currency-converter",
      pathMatch: "full"
    },
    {
      path: "currency-converter",
      component: CurrencyConverterPageComponent
    },
    {
      path: "length-converter",
      component: LengthConverterPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
