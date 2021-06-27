import { Component, OnInit } from '@angular/core';
import { admin } from 'src/app/model/admin';
import { ProductRestServiceService } from 'src/app/service/product-rest-service.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  constructor(private service:ProductRestServiceService ) { }
  adminservice:admin=new admin();
  username="";
   password="";
   id="60d7af1ad39ade21347cf92b";
  ngOnInit(): void {
  }
  changepasswoed(){
    this.adminservice.username=this.username
    this.adminservice.password=this.password
    this.service.updateadmin(this.id,this.adminservice).subscribe(result=>{this.adminservice=result,window.alert("username and password updated sucessfully")})
  }
}
