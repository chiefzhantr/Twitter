import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from "../models/user";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  user: User;
  constructor() {
    this.user = {
      "username": "Dimmyt",
      "first_name": "Ali",
      "last_name": "Soldatbay",
      "phone_number": "+77077441212",
    } as User;
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    for (let x in f.value) {
      console.log(x)
    }
    console.log(f.valid);
  }
}
