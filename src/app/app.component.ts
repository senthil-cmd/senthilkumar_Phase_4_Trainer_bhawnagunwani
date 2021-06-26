import { Component, OnInit } from '@angular/core';
import { Product } from './model/Product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kitchen-story';

ngOnInit(){
}
cart:Array<String>=[];

addedcartapp(prd:any){
console.log(prd)
}
}