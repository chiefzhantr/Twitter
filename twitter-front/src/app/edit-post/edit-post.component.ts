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

  constructor(
     private postService: PostService,
     private route: ActivatedRoute,
     private router: Router,
  ) {
    this.post = {} as Post;
  }
  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('postId'));

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
    const mediaUrlField = document.getElementById('mediaurl') as HTMLTextAreaElement;
    const newBodyValue = bodyField.value.trim();
    const newMediaUrlValue = mediaUrlField.value.trim();
    console.log(this.post)

    if (!newBodyValue && !newMediaUrlValue) {
      alert('You cannot change nothing. If you want to quit, use the sidebar.');
      return;
    }

    if (!newBodyValue) {
    }

    if (!newMediaUrlValue) {
    }
  };
}
