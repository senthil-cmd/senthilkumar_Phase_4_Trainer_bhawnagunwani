import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { CartserviceService } from '../service/cartservice.service';
import { ReportService } from '../service/report.service';

@Component({
  selector: 'app-purchase-report',
  templateUrl: './purchase-report.component.html',
  styleUrls: ['./purchase-report.component.css']
})
export class PurchaseReportComponent implements OnInit {
  cartitems:Array<Product>=[];
  data:any 
  i:number=0
  constructor(private cart:CartserviceService,private report:ReportService) { }

  ngOnInit(): void {
    this.cartitems=this.cart.getData()
    this.data=this.report.getData()
    this. i = this.cartitems.length;
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
