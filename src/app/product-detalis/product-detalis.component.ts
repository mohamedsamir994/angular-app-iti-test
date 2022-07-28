import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../_interface/iproduct';
import { ProductDataService } from '../_services/product-data.service';

@Component({
  selector: 'app-product-detalis',
  templateUrl: './product-detalis.component.html',
  styleUrls: ['./product-detalis.component.css'],
})
export class ProductDetalisComponent implements OnInit {
  constructor(
    private users: ProductDataService,
    private detrout: ActivatedRoute
  ) {}

  myId: number = 0;
  myUser?: IProduct;

  ngOnInit(): void {
    this.detrout.params.subscribe((param) => {
      this.myId = param['id'];
    });
    this.myUser = this.users.getUserById(this.myId - 1);
    // console.log(this.myUser);
  }
}
