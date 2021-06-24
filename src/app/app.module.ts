import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { ManageproductComponent } from './admin/manageproduct/manageproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    ManageproductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
