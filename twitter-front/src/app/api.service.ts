import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { User } from 'src/app/models/user';
import { Post } from 'src/app/models/post';
import {AuthToken} from "./models/token";
import {Profile} from "./models/profile";

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
      {} as Post
    ];
    this.mockUsers = [
      {} as User
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

  getProfile(id: number): Observable<Profile> {
    return this.http.get<Profile>(`${this.BASE_URL}/api/users/${id}`);
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
