import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { LoginComponent } from './admin/login/login.component';
import { ManageproductComponent } from './admin/manageproduct/manageproduct.component';
import { UpdatePasswordComponent } from './admin/update-password/update-password.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PurchaseReportComponent } from './purchase-report/purchase-report.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'addItem',component:AddproductComponent},
  {path:'manageItem',component:ManageproductComponent},
  {path:'adminLogin',component:LoginComponent},
  {path:'purchase-report',component:PurchaseReportComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'cart',component:CartComponent},
  {path:'updateproduct/:id',component:UpdateproductComponent},
  {path:'updatepassword',component:UpdatePasswordComponent},
  {path:'**',component:PageNotFoundComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
