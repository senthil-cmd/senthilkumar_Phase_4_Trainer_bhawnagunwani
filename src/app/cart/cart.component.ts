import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Product } from '../model/Product';
import { CartserviceService } from '../service/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart:CartserviceService) { }
  cartitems:Array<Product>=[];
  ngOnInit(): void {
    this.cartitems=this.cart.getData()
  console.log(this.cart)
  }
  getTotal() {
    let total = 0;
    for (var i = 0; i < this.cartitems.length; i++) {
        if (this.cartitems[i].price) {
            total += this.cartitems[i].price;
          total= Math.ceil(total)
        }
    }
    return total;
    
    
}  

}