import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { User } from 'src/app/models/user';
import { Post } from 'src/app/models/post';
import {AuthToken} from "./models/token";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private baseUrl = 'https://twitter.kz/api';
  BASE_URL="http://localhost:8000"

  mockUsers : User[];
  mockPosts : Post[];

  constructor(private http: HttpClient) {
    this.mockPosts = [
      {
        "id": 1,
        "username": "Dimmyt",
        "user_id": 1,
        "profilePicture": "1.jpeg",
        "body": "MCI:BAY 3:0"
      } as Post
    ];
    this.mockUsers = [
      {
        "username": "Dimmyt",
        "first_name": "Ali",
        "last_name": "Soldatbay",
        "phone_number": "+77077441212",
      } as User
    ];

  }


  getUser(username: string): Observable<User> {
    //uncomment when api will be ready
    // const url = `${this.baseUrl}/users/${username}`;
    // return this.http.get<User>(url);
    const user = this.mockUsers[0];
    return of(user);
  }
  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(
      `${this.BASE_URL}/api/login/`,
      {username, password}
    )
  }
  getPosts(username: string): Observable<Post[]> {
    //uncomment when api will be ready
    // const url = `${this.baseUrl}/users/${username}/posts`;
    // return this.http.get<Post[]>(url);
    return of(this.mockPosts);
  }

}
