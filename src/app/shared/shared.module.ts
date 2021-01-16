import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Custom Modules
import { MaterialModule } from './mateial.module';
import { ComponentsModule } from './components/components.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [],
  imports: [
    // Angular Modules
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // Thrid Party
    ChartsModule,

    // Custom Modules
    MaterialModule,
    ComponentsModule

  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // Thrid Party
    ChartsModule,
    
    MaterialModule,
    ComponentsModule
  ]
})
export class SharedModule { }
