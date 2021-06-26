import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { CartserviceService } from '../service/cartservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  cartitems:Array<Product>=[];
  constructor(private cart:CartserviceService) { }

  ngOnInit(): void {
    
  }
  addedcart(pdt:Product){
    console.log(pdt)
    this.cartitems.push(pdt)
    this.cart.setData(this.cartitems)
    console.log(this.cart.getData)
    console.log(this.cart)
  }
  
}
