import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './nav-bar/home/home.component';
import { AboutComponent } from './nav-bar/about/about.component';
import { LoginComponent } from './nav-bar/login/login.component';
import { SignupComponent } from './nav-bar/signup/signup.component';
import { ProductsComponent } from './nav-bar/products/products.component';
import { PageNotFoundComponent } from './nav-bar/page-not-found/page-not-found.component';
import { LogoComponent } from './logo/logo.component';
import { CareerComponent } from './logo/career/career.component';
import { LoginInComponent } from './logo/login-in/login-in.component';
import { BillsComponent } from './logo/bills/bills.component';
import { MenuComponent } from './logo/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    ProductsComponent,
    PageNotFoundComponent,
    LogoComponent,
    CareerComponent,
    LoginInComponent,
    BillsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
