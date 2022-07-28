import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersApiRoutingModule } from './users-api-routing.module';
import { UsersApiComponent } from './users-api.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ForDirective } from './for.directive';

@NgModule({
  declarations: [UsersApiComponent, ForDirective],
  imports: [CommonModule, UsersApiRoutingModule, HttpClientModule, FormsModule],
})
export class UsersApiModule {}
