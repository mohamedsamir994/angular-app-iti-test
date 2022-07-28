import { Component, OnInit } from '@angular/core';
import { UserApiService } from './user-api.service';

@Component({
  selector: 'app-users-api',
  templateUrl: './users-api.component.html',
  styleUrls: ['./users-api.component.css'],
})
export class UsersApiComponent implements OnInit {
  myUsers: any = [];
  currentPage: number = 1;
  constructor(private userser: UserApiService) {}

  ngOnInit(): void {
    this.getAllUsers(1);
  }

  getAllUsers(page = 1) {
    this.userser.getAllUsers(page).subscribe((user) => {
      this.myUsers = user;
      this.currentPage = page;
    });
  }
}
