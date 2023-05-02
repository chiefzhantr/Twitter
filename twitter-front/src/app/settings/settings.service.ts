import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class SettingsService{

  BASE_URL="http://localhost:8000"

  constructor(private client: HttpClient) {
  }

  updateValues(username: string, firstname:string, lastname: string, password: string, id:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    const body = {id,username,firstname,lastname,password};
    return this.client.post<User>(`${this.BASE_URL}/api/update/`, body, httpOptions)
  }


}
