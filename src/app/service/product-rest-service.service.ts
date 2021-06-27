import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';

import{retry,catchError} from 'rxjs/Operators';
import { admin } from '../model/admin';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductRestServiceService {

  apiURL="http://localhost:8080"
  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL+'/products')
    .pipe(retry(1),catchError(this.handleError))
  }

  getProductById(id:string):Observable<Product>{
    return this.http.get<Product>(this.apiURL+'/item'+id)
    .pipe(retry(1),catchError(this.handleError))
  }

  createProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.apiURL+'/item',JSON.stringify(product),this.httpOptions)
    .pipe(retry(1),catchError(this.handleError))
  }
  updateProduct(id:String,product:Product):Observable<Product>{
    return this.http.put<Product>(this.apiURL+'/item/'+id,JSON.stringify(product),this.httpOptions)
    .pipe(retry(1),catchError(this.handleError))
  }
  DeleteProduct(id:string):Observable<Product>{
    return this.http.delete<Product>(this.apiURL+'/item'+id)
    .pipe(retry(1),catchError(this.handleError))
  }
  updateadmin(id:string,adminupdate:admin):Observable<admin>{
    return this.http.put<admin>(this.apiURL+'/service/'+id,JSON.stringify(adminupdate),this.httpOptions)
    .pipe(retry(1),catchError(this.handleError))
  }

  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
