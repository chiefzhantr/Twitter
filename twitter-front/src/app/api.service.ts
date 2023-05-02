import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { User } from 'src/app/models/user';
import { Post } from 'src/app/models/post';
import {AuthToken} from "./models/token";

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  // private baseUrl = 'https://twitter.kz/api';
  BASE_URL="http://localhost:8000"
  currentUserId = -1;
  mockUsers : User[];
  mockPosts : Post[];

  constructor(private http: HttpClient) {
    this.getCurrentUserId()
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
      } as User
    ];

  }

  // verify(code: string | null) : Observable<any>{
  //   // @ts-ignore
  //   return this.http.post(`${this.BASE_URL}/api/verify/`, {code})
  // }
  // @ts-ignore
  register(username : String, password : String, email : String, firstname: String, lastname : String, phone : String) : Observable<any>{
    return this.http.post(`${this.BASE_URL}/api/register/`,{username, password, email, firstname, lastname, phone})
  }
  sendCode(email : String, code : String) :Observable<any>{
    return this.http.post(`${this.BASE_URL}/api/send_code/`,{email,code})
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
  getCurrentUserId() {
    const idString = localStorage.getItem('id');
    console.log(idString)
    this.currentUserId = idString ? parseInt(idString) : -1
  }

}
