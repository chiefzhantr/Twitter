import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../post.service";
import { Post } from '../models/post';
import { Media } from '../models/media';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  // post: Post;
  bodyValue: string;
  mediaUrlValue: string;

  constructor(
    private router: Router,
    private postService: PostService
  ) {
    this.bodyValue = "";
    this.mediaUrlValue = "";
  }
  ngOnInit(): void {
  }

  addPost() {
    const bodyField = document.getElementById('body') as HTMLTextAreaElement;
    const mediaUrlField = document.getElementById('mediaurl') as HTMLTextAreaElement;
    const newBodyValue = bodyField.value.trim();
    const newMediaUrlValue = mediaUrlField.value.trim();

    if (!newBodyValue && !newMediaUrlValue) {
      alert('You cannot change nothing. If you want to quit, use the sidebar.');
      return;
    }
    console.log(newMediaUrlValue);
    const post = {
      "body": newBodyValue,
      "username": localStorage.getItem('username'),
    } as Post;
    console.log(post);
    this.postService.createPost(post).subscribe((data)=>{
      return post
    })
    this.router.navigate(['news'], {queryParams: {searchText: ''}})
  };
}
