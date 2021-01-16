import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/layouts';

const routes: Routes = [
  { 
    path: "",
    component: ContentLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
