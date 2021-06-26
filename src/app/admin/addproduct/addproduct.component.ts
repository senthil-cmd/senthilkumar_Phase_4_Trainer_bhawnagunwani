import { Component, OnInit} from '@angular/core';
import { ProductRestServiceService } from '../../service/product-rest-service.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product:Product = new Product();
  constructor(
    public service: ProductRestServiceService,
    public router: Router
  ) { }

  ngOnInit(): void {
    
  }
  additem(){
    console.log(this.product)
    this.service.createProduct(this.product).subscribe(result => {
      this.router.navigate(['/manageItem'])
      console.log(result)
    })
  }
}
