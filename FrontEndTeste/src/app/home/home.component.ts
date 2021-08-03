import { ProductService } from './../shared/service/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/model/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private serviceHttp: ProductService,) { }

  product$!: Observable<Product[]>;

  ngOnInit(): void {
    this.product$ = this.serviceHttp.list()

  }


}
