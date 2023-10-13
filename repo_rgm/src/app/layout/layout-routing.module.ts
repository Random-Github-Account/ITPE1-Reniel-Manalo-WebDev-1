import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes : Routes = [
  {
    path:"",
    component: LayoutComponent,
    children:[
      {
        path:"",
        redirectTo:"",
        pathMatch:"prefix"
      },
      {
        path:"dashboard",
        loadChildren: ()=>import('./dashboard/dashboard.module')
                          .then(mod => mod.DashboardModule),
      },
      {
        path:"products",
        loadChildren: ()=>import('./products/products.module')
                          .then(mod => mod.ProductsModule),
      },
    ]
  }
]

@NgModule({
 imports:[RouterModule.forChild(routes)],
 exports:[RouterModule]
})
export class LayoutRoutingModule { }
