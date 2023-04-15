import { Component } from '@angular/core';
import {User} from "../models/user";
import {NgForm} from "@angular/forms";
import {Post} from "../models/post";
// import {ApiService} from "../api.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user: User;
  posts: Post[];
  constructor(
    // private apiService: ApiService
  ) {
  //   this.user = this.getUser()
  //   this.posts = this.getPosts()
    this.user = {
      "username": "Dimmyt",
      "first_name": "Ali",
      "last_name": "Soldatbay",
      "phone_number": "+77077441212",
    } as User;
    this.posts = [
      {
        "id":1,
        "username": "Dimmyt",
        "user_id": 1,
        "profilePicture": "1.jpeg",
        "body": "MCI:BAY 3:0"
      } as Post,
      {
        "id":2,
        "username": "Dimmyt",
        "user_id": 1,
        "profilePicture": "1.jpeg",
        "body": "Playoffs 1 round - Warriors vs Kings"
      } as Post
    ]

  }
  //
  // private getUser() {
  //   // this.apiService.getUser(username).subscribe((user: User) => {
  //   //   this.user = user;
  //   // });
  //   return this.apiService.mockUsers[0];
  // }
  // private getPosts() {
  //   return this.apiService.mockPosts;
  // }
  //
  onSubmit(f: NgForm) {
    console.log(f.value);
    for (let x in f.value) {
      console.log(x)
    }
    console.log(f.valid);
  }

  deletePost(post: Post) {
    const index = this.posts.indexOf(post);
    if (index > -1) {
      this.posts.splice(index, 1);
    }
  }

  isOwner() {
    //uncomment when implement loggedUser
    // return this.user.username == loggedUser.username
    return false
  }
}
