import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {NgForm} from "@angular/forms";
import {Post} from "../models/post";
import {Router} from "@angular/router";
import {Media} from "../models/media";
import { Profile } from '../models/profile';
// import {ApiService} from "../api.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{


  user: Profile;
  posts: Post[];

  ngOnInit() {
    this.getUser()
    this.getPosts()
  }

  constructor(
    // private apiService: ApiService
    private router: Router
  ) {
    //mock
    this.user = {
    } as Profile;
    this.posts = [
      {
        "id":1,
        "username": "Dimmyt",
        "user_id": 1,
        "profilePicture": "1.jpeg",
        "body": "MCI:BAY 3:0",
        "medias": [
          {
            "url": "https://www.telegraph.co.uk/content/dam/football/2023/04/11/TELEMMGLPICT000331816105_trans_NvBQzQNjv4BqucMME0J0zUzg7Qbl4GjdiDepFsdpyoBPRlNLqKxJpjg.jpeg",
          }
        ] as Media[]
      } as Post
    ]
  }
  private getUser() {
    // return this.apiService.getUser(user_id: loggedUser.id).subscribe(posts => this.posts);
    this.user = {
      "username": "Dimmyt",
      "first_name": "Ali",
      "last_name": "Soldatbay",
      "profile_picture": "assets/noavatar.png",
      "phone_number": "+77077441212",
    } as Profile;
  }
  private getPosts() {
    // return this.apiService.getPosts(user_id: this.user.id).subscribe(posts => this.posts);
    this.posts = [
      {
        "id":1,
        "username": "Dimmyt",
        "user_id": 1,
        "profilePicture": "1.jpeg",
        "body": "MCI:BAY 3:0",
        "medias": [
          {
            "url": "https://www.telegraph.co.uk/content/dam/football/2023/04/11/TELEMMGLPICT000331816105_trans_NvBQzQNjv4BqucMME0J0zUzg7Qbl4GjdiDepFsdpyoBPRlNLqKxJpjg.jpeg",
          }
        ] as Media[]
      } as Post,
      {
        "id":2,
        "username": "Dimmyt",
        "user_id": 1,
        "profilePicture": "1.jpeg",
        "body": "Playoffs 1 round - Warriors vs Kings",
        "medias": [
          {
            "url": "https://www.telegraph.co.uk/content/dam/football/2023/04/11/TELEMMGLPICT000331816105_trans_NvBQzQNjv4BqucMME0J0zUzg7Qbl4GjdiDepFsdpyoBPRlNLqKxJpjg.jpeg",
          }
        ] as Media[]
      } as Post
    ]
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    for (let x in f.value) {
      console.log(x)
    }
    console.log(f.valid);
  }

  isOwner() {
    //uncomment when implement loggedUser
    // return this.user.username == loggedUser.username
    return false
  }

  showDetails(id: number) {
    this.router.navigate(['news/'+id])
  }
  showEditPostPage(id: number) {
    this.router.navigate(['editPost/'+id])
  }
}
