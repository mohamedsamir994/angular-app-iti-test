import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductDataService } from '../_services/product-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(private myProducts: ProductDataService) {}

  ngOnInit(): void {}
  myForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(1)]),
    title: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    rating: new FormGroup({
      rate: new FormControl('', Validators.required),
      count: new FormControl('', Validators.required),
    }),
  });

  get id() {
    return this.myForm.get('id') as FormControl;
  }
  get title() {
    return this.myForm.get('title') as FormControl;
  }
  get price() {
    return this.myForm.get('price') as FormControl;
  }
  get description() {
    return this.myForm.get('description') as FormControl;
  }
  get category() {
    return this.myForm.get('category') as FormControl;
  }
  get image() {
    return this.myForm.get('image') as FormControl;
  }
  get ratingRate() {
    return this.myForm.get('rating.rate') as FormControl;
  }
  get ratingCount() {
    return this.myForm.get('rating.count') as FormControl;
  }

  addProduct(user: any) {
    this.myProducts.addProduct(user);
  }
}
