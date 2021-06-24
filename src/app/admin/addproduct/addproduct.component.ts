import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductRestServiceService } from '../../service/product-rest-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  @Input() product = {
    productid: 0,
    productName: '',
    brandName: '',
    category: '',
    desc: '',
    qty: 0,
    price: 0,
    productimage: ''

  }
  constructor(
    public service: ProductRestServiceService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  additem() {
    this.service.createProduct(this.product).subscribe((data: {}) => {
      this.router.navigate(['/manageItem'])
    })
  }
}
