import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class SettingsService{

  BASE_URL="http://localhost:8000"

  constructor(private client: HttpClient) {
  }

  updateValues(user_id:string, username: string, firstname:string, lastname: string, password: string){
    return this.client.put<User>(`${this.BASE_URL}/api/users/${user_id}`,{username,firstname,lastname,password})
  }


}
