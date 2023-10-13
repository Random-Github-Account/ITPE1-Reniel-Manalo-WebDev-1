import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ProductsComponent } from './layout/products/products.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { ScreenComponent } from './components/screen/screen.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { MerchComponent } from './merch/merch.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardsComponent,
    RegisterComponent,
    UserComponent,
    MerchComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
