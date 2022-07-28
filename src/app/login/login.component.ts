import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLogin = {
    username: '',
    password: '',
  };
  constructor() {}

  ngOnInit(): void {}
  loginn() {
    console.log(this.userLogin);
  }
  submitt(user: any) {
    console.log(user);
  }
}
