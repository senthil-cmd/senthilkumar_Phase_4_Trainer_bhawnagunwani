import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { ManageproductComponent } from './admin/manageproduct/manageproduct.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductviewComponent } from './productview/productview.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PurchaseReportComponent } from './purchase-report/purchase-report.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    ManageproductComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent,
    CartComponent,
    ProductviewComponent,
    CheckoutComponent,
    PurchaseReportComponent,
    FooterComponent,
    PageNotFoundComponent,
    HeaderComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
