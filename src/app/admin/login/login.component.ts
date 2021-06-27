import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { admin } from 'src/app/model/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 adminservice:admin=new admin();
 adminview:admin=new admin();

  constructor(private http:HttpClient,public router: Router) { }
  
  ngOnInit():void {
    this.http.get<admin>('http://localhost:8080/service/60d7af1ad39ade21347cf92b').subscribe(result=>{this.adminservice=result})
  }
  signin(){
    console.log(this.adminservice)
    console.log(this.adminview)
    if(this.adminview.username==this.adminservice.username&&this.adminview.password==this.adminservice.password){
      this.router.navigate(['/manageItem'])
    }
    else{
      window.alert("username or password invalid")
    }
  }
}
