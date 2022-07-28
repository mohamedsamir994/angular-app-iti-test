import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpClient) {}

  getAllUsers(page = 1) {
    return this.http.get(
      `https://www.mecallapi.com/api/users?page=${page}&per_page=5`
    );
  }
}
