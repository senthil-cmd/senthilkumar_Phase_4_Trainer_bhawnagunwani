import { Component, OnInit } from '@angular/core';
import { ProductRestServiceService } from 'src/app/service/product-rest-service.service';

@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})
export class ManageproductComponent implements OnInit {

search:string='';
  Productlist:Array<any>=[];
  constructor(private service:ProductRestServiceService
    ) { }

  ngOnInit(): void {this.service.getProduct().subscribe(result=>{this.Productlist=result})
  }
delete(product:any,index:any){
  if(window.confirm('Are you sure?')){
    this.service.DeleteProduct(product.id).subscribe((result)=>{this.Productlist.slice(index,1)})
  }
 
}
}
