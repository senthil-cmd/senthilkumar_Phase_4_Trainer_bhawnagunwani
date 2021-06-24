import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { ManageproductComponent } from './admin/manageproduct/manageproduct.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'addItem',component:AddproductComponent},
  {path:'manageItem',component:ManageproductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
