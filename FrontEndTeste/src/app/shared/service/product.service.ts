import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from "rxjs/operators";
import { Product } from '../model/Product'



@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private readonly API = `http://localhost:3000/product`;

  constructor(protected http: HttpClient) { }

  // GET All
  list(){
    return this.http.get<Product[]>(this.API)
    .pipe(

    );
  }
}
