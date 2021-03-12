import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './logo/bills/bills.component';
import { CareerComponent } from './logo/career/career.component';
import { LoginInComponent } from './logo/login-in/login-in.component';
import { MenuComponent } from './logo/menu/menu.component';
import { AboutComponent } from './nav-bar/about/about.component';
import { HomeComponent } from './nav-bar/home/home.component';
import { LoginComponent } from './nav-bar/login/login.component';
import { PageNotFoundComponent } from './nav-bar/page-not-found/page-not-found.component';
import { ProductsComponent } from './nav-bar/products/products.component';
import { SignupComponent } from './nav-bar/signup/signup.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'products', component:ProductsComponent},
  {path:'', component:MenuComponent},
  {path:'career', component:CareerComponent},
  {path:'login-in', component:LoginInComponent},
  {path:'bills', component:BillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
