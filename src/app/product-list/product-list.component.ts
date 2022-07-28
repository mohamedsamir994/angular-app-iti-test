import { Component, OnInit } from '@angular/core';
import { IProduct } from '../_interface/iproduct';
import { ProductDataService } from '../_services/product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  alldata!: IProduct[];
  titleData?: IProduct;
  searchitems?: IProduct[];
  values = '';
  constructor(private allproducts: ProductDataService) {}

  ngOnInit(): void {
    this.alldata = this.allproducts.getAllusers();
    this.searchitems = this.allproducts.getAllusers();
  }
  getProductData(productdata: IProduct) {
    this.titleData = productdata;
  }
}
