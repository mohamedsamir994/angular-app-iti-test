import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FavoriteProductComponent } from './favorite-product/favorite-product.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { SlicePipe } from './_pipes/slice.pipe';
import { FilterPipe } from './_pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeBGDirective } from './_direct/change-bg.directive';
import { ForNumberDirective } from './_direct/for-number.directive';
import { ProductDetalisComponent } from './product-detalis/product-detalis.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    FavoriteProductComponent,
    ProductCartComponent,
    SlicePipe,
    FilterPipe,
    ChangeBGDirective,
    ForNumberDirective,
    ProductDetalisComponent,
    LoginComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
