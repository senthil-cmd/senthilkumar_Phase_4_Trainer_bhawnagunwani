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

  constructor(private service:ProductRestServiceService) { }

  ngOnInit(): void {this.service.getProduct().subscribe(result=>{this.Productlist=result})
}
addtocart(pdt:Product,i:any){
  this.cart.push(pdt)
  console.log(this.cart)
  console.log(i)
 this.cartdata=this.Productlist
  this.changecart.emit()
}
@Input()cartdata:any
@Output()changecart = new EventEmitter(); 
}
