import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
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
import { CartserviceService } from './service/cartservice.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpdatePasswordComponent } from './admin/update-password/update-password.component';
import { ReportService } from './service/report.service';
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
    UpdateproductComponent,
    UpdatePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [CartserviceService,ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
