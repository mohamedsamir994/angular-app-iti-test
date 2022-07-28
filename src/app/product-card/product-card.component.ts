import {
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { IProduct } from '../_interface/iproduct';
import { ProductDataService } from '../_services/product-data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() mydata!: IProduct;
  @Output() onAddToCart: EventEmitter<IProduct> = new EventEmitter();
  @ViewChildren('p') showP!: QueryList<ElementRef>;

  constructor(private producttitledata: ProductDataService) {}
  myTitleData?: IProduct[];

  gettitle(mydata: IProduct) {
    this.onAddToCart.emit(mydata);
    console.log(mydata.title);
  }
  ngOnInit(): void {}

  getTilteData(productTiltle: IProduct) {
    this.producttitledata.setTitleData(productTiltle);
  }
  show(data: IProduct) {
    this.showP.forEach((ele) => {
      (ele.nativeElement as HTMLParagraphElement).style.display = 'block';
    });
  }
  hide() {
    this.showP.forEach((ele) => {
      (ele.nativeElement as HTMLParagraphElement).style.display = 'none';
    });
  }
}
