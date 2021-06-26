import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductRestServiceService } from '../service/product-rest-service.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  id:any
  product:Product = new Product();
  constructor(private _activatedRoute:ActivatedRoute,
    private service: ProductRestServiceService,
    private router:Router) { }

  ngOnInit(): void {this.id=this._activatedRoute.snapshot.paramMap.get("id");
  this.service.getProductById(this.id).subscribe(result=>{this.product=result});
  }
  updateproduct(){
    this.service.updateProduct(this.id,this.product).subscribe(result=>{this.router.navigate(['/manageItem'])
  console.log(result)})  }
}

