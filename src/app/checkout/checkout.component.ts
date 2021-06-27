import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { CartserviceService } from '../service/cartservice.service';
import { ReportService } from '../service/report.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {



  checkoutForm = this.formbuilder.group({
    firstname: '',
    lastname: '',
    username:'',
    email:'',
    address:'',
    address2:'',
    country:'',
    state:'',
    zipcode:'',
    checkbox1:'',
    checkbox2:'',
    checkbox3:'',
    paymentmethod1:'',
    paymentmethod2:'',
    paymentmethod3:'',
    cardname:'',
    cardNumber:'',
    cconcard:'',
    cvv:'',
  });
  constructor(private cart:CartserviceService,
  private formbuilder:FormBuilder,
  private report:ReportService,private router:Router
  ) { }
  cartitems:Array<Product>=[];
  ngOnInit(): void {
    this.cartitems=this.cart.getData()
  console.log(this.cart)
  }
  onSubmit(): void {
    // Process checkout data here
    this.report.setData(this.checkoutForm.value)
    this.router.navigate(['/purchase-report'])
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