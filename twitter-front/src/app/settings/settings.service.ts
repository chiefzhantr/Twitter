import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../models/user";
import {Profile} from "../models/profile";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  BASE_URL = "http://localhost:8000"

  constructor(private client: HttpClient) {
  }

  updateValues(id: number, phone_number: string) {
    return this.client.post<Profile>(`${this.BASE_URL}/api/update/`, {id, phone_number})
  }

}
