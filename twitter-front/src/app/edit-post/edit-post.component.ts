import {Component, OnInit} from '@angular/core';

import {ApiService} from "../api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../models/post";
import {PostService} from "../post.service";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit{

  post: Post;
  media_list: string[];

  constructor(
     private postService: PostService,
     private route: ActivatedRoute,
     private router: Router,
  ) {
    this.post = {} as Post;
    this.media_list = [];
  }
  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('postId'));
    this.media_list = [];

    // uncomment when back will be finished.
    this.postService.getPostById(productIdFromRoute) .subscribe((post) => {
      this.post = post;
    });
  }

  deletePost() {
    console.log("here!");
    this.postService.deletePost(this.post.id).subscribe((data)=>{
      return data
    })
    this.router.navigate(['profile/'+this.post.user_id],)
  }

  updatePost() {
    const bodyField = document.getElementById('body') as HTMLTextAreaElement;
    let newBodyValue = bodyField.value.trim();

    if (!newBodyValue) {
      newBodyValue = this.post.body
    }
    const post = {
      "body": newBodyValue,
      "medias": this.media_list,
      "username": localStorage.getItem('username'),
    };
    console.log(post);
    this.postService.updatePost(this.post.id, post).subscribe((data)=>{
      return post
    })
    this.router.navigate(['profile/'+this.post.user_id],)
  };

  addMedia() {
    const bodyField = document.getElementById('tweet-body') as HTMLTextAreaElement;
    const bodyValue = bodyField.value.trim();
    if (!bodyValue) {
      alert('You cannot leave nothing, type something');
      return;
    }
    this.media_list.push(bodyValue);
    bodyField.value = "";
  }
}
