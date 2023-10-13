import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MerchComponent } from './merch/merch.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=>import('./layout/layout.module')
                      .then(mod => mod.LayoutModule)               
  },
  {
    component:LoginComponent,
    path:'login',
  },
  {
    component:DashboardsComponent,
    path:'dashboards',
  },
  {
    component:RegisterComponent,
    path:'register',
  },
  {
    component:MerchComponent,
    path:'merch',
  },
  {
    component:UserComponent,
    path:'user',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
