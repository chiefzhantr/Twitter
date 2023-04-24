import {Component, OnInit} from '@angular/core';

import {ApiService} from "../api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../models/post";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit{

  // post: Post;
  bodyValue: string;
  mediaUrlValue: string;

  constructor(
    // private apiService: ApiService
    private route: ActivatedRoute
  ) {
    this.bodyValue = "123";
    this.mediaUrlValue = "321";
  }
  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('postId'));

    // uncomment when back will be finished.
    // this.post = this.postService.getPostById(productIdFromRoute) as Post;
    // this.bodyValue = this.post.body;
    // this.mediaUrlValue = this.post.mediaUrl;

  }

  deletePost() {
//   this.apiService.deletePost(post.id).subs
  }

  updatePost() {
    const bodyField = document.getElementById('body') as HTMLTextAreaElement;
    const mediaUrlField = document.getElementById('mediaurl') as HTMLTextAreaElement;
    const newBodyValue = bodyField.value.trim();
    const newMediaUrlValue = mediaUrlField.value.trim();

    if (!newBodyValue && !newMediaUrlValue) {
      alert('You cannot change nothing. If you want to quit, use the sidebar.');
      return;
    }

    if (!newBodyValue) {
      bodyField.value = this.bodyValue;
    }

    if (!newMediaUrlValue) {
      mediaUrlField.value = this.mediaUrlValue;
    }
  };
}
