import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { ProductDetalisComponent } from './product-detalis/product-detalis.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'productlist', component: ProductListComponent },
  { path: 'productlist/login', component: LoginComponent },
  { path: 'productlist/addproduct', component: AddProductComponent },
  { path: '', redirectTo: 'productlist', pathMatch: 'full' },
  {
    path: 'productlist/addproduct/addproduct',
    redirectTo: 'productlist/addproduct',
    pathMatch: 'full',
  },

  {
    path: 'productlist/addproduct/login',
    redirectTo: 'productlist/login',
    pathMatch: 'full',
  },
  {
    path: 'productlist/addproduct/',
    redirectTo: 'productlist/login',
    pathMatch: 'full',
  },
  {
    path: 'productlist/addproduct/add',
    redirectTo: 'productlist',
    pathMatch: 'full',
  },
  {
    path: 'productlist/login/addproduct',
    redirectTo: 'productlist/addproduct',
    pathMatch: 'full',
  },
  { path: 'productd/:id', component: ProductDetalisComponent },
  {
    path: 'productlist/usersApi',
    loadChildren: () =>
      import('./users-api/users-api.module').then((m) => m.UsersApiModule),
  },
  {
    path: 'productlist/login/usersApi',
    redirectTo: 'productlist/usersApi',
    pathMatch: 'full',
  },
  {
    path: 'productlist/addproduct/usersApi',
    redirectTo: 'productlist/usersApi',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
