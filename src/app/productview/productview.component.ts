import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ManageproductComponent } from '../admin/manageproduct/manageproduct.component';
import { Product } from '../model/Product';
import { ProductRestServiceService } from '../service/product-rest-service.service';


@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})

export class ProductviewComponent implements OnInit {
  Productlist:Array<Product>=[];
  cart:Array<Product>=[];
  //@Input()cartdata:any;
  cartdata:Product=new Product();
  @Output()changecart:EventEmitter<any> = new EventEmitter();
  constructor(private service:ProductRestServiceService) { 
  }

  search:string='';
  ngOnInit(): void {this.service.getProduct().subscribe(result=>{this.Productlist=result})
}
addtocart(pdt:Product,i:any){
  this.cart.push(pdt)
 this.cartdata=pdt
  this.changecart.emit(this.cartdata)
  
}
 searchitem(){
   this.Productlist.filter
 }
}
