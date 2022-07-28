import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersApiComponent } from './users-api.component';

const routes: Routes = [{ path: '', component: UsersApiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersApiRoutingModule {}
