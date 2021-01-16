import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';


import { MainFooterComponent } from './footers';
import { MainHeaderComponent } from './headers';
import { ContentLayoutComponent } from './layouts';

@NgModule({
  declarations: [
    MainFooterComponent,
    MainHeaderComponent,
    ContentLayoutComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    MainFooterComponent,
    MainHeaderComponent,
    ContentLayoutComponent
  ]
})
export class LayoutModule { }
