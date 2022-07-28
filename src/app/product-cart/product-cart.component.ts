import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from '../_interface/iproduct';
import { ProductDataService } from '../_services/product-data.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css'],
})
export class ProductCartComponent implements OnInit {
  // @Input() productTitle?: IProduct;
  constructor(private producttitledata: ProductDataService) {}
  myTitleData?: IProduct;
  title: string[] = [];
  ngOnInit(): void {
    this.producttitledata.getTitleData().subscribe((p) => {
      this.title.push(p.title);
    });
  }
  delete(index: number) {
    this.title.splice(index, 1);
  }
}
