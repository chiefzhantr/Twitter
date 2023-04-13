import { Component } from '@angular/core';
import {User} from "../user";
import {NgForm} from "@angular/forms";
import {Post} from "../post";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User;
  post: Post;
  constructor() {
    this.user = {
      "username": "Dimmyt",
      "first_name": "Ali",
      "last_name": "Soldatbay",
      "phone_number": "+77077441212",
    } as User;
    this.post={
      "id":1,
      "username": "Dimmyt",
      "user_id": 1,
      "profilePicture": "1.jpeg",
      "body": "MCI:BAY 3:0",



    } as Post;
  }


  onSubmit(f: NgForm) {
    console.log(f.value);
    for (let x in f.value) {
      console.log(x)
    }
    console.log(f.valid);
  }
}
