import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {NgForm} from "@angular/forms";
import {Post} from "../models/post";
import {ActivatedRoute, Router} from "@angular/router";
import {Media} from "../models/media";
import { Profile } from '../models/profile';
import {ApiService} from "../api.service";
import {PostService} from "../post.service";
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
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private postService: PostService,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    //mock
    this.user = {
    } as Profile;
    this.posts = [
      {
      } as Post
    ]
  }
  private getUser() {
    // return this.apiService.getUser(user_id: loggedUser.id).subscribe(posts => this.posts);
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    this.apiService.getProfile(productIdFromRoute).subscribe((user) => {
      this.user = user;
    });
  }
  private getPosts() {
    // return this.apiService.getUser(user_id: loggedUser.id).subscribe(posts => this.posts);
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    this.postService.getPostUsername(productIdFromRoute).subscribe((posts) => {
      console.log(posts.length)
      this.posts = posts;
    });
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

  addPostPage() {
    this.router.navigate(['addPost'])
  }
}
